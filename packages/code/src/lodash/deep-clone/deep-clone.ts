export const deepClone = (obj: any, map = new WeakMap) => {
  if (obj !== null && (typeof obj === "object" || typeof obj === "function")) {
    const tmp: any = Array.isArray(obj) ? [] : {};
    if (map.get(obj)) {
      return obj;
    }
    map.set(obj, true);
    for (const key of Object.keys(obj)) {
      if (Object.hasOwnProperty.call(obj, key)) {
        tmp[key] = deepClone(obj[key], map);
      }
    }
    return tmp;
  } else {
    return obj;
  }
};