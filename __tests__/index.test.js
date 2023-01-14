describe("this example", () => {
  it("should succeed depending on 'jest.config.js'", () => {
    const a = require("../data/a.json");
    expect(a).toMatchObject({ value: "a" });

    const b = require("../data/b.json");
    expect(b).toMatchObject({ value: "b" });
  });
});
