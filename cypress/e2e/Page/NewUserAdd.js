class NewUserAdd
{

 userFirsname()
 {
    return cy.get(':nth-child(1) > :nth-child(2) > .ng-pristine')
 }

 userLastname()
 {
    return cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-pristine')
 }

 userUsername()
 {
    return cy.get(':nth-child(3) > :nth-child(2) > .ng-pristine')
 }

 userPassword()
 {
    return cy.get(':nth-child(4) > :nth-child(2) > .ng-pristine')
 }

 userCustomerType()
 {
    return cy.get(':nth-child(2) > :nth-child(1) > .ng-pristine')
 }

 userRole()
 {
    return cy.get('select').select('Admin')

 }
 userEmail()
 {
    return cy.get(':nth-child(7) > :nth-child(2) > .ng-pristine')
 }

 userphone()
 {
    return cy.get(':nth-child(8) > :nth-child(2) > .ng-pristine')
 }

clickSave()
{
    return cy.get('.btn-success')
}

}


export default NewUserAdd

