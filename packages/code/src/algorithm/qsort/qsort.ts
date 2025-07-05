function swap(arr: number[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

export function partition(arr: number[], start: number, end: number) {
  let left = start;
  let right = end;

  while (left < right) {
    // 注意这里要 right-- 在前面，先从后面往前找
    while (left < right && arr[right] >= arr[start]) right--;
    while (left < right && arr[left] <= arr[start]) left++;

    swap(arr, left, right);
  }
  swap(arr, left, start);

  return left;
}

export function qsort(arr: number[]) {

  function sort(left: number, right: number) {
    if (left < right) {
      const p = partition(arr, left, right);

      sort(left, p - 1);
      sort(p + 1, right);
    }
  }

  sort(0, arr.length - 1);

  return arr;
}
