describe("Smoke test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("carrega a home sem erros", () => {
    cy.contains(/react|vite/i).should("be.visible");
  });
});
