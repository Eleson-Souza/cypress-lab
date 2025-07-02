describe("Intercept", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
      fixture: "users/list.large.json",
    }).as("getUsers");

    cy.visit("/users");
    cy.wait("@getUsers");
  });

  it("checking user cards was loaded", () => {
    cy.get("[data-cy=card-user]").should("have.length.greaterThan", 0);
    cy.contains("[data-cy=card-user]", "Eleson Souza").within(() => {
      cy.contains(/Horizonte/);
      cy.contains(/.dev/);
    });
  });
});
