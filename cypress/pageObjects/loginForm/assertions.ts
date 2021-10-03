class LoginAssertion{  
    checkTitleContainValue(value:string){
      return  cy.title().should('include',value)
    }
}
export default LoginAssertion;