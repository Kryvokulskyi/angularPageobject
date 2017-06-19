'use strict';
var KeyBoardEvents = require('./pageBlocks/KeyBoardEvents.js');
var ChangeEvents = require('./pageBlocks/ChangeEvents.js')
describe("suite for Event Handlers", function () {

  var keyBoardEvents = new KeyBoardEvents();
  var changeEvents = new ChangeEvents();

    beforeEach(function(){
      browser.manage().window().maximize();
      browser.waitForAngularEnabled(false);
    })

    it("KeyBoard Events", function () {
      browser.get("http://www.angularjshub.com/examples/eventhandlers/keyboardevents/");
      element(by.css("#exampleIFrame")).click();
      keyBoardEvents.keyInputVerification();
//should be deleted
      browser.sleep(5000);

    })

    it("Change Events", function(){
      browser.get("http://www.angularjshub.com/examples/eventhandlers/changeevents/");
      element(by.css("#exampleIFrame")).click();
      changeEvents.clickCheckboxes();
      expect(changeEvents.checkbox1.isSelected()).toBe(true);
      expect(changeEvents.checkbox2.isSelected()).toBe(true);
      //should be deleted
      browser.sleep(5000);
    })

})
