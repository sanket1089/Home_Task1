Feature: Login Functionality

Scenario: Unsuccessful login with invalid credentials
  Given I am on the login screen
  When I enter invalid username and password
  And I click on the login button
  Then I should see an error message

Scenario: Unsuccessful login with blank credentials
  When I leave the username blank
  When I leave the password blank
  When I click on the login button
  Then I should see an error message for the username

Scenario: Unsuccessful login with no username
  When I leave the username blank
  And I enter a valid password
  And I click on the login button
  Then I should see an error message for the username

Scenario: Unsuccessful login with no password
  When I leave the password blank
  And I enter an invalid username
  And I click on the login button
  Then I should see an error message for the password

Scenario: Unsuccessful login with valid username and blank password
  When I enter a valid username
  And I leave the password blank
  And I click on the login button
  Then I should see an error message for the password

Scenario: Unsuccessful login with blank username and valid password
  When I leave the username blank
  And I enter a valid password
  And I click on the login button
  Then I should see an error message for the username

Scenario: Unsuccessful login with locked user
  When I enter the username and password of a locked user
  And I click on the login button
  Then I should see a message indicating that the user is locked

Scenario: Successful login with valid credentials
  When I enter valid username and password
  And I click on the login button
  Then I should be logged in successfully