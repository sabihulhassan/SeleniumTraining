$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefiles/HomePage.feature");
formatter.feature({
  "name": "Verify home page",
  "description": "  As a user \n  I should be able to navigate through homepage\n  so that I can see what\u0027s on offer",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_am_on_Amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify links in the header",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@skip"
    }
  ]
});
formatter.step({
  "name": "I click on \"Today\u0027s Deals\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Amazon UK Deals - Discover Our Daily Deals\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify links on the header",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skip"
    }
  ]
});
formatter.step({
  "name": "I click on \"\u003clinkText\u003e\" link",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \"\u003cpageTitle\u003e\" title",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "linkText",
        "pageTitle"
      ]
    },
    {
      "cells": [
        "Today\u0027s Deals",
        "Amazon UK Deals - Discover Our Daily Deals"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_am_on_Amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify links on the header",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@skip"
    }
  ]
});
formatter.step({
  "name": "I click on \"Today\u0027s Deals\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Amazon UK Deals - Discover Our Daily Deals\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_should_see_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});