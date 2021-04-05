/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainer<Subject> {
        /**
         * Checks if an HTMLElement has the expected computed styles.
         *
         * @example
         ```
         const expectedStyles = {
            'background-color': 'rgb(127, 255, 212)'
         }
         cy.get('[data-testid="app"]').should('have.computedStyles', expectedStyles);
         ```
         *
         */
        (chainer: 'have.computedStyles', expectedStyles: object): Chainable<Subject>

        /**
         * Checks if two elements have the expected distance between two of their edges (top, bottom, right,
         * or left) by comparing the DOMRects which are returned by calling getBoundingClientRect() for
         * each element.
         *
         * @example
         ```
         cy.get('[data-testid="shape-1"]')
         .then($shape1 => {
             cy.get('[data-testid="shape-2"]')
               .should('have.distanceBetweenEdges', $shape1, 'top', 'bottom', 20, 1);
           });
         ```
         *
         */
        (chainer: 'have.distanceBetweenEdges', $secondElement: JQuery, firstElementEdge: string,
         secondElementEdge: string, distance: number, tolerance?: number): Chainable<Subject>

        /**
         * Checks if two elements have the same width.
         *
         * @example
         ```
         cy.get('[data-testid="shape-1"]')
           .then($shape1 => {
              cy.get('[data-testid="shape-2"]')
               .should('be.sameWidthAs', $shape1);
           });
         ```
         *
         */
        (chainer: 'be.sameWidthAs', $secondElement: JQuery): Chainable<Subject>s
    }
}