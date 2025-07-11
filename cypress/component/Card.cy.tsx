import { Card } from "../../src/components/Card";
import "../support/commands";

describe("<Card />", () => {
  it("playground", () => {
    cy.mount(
      <Card
        name="Eleson Oliveira"
        email="eleson@mail.com"
        address="Rua A"
        phone="13981220293"
        website="mysite.com"
      />
    );

    cy.get("div.title span").should("contain.text", "@mail.com");
    cy.screenshot();
  });
});
