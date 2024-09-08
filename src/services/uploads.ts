import AdmZip from "adm-zip";
import path from "path";
import fs from "fs";
import { loadCache } from "../utils/loadCache";
import { Log } from "../lib/log";

console.log("UploadServices");

export class UploadServices {
  constructor() {}

  @Log()
  public async uploadZip(file) {
    const zipPath = path.join(process.cwd(), "uploads", file.filename);
    const unzipPath = path.join(process.cwd(), "static");

    try {
      // Ensure the unzip directory exists
      await fs.promises.mkdir(unzipPath, { recursive: true });
      await this.deleteDirectoryContents(unzipPath);

      // Unzip the file
      const zip = new AdmZip(zipPath);
      zip.extractAllTo(unzipPath, true);

      // Delete the zip file
      await fs.promises.unlink(zipPath);

      return "File uploaded and unzipped successfully";
    } catch (error) {
      return { "An error occurred while unzipping the file": error };
    }
  }

  @Log()
  public async uploadCacheFile(file, loadCacheFlag?: boolean) {
    const uploadedFilePath = path.join(process.cwd(), "uploads", file.filename);
    try {
      await fs.promises.unlink("./cacheData.json");
      // Create a readable stream
      const readStream = fs.createReadStream(uploadedFilePath);

      // Create a writable stream
      const writeStream = fs.createWriteStream("./cacheData.json");

      // Pipe the read stream to the write stream
      readStream.pipe(writeStream);

      writeStream.on("finish", async () => {
        console.log("File has been copied successfully.");
        await this.deleteDirectoryContents("./uploads");
        if (loadCacheFlag) {
          await loadCache();
        }
        return "successfully updated cacheData.json";
      });

      writeStream.on("error", (err) => {
        console.error("Error writing to file:", err);
        throw err;
      });

      readStream.on("error", (err) => {
        console.error("Error reading from file:", err);
        throw err;
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async deleteDirectoryContents(directoryPath) {
    try {
      const files = await fs.promises.readdir(directoryPath);
      const deletePromises = files.map(async (file) => {
        const filePath = path.join(directoryPath, file);
        const stats = await fs.promises.lstat(filePath);

        if (stats.isDirectory()) {
          await fs.promises.rm(filePath, { recursive: true });
        } else {
          await fs.promises.unlink(filePath);
        }
      });

      await Promise.all(deletePromises);
      console.log(`All contents of ${directoryPath} have been deleted.`);
    } catch (err) {
      console.error(`Error deleting contents of ${directoryPath}:`, err);
    }
  }
}
