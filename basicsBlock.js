'use strict';

var basicsBlock = function() {
    //basics 1 Block
    this.basics1Link = element(by.css("a[title='1. One Way Data Binding']"));

    //basics 2 block
    this.basics2Link = element(by.css("a[title='2. Two Way Data Binding']"));
    this.b2FirstName = element(by.model("firstName"));
    this.b2LastName = element(by.model("lastName"));


    this.basics3Link = element(by.css("a[title='3. Controller']"));
    this.basics4Link = element(by.css("a[title='4. Multiple Controllers']"));
    this.basics5Link = element(by.css("a[title='5. Nested Controllers']"));

    this.basics1verification = function() {
        this.basics1Link.click();
        var expectedTitle = 'AngularJS Hub |   One Way Data Binding';
        expect(browser.getTitle().toBe(expectedTitle));

    };

    this.basics2verification = function (firstName, lastName) {
      this.basics2Link.click();
      browser.switchTo().frame(element(by.id('exampleIFrame')).getWebElement());
      browser.waitForAngularEnabled(true);

      var fn = this.b2FirstName.clear().sendKeys(firstName);
      var ln = this.b2LastName.clear().sendKeys(lastName)



    }
};

module.exports = basicsBlock;
