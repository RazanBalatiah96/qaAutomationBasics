@smokeTest
Feature:  Login in conduit website

   @TC-1
   Scenario: Verify the user can login in conduit website
      Given A user navigated to Sign in page
      And Typed in Email field a valid email
      And Typed in password field a valid password
      When Clicks on sign in button
      Then The user should logged in successfuly