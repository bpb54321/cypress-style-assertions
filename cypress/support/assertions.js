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