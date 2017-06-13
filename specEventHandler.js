'use strict';
var MouseEvents = require('./pageBlocks/MouseEvents.js');
describe("suite for Event Handlers", function () {
  var mouseEvents = new MouseEvents();
    beforeEach(function(){
      browser.manage().window().maximize();
      browser.waitForAngularEnabled(false);
    })

    it("Mouse Events Handler: click", function () {
      browser.get("http://www.angularjshub.com/examples/eventhandlers/mouseevents/");
      element(by.css("#exampleIFrame")).click();
      browser.switchTo().frame(element(by.css("#exampleIFrame")).getWebElement());
      browser.waitForAngularEnabled(true);


      mouseEvents.clickMe();
      mouseEvents.typeSomething("olololossasadsdas");
      mouseEvents.doubleClick();
      mouseEvents.mouseOver();

    })

})
