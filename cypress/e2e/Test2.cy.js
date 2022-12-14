
describe('Teledoc Test Suite', function() {
    let testData; 
    
    before(function() {
        cy.fixture('newuser').then(function(dataJson) {
          testData = dataJson;
          return testData;  
        })
        cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/') 
    })
  
      it('Validate Test website', () => {
        //cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/') 
        cy.get('thead > :nth-child(2) > td > .btn').click()
        cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').type(testData.firstname)
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').type(testData.lastname)
        cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').type(testData.username)
        cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine').type(testData.password)
        cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine').click()
        cy.get('select').select('Admin').should('have.value', '2')
        cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').type(testData.email)
        cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').type(testData.phone)
        cy.get('.btn-success').click()
  
         //Validate new user added
        cy.get('.smart-table-global-search > .pull-right').type('Musk'); //Search
        cy.get('.smart-table-data-row > td:nth-of-type(1)').should('have.text', 'Elon')
        
  
        // To Delete User Novak  
        cy.get('.smart-table-global-search > .pull-right').clear().type('Novak'); //Search 
        cy.get(':nth-child(11) > .btn').click();
        cy.get('.btn-primary').click();
        cy.reload()
        //cy.get('.smart-table-data-row > td:nth-of-type(1)').should('not.have.text', 'Mark')
  
      })
    
    })