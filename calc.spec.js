const expect = require("unexpected")
const calc = require("./calc.js")

describe("calcfunction", () => {
  it("Should give the right output", () => {
    expect(calc(1000, 500, 20), "to be", 375)
  })
  it("Should throw Error when initPrice is not a positive number", () => {
    expect(
      () => calc("test", 500, 20),
      "to throw",
      "initPrice cannot be undefined!"
    )
    expect(
      () => calc(undefined, 500, 20),
      "to throw",
      "initPrice cannot be undefined!"
    )
    expect(
      () => calc(-12, 500, 20),
      "to throw",
      "initPrice cannot be undefined!"
    )
  })
})
