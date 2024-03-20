import { expect, test } from "vitest";
import { ArrayWithFilter } from "./filter";

test("filter numbers large than 2", () => {
  const arr = new ArrayWithFilter<number>(1, 2, 3, 4);
  expect(arr._filter(item => item > 2)).toStrictEqual([3, 4]);
});
