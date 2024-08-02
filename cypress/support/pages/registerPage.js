class RegisterPage {

    visit() {
        cy.visit('https://test-qa.inlaze.com/auth/sign-up');
    }

    fillFullName(name) {
        cy.get('#full-name').should('be.visible').type(name);
    }
    fillEmail(email) {
        cy.get('#email').should('be.visible').type(email);
    }


    fillPassword(password) {
        cy.get('#password').should('be.visible').type(password);
    }

    fillConfirmPassword(confirmPassword) {
        cy.get('#confirm-password').should('be.visible').type(confirmPassword);
    }

    getSignUpButton() {
        return cy.get('button[type="submit"]').contains('Sign up');
    }

    clickSignUpButton() {
        this.getSignUpButton().should('be.visible').click();
    }

    checkErrorMessage(message) {
        cy.contains(message).should('be.visible');
    }


    getSuccessMessage() {
        return cy.get('div[role="alert"]');
    }


    // Métodos para validar el formulario
    getErrorPassWord() {
        cy.get('label').contains('Passwords do not match');
    }

}

export default RegisterPage;






