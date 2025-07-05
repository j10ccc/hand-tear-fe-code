import { describe, expect, test } from "vitest";
import { _instanceof } from "./instanceof";

describe("test construction is in the proto chain of input", () => {
  test("number and Function", () => {
    expect(_instanceof(1, Function))
      .toBe(new Number(1) instanceof Function);
  });

  test("arrow function and Function", () => {
    expect(_instanceof(() => {}, Function))
      .toBe((() => {}) instanceof Function);
  });
});
