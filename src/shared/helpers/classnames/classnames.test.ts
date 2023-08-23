import { classnames } from "./classnames";

describe("classnames", () => {
  test("with additional", () => {
    const expected = "someClass class1 class2";
    expect(classnames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });
  test("with mods", () => {
    const expected = "someClass class1 class2 hovered selected";
    expect(
      classnames("someClass", { hovered: true, selected: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
  test("with mods false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classnames("someClass", { hovered: true, selected: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
  test("with mods undefined", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classnames("someClass", { hovered: true, selected: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
