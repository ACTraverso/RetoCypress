describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.contains('AutomationExercise').should ('be.visible')
  })
})