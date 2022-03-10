describe("User can search for another user on Github", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.github.com/users/**", {
      fixture: "userSearch.json",
    });
    cy.visit("/");
  });

    it("is expected to see the search field", () => {
    cy.get("[data-cy=search_input]").should("be.visible");
    });
    
    it("is expected to display 3 results by typing 'barack' ", () => {
        cy.get("[data-cy=search_input").type("barack");
        cy.get("[data-cy=search_button").click();
        cy.get("[data-cy=search_results").children().should("have.lenght", 3)
    });
});
