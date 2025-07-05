export function infiniteSumA(...args1: number[]) {

  function fn(...args2: number[]) {
    return infiniteSumA(...args1.concat(args2));
  }

  fn.valueOf = () => {
    return args1.reduce((prev, curr) => curr + prev, 0);
  };

  return fn;
}

export function infiniteSumB(...args1: number[]) {
  function fn(...args2: number[]) {
    return infiniteSumB(...args1.concat(args2));
  }

  fn.toString = () => {
    return args1.reduce((prev, curr) => prev + curr, 0);
  };

  /*
    fn[Symbol.toPrimitive] = () => {
      return args1.reduce((prev, curr) => prev + curr, 0);
    };
  */

  return fn;
}