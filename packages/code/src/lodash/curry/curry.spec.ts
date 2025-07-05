import { describe, expect, test } from "vitest";
import { curry } from "./curry";

describe("test curry", () => {
  const fn = (a: number, b: number, c: number) => {
    return a + b + c;
  };
  const curriedFn = curry(fn);

  test("not enough params", () => {
    const res = curriedFn(1, 2);
    expect(res instanceof Function).toBe(true);
  });

  test("enough params", () => {
    const res1 = curriedFn(1, 2)(3);
    const res2 = curriedFn(1)(2)(3);

    expect(res1).toBe(6);
    expect(res2).toBe(6);
  });
});