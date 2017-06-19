'use strict';

var ChangeEvents = function() {
    //change to relative xpath
    this.checkbox1 = element(by.xpath("html/body/div[1]/label[3]/input"));
    this.checkbox2 = element(by.xpath("html/body/div[1]/label[4]/input"));




    this.clickCheckboxes = function() {
      browser.switchTo().frame(element(by.id('exampleIFrame')).getWebElement());
      browser.waitForAngularEnabled(true);
      this.checkbox1.click();
      this.checkbox2.click();

    };

};

module.exports = ChangeEvents;
