describe("Counter", () => {
  it("setting counter", () => {
    cy.visit("/");

    const counterValue = 5;
    cy.get("[data-cy=counter-input]").clear().type(counterValue.toString());
    cy.get("[data-cy=btn-counter-plus]").click();

    cy.get("[data-cy=btn-counter-plus]").should(
      "contain.text",
      `count is ${counterValue + 1}`
    );
  });
});
