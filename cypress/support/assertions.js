function getStringRepresentationOfElement(element) {
  return `(${element.tagName}.${element.classList})`;
}

export const styleAssertions = (_chai) => {
  function computedStyles(expectedStyles) {
    const $element = this._obj;
    const element = $element.get(0);
    const computedStyles = getComputedStyle(element);
    for (const styleProperty in expectedStyles) {
      const expectedStyleValue = expectedStyles[styleProperty];
      const actualStyleValue = computedStyles[styleProperty];
      this.assert(
         expectedStyleValue === actualStyleValue,
        `expected ${styleProperty} to be ${expectedStyleValue}: was ${actualStyleValue}`,
        `expected ${styleProperty} not to be ${expectedStyleValue}: was ${actualStyleValue}`
      );
    }
  }

  function distanceBetweenEdges($secondElement, firstElementEdge, secondElementEdge, distance, tolerance = 0) {
    const $firstElement = this._obj;
    const firstElement = $firstElement.get(0);
    const firstElementRect = firstElement.getBoundingClientRect();
    const secondElement = $secondElement.get(0);
    const secondElementRect = secondElement.getBoundingClientRect();
    const upperBound = distance + tolerance;
    const lowerBound = distance - tolerance;
    const actualDistance = firstElementRect[firstElementEdge] - secondElementRect[secondElementEdge];
    const firstElementAsString = getStringRepresentationOfElement(firstElement);
    const secondElementAsString = getStringRepresentationOfElement(secondElement);
    this.assert(
      actualDistance <= upperBound && actualDistance >= lowerBound,
      `expected ${firstElementAsString}.${firstElementEdge} - ${secondElementAsString}.${secondElementEdge} 
      to be ${distance} +/- ${tolerance}: was ${actualDistance}`,
      `expected ${firstElementAsString}.${firstElementEdge} - ${secondElementAsString}.${secondElementEdge} 
      not to be ${distance} +/- ${tolerance}: was ${actualDistance}`
    );
  }

  function sameWidthAs($element2, tolerance = 0) {
    const $element1 = this._obj;
    const element1 = $element1.get(0);
    const element1Rect = element1.getBoundingClientRect();

    const element2 = $element2.get(0);
    const element2Rect = element2.getBoundingClientRect();

    const element1AsString = getStringRepresentationOfElement(element1);
    const element2AsString = getStringRepresentationOfElement(element2);

    this.assert(
      Math.abs(element1Rect.width - element2Rect.width) <= tolerance,
      `expected ${element1AsString}.width to equal ${element2AsString}.width +/- ${tolerance}: ` +
      `${element1AsString}.width was ${element1Rect.width} and ${element2AsString}.width was ${element2Rect.width}`,
      `expected ${element1AsString}.width not to equal ${element2AsString}.width +/- ${tolerance}: ` +
      `${element1AsString}.width was ${element1Rect.width} and ${element2AsString}.width was ${element2Rect.width}`,
    );
  }

  _chai.Assertion.addMethod('computedStyles', computedStyles);
  _chai.Assertion.addMethod('distanceBetweenEdges', distanceBetweenEdges);
  _chai.Assertion.addMethod('sameWidthAs', sameWidthAs);
};