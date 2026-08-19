import { describe, expect, it } from "vitest";
import { LANGUAGE_KEY, readLanguage, saveLanguage } from "./language";
describe("language preference", () => {
  it("uses English for missing and invalid values", () => {
    expect(readLanguage({ getItem: () => null })).toBe("en");
    expect(readLanguage({ getItem: () => "ja" })).toBe("en");
  });
  it("persists Chinese", () => {
    expect(readLanguage({ getItem: () => "zh-CN" })).toBe("zh-CN");
    let stored = "";
    saveLanguage("zh-CN", { setItem: (key, value) => { stored = key + value; } });
    expect(stored).toBe(LANGUAGE_KEY + "zh-CN");
  });
});
