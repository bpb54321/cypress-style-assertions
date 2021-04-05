describe('Style tests', () => {
  it('should check computed styles', () => {
    cy.visit('/');
    const expectedStyles = {
      color: 'orange'
    }
    // cy.get('[data-testid="app"]').should('haveComputedStyles', expectedStyles);
    cy.get('[data-testid="app"]').should($app => {
      expect($app).to.haveComputedStyles(expectedStyles);
    });

  });
});