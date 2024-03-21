export class ArrayWithFilter<T> extends Array<T> {
  _filter(fn: (item: T, index: number) => unknown) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i)) arr.push(this[i]);
    }
    return arr;
  }
}
