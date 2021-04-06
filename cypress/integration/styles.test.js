describe("Style tests", () => {
  it("should check computed styles", () => {
    cy.visit("/");
    const expectedStyles = {
      "background-color": "rgb(127, 255, 212)",
    };
    cy.get('[data-testid="app"]').should("have.computedStyles", expectedStyles);
  });
  it("should check distances between box edges", () => {
    cy.get('[data-testid="shape-1"]').then(($shape1) => {
      cy.get('[data-testid="shape-2"]').should(
        "have.distanceBetweenEdges",
        $shape1,
        "top",
        "bottom",
        20,
        1
      );
    });
  });
  it("should check that two elements have the same width", () => {
    cy.get('[data-testid="shape-1"]').then(($shape1) => {
      cy.get('[data-testid="share-2"]').should("be.sameWidthAs", $shape1);
    });
  });
});
