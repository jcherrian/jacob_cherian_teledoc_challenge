class Homepage
{
 
 launch ()
 
 {

    return cy.visit('/') 

 }

 check ()
 
 {
    return cy.url().should('include', 'https://www.way2automation.com/angularjs-protractor/webtables/') 

 }


 addUser()
 {
    return cy.get('thead > :nth-child(2) > td > .btn')
 }

 validateAddUser()

 {
   return cy.get('.smart-table-data-row > td:nth-of-type(1)').each(($e1, index, $list) => {
 
          const text=$e1.text()
          if(text.includes("Elon"))
          {
       
              cy.get(".smart-table-data-row > td:nth-of-type(1)").eq(index).next().then(function(name)
              {
               const nameText=   name.text()
               expect(nameText).to.equal('Musk')
              })
  
            }
              
         })

 }

validateDeleteUser()

{
   return cy.get('.smart-table-data-row > td:nth-of-type(2)').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("Novak"))
            {
                cy.get(':nth-child(4) > :nth-child(11) > .btn').click()
                cy.get('.btn-primary').click();
              }
                
           })
         }

}


export default Homepage

