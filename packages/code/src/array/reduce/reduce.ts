export class ArrayWithReduce<T> extends Array<T> {
  _reduce<InitialType>(fn: (prev: T, curr: InitialType) => InitialType, v: InitialType) {
    let res = v;
    for (let i = 0; i < this.length; i++) {
      const curr = this[i];
      res = fn(curr, res);
    }
    return res;
  };
}
