describe("User can see list of Curriculumvitae", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#curriculumvitae-tab").click();
  });

  it("displays first curriculumvitae", () => {
    cy.get("#curriculumvitae-1").within(() => {
      cy.get(".ui.header").should(
        "contain",
        "Full Stack programmering, Craft Academy, Stockholm"
      );
      cy.get(".description").should("contain", "2020, February Cohort");
    });
  });

  it("displays second curriculumvitae", () => {
    cy.get("#curriculumvitae-2").within(() => {
      cy.get(".ui.header").should(
        "contain",
        "Worked as an Head chef in Stockholm based hotels."
      );
      cy.get(".description").should("contain", "2020-2016");
    });
  });

  it("displays third curriculumvitae", () => {
    cy.get("#curriculumvitae-3").within(() => {
      cy.get(".ui.header").should(
        "contain",
        "Worked as Head chef in 5 star hotels in India."
      );
      cy.get(".description").should("contain", "2016-2012");
    });
  });

  it("displays fourth curriculumvitae", () => {
    cy.get("#curriculumvitae-4").within(() => {
      cy.get(".ui.header").should(
        "contain",
        "Worked as Sous.chef in India serving variuos Head of states"
      );
      cy.get(".description").should("contain", "2012-2008");
    });
  });

  it("displays fifth curriculumvitae", () => {
    cy.get("#curriculumvitae-5").within(() => {
      cy.get(".ui.header").should("contain", "Masters in Tourism Management");
      cy.get(".description").should("contain", "2008-2006");
    });
  });

  it("displays sixth curriculumvitae", () => {
    cy.get("#curriculumvitae-6").within(() => {
      cy.get(".ui.header").should(
        "contain",
        "Bsc.Hotel and Hospitality Management"
      );
      cy.get(".description").should("contain", "2006-2003");
    });
  });
});
