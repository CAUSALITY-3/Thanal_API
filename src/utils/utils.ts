export function dbOperatorData(data, id) {
  return data.reduce((acc, obj) => {
    acc[`features.${obj.type}.${obj.value}`] = id;
    return acc;
  }, {});
}

export const asyncHandler = (fn) =>
  function asyncUtilWrap(...args) {
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };
