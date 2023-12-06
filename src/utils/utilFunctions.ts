console.log("Util_Functions");

export const dbOperatorData = (data, id) =>
  data.reduce((acc, obj) => {
    acc[`features.${obj.type}.${obj.value}`] = id;
    return acc;
  }, {});

export const asyncHandler = (fn) =>
  function asyncUtilWrap(...args) {
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };

export const syncLogger =
  <A extends any[], R>(f: (...a: A) => R) =>
  (...args: A): R => {
    let value;
    try {
      value = f(...args);
      console.info("info", f, value, ...args); // actual logging
    } catch (error) {
      console.error("error", f, error.message, ...args); //actual logging
      throw error;
    }
    return value;
  };
