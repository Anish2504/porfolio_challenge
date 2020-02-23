describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#projects-tab').click();
    })
  
    it('displays first project', () => {
      cy.get('#project-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Ruby based ATM Application');
        cy.get('.description').should('contain', 'These were my first few projects in which I build an application using the rails platform.The applications made on it were a Fizz Buzz game, virtual ATM.I have used rspec for testing purposes');
      })
    });
  
    it('displays second project', () => {
      cy.get('#project-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Ruby based Library Application');
        cy.get('.description').should('contain', 'I made this application Ruby.I have also been constantly using Rspec for testing purposes for this application');
      })
    });
  
    it('displays third project', () => {
      cy.get('#project-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'REACT based Portfolio');
        cy.get('.description').should('contain', 'I made my portfolio  with react.I have also been constantly using Cypress for testing purposes for this application');
      })
    });  
  });
  