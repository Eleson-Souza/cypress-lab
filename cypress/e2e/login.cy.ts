describe("Login", () => {
  beforeEach(() => cy.visit("/login"));

  it("make login with valid credentials", () => {
    cy.get("[data-cy=email]").type("dev@example.com");
    cy.get("[data-cy=pass]").type("secret123{enter}");

    // espera navegação automática
    cy.url().should("include", "/log");
    cy.on("window:alert", (msg) => {
      expect(msg).to.contains("Bem-vindo");
    });
  });
});
