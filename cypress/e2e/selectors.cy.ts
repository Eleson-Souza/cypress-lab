describe("Counter", () => {
  it("setting counter", () => {
    cy.visit("/");

    cy.get("[data-cy=counter]").clear().type("5");
    cy.get("[data-cy=btn-counter-plus]").click();

    cy.get("[data-cy=btn-counter-plus").should("contain.text", "count is 6");
  });
});
