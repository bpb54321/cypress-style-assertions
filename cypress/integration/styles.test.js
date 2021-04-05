describe('Style tests', () => {
  it('should check computed styles', () => {
    cy.visit('/');
    const expectedStyles = {
      'background-color': 'rgb(127, 255, 212)'
    }
    cy.get('[data-testid="app"]').should('haveComputedStyles', expectedStyles);
  });
  it('should check distances between box edges', () => {
    cy.get('[data-testid="shape-1"]')
      .then($shape1 => {
        cy.get('[data-testid="shape-2"]')
          .should('have.distanceBetweenEdges', $shape1, 'top', 'bottom', 20);
      });
  });
});