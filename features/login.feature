 Feature: Check Login functionality
Scenario: Check Yumpingo Login
Given User Navigate to Yumpingo staging screen
When User Enter Credentials "anand+staging@yumpingo.com" , "Divine715*"
Then User able to login



Scenario: Get Happy guest count
Given User Navigate to Yumpingo staging screen
When User click on insights menu
Then Validate Happy Guest count

Scenario: Check Yumpingo Login invalid credentials
Given User Navigate to Yumpingo staging screen
When User Enter Credentials "anand+staging@yumpingo.com" , "Test123"
Then User able to login


# Scenario Outline:  Check Yumpingo Login with different combination
# Given User Navigate to Yumpingo staging screen
# When User Enter Credentials "<userid>" , "<Password>"
# Then User able to login
# Examples:
# | userid  | Password |
# | anand+staging@yumpingo.com | Divine123*  |
# | anand+staging@yumpingo.com12  | Test345 |

   