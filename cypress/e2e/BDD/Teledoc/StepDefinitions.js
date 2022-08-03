import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import Homepage from '../../Page/HomePage'
import NewUserAdd from '../../Page/NewUserAdd'


const homePage = new Homepage();
const newuser = new NewUserAdd();

let testData; 

before(function() {
    cy.fixture('newuser').then(function(dataJson) {
      testData = dataJson;
      return testData;  
    })    
})

Given('I open practice site', function() {
  homePage.launch()
})

When('I click Add User',function(){
  
  homePage.addUser().click()

})
  
And('Add User',function(){

  newuser.userFirstname().type(testData.firstname)
  newuser.userLastname().type(testData.lastname)
  newuser.userUsername().type(testData.username)
  newuser.userPassword().type(testData.password)
  newuser.userCustomerType().click()
  newuser.userRole().should('have.value', '2')
  newuser.userEmail().type(testData.email)
  newuser.userphone().type(testData.phone)
  newuser.clickSave().click()

})

Then('Validate new User has been added',function(){

  homePage.validateDeleteUser()

}) 
    