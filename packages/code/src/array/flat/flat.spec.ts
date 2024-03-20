import { expect, test } from "vitest";
import { ArrayWithFlat } from "./flat";

test("flat nested array", () => {
  const arr = new ArrayWithFlat<unknown>(1, 2, [3, 4, [5, 6]]);

  expect(arr._flat()).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
