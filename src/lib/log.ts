interface LoggerParams {
  type?: "log" | "trace" | "warn" | "info" | "debug";
  inputs?: boolean;
  outputs?: boolean;
}

const defaultParams: Required<LoggerParams> = {
  type: "debug",
  inputs: true,
  outputs: true,
};

export function Log(params?: LoggerParams) {
  const options: Required<LoggerParams> = {
    type: params?.type || defaultParams.type,
    inputs: params?.inputs === undefined ? defaultParams.inputs : params.inputs,
    outputs:
      params?.outputs === undefined ? defaultParams.outputs : params.outputs,
  };

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (options.inputs) {
        console[options.type]("Logged inputs:", args);
      }

      const result = original.apply(this, args);

      if (options.outputs) {
        console[options.type]("Logged outputs", result);
      }

      return result;
    };
  };
}

export function loggedMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);
  async function replacementMethod(this: any, ...args: any[]) {
    console.log("LOG: Entering method.", methodName);
    let result;
    try {
      result = await originalMethod.call(this, ...args);
    } catch (e) {
      console.log("Error: Exiting method.", e);
      throw e;
    }

    console.log("LOG: Exiting method.", result);
    return result;
  }

  return replacementMethod;
}

// export function loggedMethod<This, Args extends any[], Return>(
//   target: (this: This, ...args: Args) => Return,
//   context: ClassMethodDecoratorContext<
//     This,
//     (this: This, ...args: Args) => Return
//   >
// ) {
//   const methodName = String(context.name);

//   function replacementMethod(this: This, ...args: Args): Return {
//     console.log(context);
//     console.log(`LOG: Entering method '${methodName}'.${this}`);
//     const result = target.call(this, ...args);
//     console.log(`LOG: Exiting method '${methodName}'.`);
//     console.log( result)
//     return result;
//   }

//   return replacementMethod;
// }
