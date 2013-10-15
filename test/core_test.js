/**
 * Created by dns on 15.10.13.
 */

var expect = chai.expect;

describe("Core test", function () {
  it("test", function () {
    expect(true).to.be.true;
  })

  it("cow test", function () {
    var cow = new Cow("Vadim");

    expect(cow.greets("me")).to.equal("Vadim greets me");
  })
})
