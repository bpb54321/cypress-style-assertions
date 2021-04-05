export const haveComputedStyles = (_chai) => {
  function assertHaveComputedStyles(expectedStyles) {
    const $element = this._obj;
    const element = $element.get(0);
    const computedStyles = getComputedStyle(element);
    for (const styleProperty in expectedStyles) {
      const expectedStyleValue = expectedStyles[styleProperty];
      const actualStyleValue = computedStyles[styleProperty];
      this.assert(
         expectedStyleValue === actualStyleValue,
        `expected ${styleProperty} to be ${expectedStyleValue}, 
        but was ${actualStyleValue}`,
        `expected ${styleProperty} not to be ${expectedStyleValue},
        but was ${actualStyleValue}`
      );
    }
  }
  _chai.Assertion.addMethod('haveComputedStyles', assertHaveComputedStyles);
};

export const distanceBetweenEdges = (_chai) => {
  function assertCertainDistanceFrom($secondElement, firstElementEdge, secondElementEdge, distance, tolerance = 0) {
    const $firstElement = this._obj;
    const firstElement = $firstElement.get(0);
    const firstElementRect = firstElement.getBoundingClientRect();
    const secondElement = $secondElement.get(0);
    const secondElementRect = secondElement.getBoundingClientRect();
    const upperBound = distance + tolerance;
    const lowerBound = distance - tolerance;
    const actualDistance = firstElementRect[firstElementEdge] - secondElementRect[secondElementEdge];
    const firstElementAsString = `${firstElement.tagName}.${firstElement.classList}`;
    const secondElementAsString = `${secondElement.tagName}.${secondElement.classList}`;
    this.assert(
       actualDistance <= upperBound && actualDistance >= lowerBound,
      `expected (${firstElementAsString}).${firstElementEdge} - (${secondElementAsString}).${secondElementEdge} 
      to be ${distance} +/- ${tolerance}: was ${actualDistance}`,
      `expected (${firstElementAsString}).${firstElementEdge} - (${secondElementAsString}).${secondElementEdge} 
      not to be ${distance} +/- ${tolerance}: was ${actualDistance}`
    );
  }
  _chai.Assertion.addMethod('distanceBetweenEdges', assertCertainDistanceFrom);
};