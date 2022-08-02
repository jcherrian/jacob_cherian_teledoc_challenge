describe('Teledoc Test Suite', () => {
  
  before(() => {

   cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/') 

  })
    it('Navigate to Test website', () => {
      cy.url().should('include', 'https://www.way2automation.com/angularjs-protractor/webtables/') 

    })

    it('Add New User', () => {
      cy.get('thead > :nth-child(2) > td > .btn').click();
      cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine').type('Elon')
      cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine').type('Musk')
      cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine').type('elonmusk')
      cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine').type('thepassword')
      cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine').click()
      cy.get(':nth-child(6) > :nth-child(2) > .ng-pristine').select('Admin').should('have.value', '2')
      cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine').type('elonmusk@gmail.com')
      cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine').type('123-456-7890')
      cy.get('.btn-success').click()
    })

    it('Validate New User', () => {
      cy.get('.smart-table-global-search > .pull-right').type('Musk'); //Search
      cy.get('.smart-table-data-row > td:nth-of-type(1)').should('have.text', 'Elon')

    })
  
    it('Delete User', () => { 
      cy.get('.smart-table-global-search > .pull-right').clear().type('Novak'); //Search 
      cy.get(':nth-child(11) > .btn').click();
      cy.get('.btn-primary').click();
      cy.reload()
      //cy.get('.smart-table-data-row > td:nth-of-type(1)').should('not.have.text', 'Mark')

    })

  })

  
