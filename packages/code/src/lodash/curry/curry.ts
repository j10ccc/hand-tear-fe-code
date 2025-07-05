export function curry(fn: (...args: any[]) => any) {
  return function curried(...args1: any[]) {
    if (args1.length >= fn.length) {
      return fn.apply(this, args1);
    } else {
      return function(...args2: any[]) {
        return curried.apply(this, args1.concat(args2));
      };
    }
  };
};
