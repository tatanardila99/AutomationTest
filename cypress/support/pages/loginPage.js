class LoginPage {
  visit() {
    cy.visit('https://test-qa.inlaze.com/auth/sign-in');
  }

  getSignInTitle() {
    return cy.get('h1').contains('Sign in');
  }

  fillEmail(email) {
    cy.get('[role="textbox"][name="Full name"]').type(email);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }


  submit() {
    cy.get('[role="button"][name="SING UP"]').click();
  }

  checkUserLoggedIn(username) {
    cy.contains(username).should('be.visible');
  }

  logout() {
    cy.get('button[aria-label="logout"]').click();
  }
}

export default LoginPage;
































