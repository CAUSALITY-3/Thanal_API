console.log("Injector_Util");

class Injector {
  /* Internal mapping */
  private singletonObj: any = {};
  /* * Request the singleton with given name. */
  public get<T>(name: string): T {
    if (!this.singletonObj[name]) {
      throw new Error(`No object with name ${name} was loaded.`);
    }
    return this.singletonObj[name];
  }
  /* * Put a singleton into memory. */
  public bind(singleton: any, name: string): void {
    if (this.singletonObj[name]) {
      throw new Error(`An object with name ${name} already exists.`);
    }
    this.singletonObj[name] = singleton;
  }
  /* * Update a singleton in memory. */
  public update(singleton: any, name: string): boolean {
    if (this.singletonObj[name]) {
      this.singletonObj[name] = singleton;
      return true;
    } else {
      this.singletonObj[name] = singleton;
      return false;
    }
  }
  public delete(name: string): boolean {
    if (this.singletonObj[name]) {
      delete this.singletonObj[name];
      return true;
    } else {
      return false;
    }
  }
  public clear() {
    this.singletonObj = {};
  }
}
/* Create a static version of the class. */
const injector = new Injector();
export { injector as Injector };
