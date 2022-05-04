const URL_BASE = 'http://localhost';
const PORT = '8000';
const URL = `${URL_BASE}:${PORT}/`;

describe('My First Test', () => {
  it('Sites Up', () => {
    cy.visit(URL);
  });
  it('should cointain "Hello Actions"', () => {
    cy.contains('Hello Actions');
  });
});
