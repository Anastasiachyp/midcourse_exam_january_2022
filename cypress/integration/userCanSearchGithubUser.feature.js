describe("User can search for another user on Github", () => {
  before(() => {
    cy.intercept("GET", "https://api.github.com/users/**", {
      fixture: "userSearch.json",
    });
    cy.visit("/");
  });

    it("is expected to see the search field", () => {
    cy.get("[data-cy=search_input]").should("be.visible");
  });
});
