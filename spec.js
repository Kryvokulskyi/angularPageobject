'use strict';
var basicsBlock = require('./basicsBlock.js')
describe("suite for basics block", function() {
  var bb = new basicsBlock();
  var EC = protractor.ExpectedConditions;
  beforeEach(function() {

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("http://www.angularjshub.com/examples/basics/");
  })

  it("block1", function() {

    bb.basics2verification("oleg", "Kryvokulskyi");



  });

})
