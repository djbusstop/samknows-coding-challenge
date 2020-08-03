const flatten = (obj) => {
  // If value of argument is a primitive or null, return it directly
  if (typeof obj !== "object" || obj === null) return obj;

  // Get values to use in reducer
  const objValues =
    // If passed value is array
    Array.isArray(obj)
      ? // Use array
        obj
      : // Else, get values from object
        Object.values(obj);

  return objValues.reduce((acc, item) => {
    // If item value is not primitive or null
    if (typeof item === "object" && item !== null) {
      // Flatten the item
      return [...acc, ...flatten(item)];
    }
    // If item value is primitive or null
    return [...acc, item];
  }, []);
};

module.exports = flatten;
