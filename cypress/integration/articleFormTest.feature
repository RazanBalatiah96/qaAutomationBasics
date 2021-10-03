@smokeTest
Feature: Articl smoke tests

  @Create
  Scenario: Verify the user can publish an article
    Given A user navigated to article form
    And Typed in Article Title field a title for the article
    And Typed in description field a description for the article
    And Typed in body field a body for the article
    And Typed in tags field a tag for the article
    When Clicks on publish Article button
    Then The article should be published successfully

  @update
  Scenario: Verify the user can update an article
    Given A user navigated to an existing article
    When Clicks on Edit Article Button
    And Edit the title of article
    When Clicks on publish Article button
    Then The article should be updated successfully

  @delete
  Scenario: Verify the user can delete an article
    Given A user navigated to an existing article
    When Clicks on delete Article Button
    Then The article should be deleted successfully



