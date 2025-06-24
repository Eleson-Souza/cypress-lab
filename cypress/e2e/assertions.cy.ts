describe("Assertions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("checking if counter is working", () => {
    cy.get("[data-cy=counter-input]")
      .invoke("val")
      .then((val) => {
        const prevValue = Number(val ?? "0");

        cy.get("[data-cy=btn-counter-plus]").click().click(); // two clicks = count + 2

        cy.get("[data-cy=counter-input]")
          .invoke("val")
          .then((val) => {
            const currentValue = Number(val ?? "0");

            expect(currentValue).to.equal(prevValue + 2);
          });
      });
  });
});
