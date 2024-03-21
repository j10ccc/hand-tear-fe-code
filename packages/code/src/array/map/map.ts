export class ArrayWithMap<T> extends Array<T> {
  _map(fn: (item: T, index: number) => T) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(fn(this[i], i));
    }

    return arr;
  }
}
