export async function handlerFunction(fun) {
  try {
    await fun();
  } catch (error) {
    console.error(error)
  }
}

export function dbOperatorData(data, id) {
    return data.reduce((acc, obj) => {
        acc[`features.${obj.type}.${obj.value}`] = id;
        return acc;
      }, {});
}
