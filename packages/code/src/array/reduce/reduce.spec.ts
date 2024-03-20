import { describe, expect, test } from "vitest";
import { ArrayWithReduce } from "./reduce";

describe("test reduce", () => {
  test("sum of 1, 2, 3", () => {
    const arr = new ArrayWithReduce<number>(1, 2, 3);
    expect(arr._reduce((left, right) => left + right, 0)).toStrictEqual(6);
  });
});
