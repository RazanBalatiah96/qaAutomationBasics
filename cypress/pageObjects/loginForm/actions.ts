class LoginActions{

    openSignInPage(){
        return cy.visit('https://demo.productionready.io/#/login')
    }

    typeInEmailInputField(value: string){
        cy.get('input[type="email"]').clear().type(value)
         return this 
    } 

    typeInPasswordInputField(value: string){
        cy.get('input[type="password"]').clear().type(value)
        return this 
    }

    clicksOnSignInButoon(){
        return cy.get('.btn').contains('Sign in').should('be.visible').click()
    }

    waitLoginFormLoading(){
        return cy.wait(1000)
    }
    
}
export default LoginActions;