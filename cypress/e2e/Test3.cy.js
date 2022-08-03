
import Homepage from '../e2e/Page/HomePage'
import NewUserAdd from '../e2e/Page/NewUserAdd'

const homePage = new Homepage();
const newuser = new NewUserAdd();

describe('Teledoc Test Suite', function() {
    let testData; 
    
    before(function() {
        cy.fixture('newuser').then(function(dataJson) {
          testData = dataJson;
          return testData;  
        })
        homePage.launch()
        //cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/') 
        
    })

    it('Navigate to Test website', () => {
        homePage.check()
        //cy.url().should('include', 'https://www.way2automation.com/angularjs-protractor/webtables/') 
  
      })
  
    it('Add New User', () => {
        homePage.addUser().click()
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
  
      it('Validate New User', () => {

          homePage.validateAddUser()
      
          })
        
        it('Delete User', () => { 

            homePage.validateDeleteUser()

           })
      
    
    })
