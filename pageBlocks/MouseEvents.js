'use strict';

var MouseEvents = function() {

    this.clickButton = element(by.id("firstBtn"));
    this.inputField = element(by.model("secondBtnInput"));
    this.resultClicked = element(by.binding("onFirstBtnClickResult"));
    this.imgDoubleClick = element(by.css("img[ng-dblclick='onDblClick()']"));
    this.imgMouseOver = element(by.css("img[ng-mouseup='onMouseUp($event)']"));







    this.clickMe = function() {
        this.clickButton.click();

    };

    this.typeSomething = function (someText) {
      this.inputField.sendKeys(someText);

    };

    this.doubleClick = function() {
      browser.actions().mouseMove(this.imgDoubleClick).doubleClick().perform();
    }

    this.mouseOver = function(){
      browser.actions().mouseMove(this.imgMouseOver).perform();
      this.imgMouseOver.click();
    

    }


};

module.exports = MouseEvents;
