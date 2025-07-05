import { describe, expect, test, vi } from "vitest";
import { Observed, Observer } from "./observer";

describe("test observer", () => {
  const consoleMock = vi.spyOn(console, "log");

  test("g updates 跑步 state", () => {
    const u1 = new Observed("g");
    const o = new Observer();
    u1.setObserver(o);
    u1.setState("跑步");

    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenCalledWith("g正在跑步");
  });
});
