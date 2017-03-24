export const bindMethodsToValues = (values, param) =>
  values.map((value) => {
    if (!(typeof value.set === `function`))
      throw new Error(`The specified value for the 'set'-field of the '${value.name}' - value is not a function!`);

    return {
      ...value,
      set: value.set.bind(undefined, param)
    };
  });

export const functionsToValues = (obj) => {
  // If a member of the object (obj) is a function, the return value of this function will be set as the value of this property
  const retObj = Object.assign({}, obj);

  Object.keys(retObj).forEach((key) => {
    if (typeof retObj[key] === `function`)
      retObj[key] = retObj[key]();
  });

  return retObj;
};

export const objToArray = (obj) => {
  const array = [];
  Object.keys(obj).forEach((key) => {
    array.push(obj[key]);
  });
  return array;
};

export const filterValue = (values, valueName) => {
  const filteredValue = values.filter(val => val.name === valueName)[0];

  if (!filteredValue)
    throw new Error(`Tried to access inexistent value '${valueName}'.`);

  return filteredValue;
};
