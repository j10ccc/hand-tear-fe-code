import { describe, expect, test } from "vitest";
import { infiniteSumA, infiniteSumB } from "./infinite-sum";

describe("test infinite sum a", () => {
  test("case1", () => {
    expect(infiniteSumA(1, 2, 3).valueOf()).toBe(6);
  });

  test("case2", () => {
    expect(infiniteSumA(1, 3)(2).valueOf()).toBe(6);
  });

  test("case3", () => {
    expect(infiniteSumA(1).valueOf()).toBe(1);
  });
});

describe("test infinite sum b", () => {
  test("case1", () => {
    const a = infiniteSumB(1, 2, 3) as unknown as number;
    const b = infiniteSumB(4, 5) as unknown as number;

    expect(a + b).toBe(15);
  });

  test("case2", () => {
    const a = infiniteSumB(10) as unknown as number;
    const b = infiniteSumB(10) as unknown as number;

    expect(a * b).toBe(100);
  });
});