import { beforeEach, describe, expect, test, vi } from "vitest";
import { EventEmitter } from "./subscribe";

describe("test subscribe", () => {
  const withFn = { call: (value: number) => value };
  const fnMock = vi.spyOn(withFn, "call");
  const eventHub = new EventEmitter();

  beforeEach(() => {
    fnMock.mockClear();
  });

  test("subscribe an event which three subscribing", () => {
    eventHub.on("talk", () => withFn.call(3));
    eventHub.on("talk", () => withFn.call(2));
    eventHub.on("talk", () => withFn.call(1));

    eventHub.emit("talk");

    expect(fnMock).toHaveBeenCalledTimes(3);
    expect(fnMock).toHaveBeenLastCalledWith(1);
  });

  test("subscribe an event which nobody cares", () => {
    eventHub.emit("walk");

    expect(fnMock).toHaveBeenCalledTimes(0);
  });

});