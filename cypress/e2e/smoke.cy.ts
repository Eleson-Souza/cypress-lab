describe("Smoke test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("load the homepage without errors", () => {
    cy.contains(/react|vite/i).should("be.visible");
  });
});
