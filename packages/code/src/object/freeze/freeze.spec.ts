import { describe, expect, test } from "vitest";
import { objectFreeze } from "./freeze";

describe("freeze existing object", () => {
  const a = { value: 1 };
  objectFreeze(a);

  test("update existing property", () => {
    expect(() => {
      a.value = 2;
    }).toThrowError();
  });

  test("add new property", () => {
    const aCopy = a as { value: number, value1: number };
    expect(() => {
      aCopy.value1 = 2;
    }).toThrowError();
  });
});
