export class ArrayWithFlat<T> extends Array<T> {
  _flat(depth: number) {
    const res = [] as Array<T | Array<T>>;

    // flatImpl(this, depth);
    return reduceImpl(this, depth);

    return res;
  }
}

const reduceImpl = <T>(arr: Array<T | Array<T>>, depth: number) => {
  if (depth <= 1) return arr;

  return arr.reduce(
    (prev, curr) => prev.concat(Array.isArray(curr) ? reduceImpl(curr, depth - 1) : curr)
    , [] as Array<T | Array<T>>);
};