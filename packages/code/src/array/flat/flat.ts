export class ArrayWithFlat<T> extends Array<T> {
  _flat() {
    const res = [] as T[];
    function flatImpl(arr: T[]) {
      for (const item of arr) {
        if (Array.isArray(item)) {
          flatImpl(item);
        } else res.push(item);
      }
    }

    flatImpl(this);

    return res;
  }
}
