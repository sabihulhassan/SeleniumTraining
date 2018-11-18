  Feature: Verify home page
  As a user 
  I should be able to navigate through homepage
  so that I can see what's on offer
  
  Background:
  Given I am on Amazon homepage
  
  
  Scenario: Verify homepage title
  Then I should see "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more" title
  
  
  Scenario: Verify homepage url
  Then the page url should be "https://www.amazon.co.uk/"
  
 @skip
  Scenario: Verify links in the header
  When I click on "Today's Deals" link
  Then I should see "Amazon UK Deals - Discover Our Daily Deals" title
  
  @skip
  Scenario Outline:  Verify links on the header
  When I click on "<linkText>" link
  Then I should see "<pageTitle>" title
  Examples:
  | linkText      | pageTitle                                  |
  | Today's Deals | Amazon UK Deals - Discover Our Daily Deals |
  
  
  