'use strict';
var basicsBlock = require('./pageBlocks/basicsBlock.js');
describe("suite for basics block", function() {
  var bb = new basicsBlock();
  var EC = protractor.ExpectedConditions;

  beforeEach(function() {

    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.get("http://www.angularjshub.com/examples/basics/");
  })

/*  it("block1", function () {
    bb.basics1verification();
    var expectedTitle = 'AngularJS Hub |   One Way Data Binding';
    expect(browser.getTitle()).toBe('AngularJS Hub |   One Way Data Binding');

  }) */


  it("block2", function() {

    bb.basics2verification("Oleg", "Kryvokulskyi");
    expect(bb.b2LastNameExpectedResult.getText()).toEqual("Kryvokulskyi");
    //text is displayed in IFrame body tag
    browser.wait(EC.textToBePresentInElement(bb.b2FirstNameExpectedResult, 'Oleg'), 5000);
    //expect(bb.b2FirstNameExpectedResult.getText()).toEqual("First name: Oleg");

  });

})
