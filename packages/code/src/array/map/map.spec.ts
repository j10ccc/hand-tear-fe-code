import { describe, expect, test } from "vitest";
import { ArrayWithMap } from "./map";

describe("test map", () => {
  test(() => {
    const arr = new ArrayWithMap(1, 2, 3, 4);
    expect(arr._map(item => item * 2)).toStrictEqual([2, 4, 6, 8]);
  });
});
