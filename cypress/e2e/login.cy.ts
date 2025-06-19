describe("Login", () => {
  beforeEach(() => cy.visit("/"));

  it("make login with valid credentials", () => {
    cy.get("[data-cy=input-email]").type("dev@example.com");
    cy.get("[data-cy=input-pass]").type("secret123{enter}");

    // espera navegação automática
    cy.url().should("include", "/dashboard");
    cy.contains(/bem[- ]vindo/i).should("be.visible");
  });
});
