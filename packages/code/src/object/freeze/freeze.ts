export const objectFreeze = function(obj: Record<any, any>) {
  Array.from(Object.keys(obj)).forEach(key => {
    Object.defineProperty(obj, key, {
      writable: false,
      configurable: false
    });
  });
  Object.preventExtensions(obj);
};
