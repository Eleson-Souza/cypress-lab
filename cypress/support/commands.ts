declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, pass: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("login", (email, pass) => {
  cy.session([email, pass], () => {
    cy.request("POST", "/api/login", { email, pass }).then(({ body }) => {
      window.localStorage.setItem("token", body.token);
    });
  });
});
