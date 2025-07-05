import { describe, expect, test } from "vitest";
import { PromiseAll } from "./promise-all";

describe("test promise all", () => {
  test("check order", async () => {
    const p1 = new Promise<number>(res => setTimeout(() => res(1), 0));
    const p2 = new Promise<number>(res => setTimeout(() => res(2), 0));
    const p3 = new Promise<number>(res => setTimeout(() => res(3), 0));

    const res = await PromiseAll<number>([p1, p2, p3]);

    expect(res).toStrictEqual([1, 2, 3]);
  });

  test("get error", () => {
    const p1 = new Promise<number>((_, reject) => setTimeout(() => reject("error"), 0));
    const p2 = new Promise<number>(res => setTimeout(() => res(2), 0));

    expect(async () => {
      await PromiseAll<number>([p1, p2]);
    }).toThrowError();
  });
});