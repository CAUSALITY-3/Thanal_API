const logType = {
  ERROR: 31,
  INFO: 32,
  WARN: 33,
};

export function logger(type?, data?, message?) {
  console.log(
    `\x1b[${logType[type] || 33}m%s\x1b[0m`,
    `[${type || "INFO"}] ${new Date().toISOString()} : ${message || ""}=>`,
    JSON.stringify(data)
  );
}

export function Log(originalMethod: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);
  async function replacementMethod(this: any, ...args: any[]) {
    if (process.env.LOGGING_DISABLED)
      return await originalMethod.call(this, ...args);

    const obj = {
      component: this.constructor.name,
      function: methodName,
      requestBody: args,
    };
    logger("INFO", obj, "Requesting ");
    try {
      const result = await originalMethod.call(this, ...args);
      obj["reponse"] = result;
      logger("INFO", obj, "Success ");
      return result;
    } catch (error) {
      obj["error"] = error;
      logger("ERROR", error, "Failed ");
      throw error;
    }
  }

  return replacementMethod;
}
