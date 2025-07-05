import { describe, expect, test } from "vitest";
import { partition, qsort } from "./qsort";

describe("test quick sort", () => {
  test("sort an array of number", () => {
    const arr = [1, 4, 2, 8, 5, 7];
    qsort(arr);

    expect(arr).toStrictEqual([1, 2, 4, 5, 7, 8]);
  });

  test("partition an array", () => {
    const arr = [4, 2, 8, 5, 7, 1];
    const p1 = partition(arr, 0, arr.length - 1);
    expect(p1).toBe(2);
    expect(arr).toStrictEqual([1, 2, 4, 5, 7, 8]);

    const p2 = partition(arr, 0, p1 - 1);
    expect(p2).toBe(0);
    expect(arr).toStrictEqual([1, 2, 4, 5, 7, 8]);

    const p3 = partition(arr, p1 + 1, arr.length - 1);
    expect(p3).toBe(3);
    expect(arr).toStrictEqual([1, 2, 4, 5, 7, 8]);
  });
});