import { describe, expect, test } from "vitest";
import { deepClone } from "./deep-clone";

describe("test deep clone", () => {
  test("clone normal obj and other basic types", () => {
    const obj = {
      a: 1,
      b: "string",
      c: 2n,
      d: null,
      e: { value: undefined, obj: undefined },
      f: true,
      // g: Symbol()
    };

    expect(deepClone(obj)).toStrictEqual(obj);
  });

  test("clone an object which has circular", () => {
    const obj: any = {
      a: { value: 1 },
      o: undefined
    };
    obj.o = obj;

    expect(deepClone(obj)).toStrictEqual(obj);
  });
});