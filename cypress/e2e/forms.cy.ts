describe("Forms", () => {
  beforeEach(() => cy.visit("/login"));

  it("fazer login sem informar todos os dados", () => {
    cy.get("[data-cy=btn-login]").click();
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal("Preencha todas as informações");
    });
  });

  it("fazer login com sucesso", () => {
    cy.get("[data-cy=email]").type("user@mail.com");

    cy.get("[data-cy=pass]").type("pass123456").type("{enter}");

    cy.on("window:alert", (msg) => {
      expect(msg).to.contains("sucesso");
    });
  });
});
