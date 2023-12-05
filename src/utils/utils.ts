export function formatProductFeatures(data) {}

export function dbOperatorData(data, id) {
    return data.reduce((acc, obj) => {
        acc[`features.${obj.type}.${obj.value}`] = id;
        return acc;
      }, {});
}
