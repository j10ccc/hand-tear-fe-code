import { beforeEach, describe, expect, test, vi } from "vitest";
import { debounce } from "../debounce/debounce";

describe("test throttle", () => {
  const withFn = { call: () => null };
  const fnMock = vi.spyOn(withFn, "call");
  const throttleFn = debounce(withFn.call, 1000);
  vi.useFakeTimers();

  beforeEach(() => {
    fnMock.mockClear();
  });

  test("instantly check counter after called times", () => {
    throttleFn();
    throttleFn();
    throttleFn();

    expect(fnMock).toHaveBeenCalledTimes(0);
  });

  test("stop one second to check after called times", async () => {
    throttleFn();
    throttleFn();
    throttleFn();

    await vi.advanceTimersByTimeAsync(1000);
    expect(fnMock).toHaveBeenCalledTimes(1);
  });
});