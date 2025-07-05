import { beforeEach, describe, expect, test, vi } from "vitest";
import { debounce } from "./debounce";

describe("test debounce", () => {
  const withFn = { call: () => null };
  const fnMock = vi.spyOn(withFn, "call");
  const debounceFn = debounce(withFn.call, 1000);
  vi.useFakeTimers();

  beforeEach(() => {
    fnMock.mockClear();
  });

  test("instantly call fn twice", async () => {
    debounceFn();
    debounceFn();

    await vi.advanceTimersByTimeAsync(1000);
    expect(fnMock).toHaveBeenCalledTimes(1);
  });

  test("call fn twice between two second", async () => {
    debounceFn();
    await vi.advanceTimersByTimeAsync(1000);
    debounceFn();
    await vi.advanceTimersByTimeAsync(1000);
    expect(fnMock).toHaveBeenCalledTimes(2);
  });
});