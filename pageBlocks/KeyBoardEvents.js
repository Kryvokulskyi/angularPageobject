'use strict';

var KeyBoardEvents = function() {
    //basics 1 Block
    this.keyInputFields = element(by.css("input[ng-keydown='onKeyDown($event)']"));




    this.keyInputVerification = function() {
        browser.switchTo().frame(element(by.id('exampleIFrame')).getWebElement());
        browser.waitForAngularEnabled(true);
        this.keyInputFields.click();
        this.keyInputFields.sendKeys(protractor.Key.ARROW_DOWN);
        this.keyInputFields.sendKeys(protractor.Key.CONTROL, "a");
    };

};

module.exports = KeyBoardEvents;
