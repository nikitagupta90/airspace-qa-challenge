///<reference types = "cypress"/>

const password = Cypress.env("PASSWORD");
const url = Cypress.env("URL");

context("App Login", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  /*Test Case 1*/

  it("should be able to login correct credentials", () => {
    //Input the given Username & Password
    cy.get("#username").type("tomsmith");
    cy.get("#password").type(password);
    cy.get(".radius").click();
    //Validations after successful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("You logged into a secure area!");
    cy.get(".button").click();
  });

  /*Test Case 2*/

  it("should not be able to login with incorret username", () => {
    //Input incorrect Username
    cy.get("#username").type("username");
    cy.get("#password").type(password);
    cy.get(".radius").click();
    //Validations after unsuccessful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("Your username is invalid!");
  });

  /*Test Case 3*/

  it("should not be able to login with incorrect password", () => {
    cy.get("#username").type("tomsmith");
    //Input incorrect Password
    cy.get("#password").type("password123");
    cy.get(".radius").click();
    //Validations after unsuccessful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("Your password is invalid!");
  });

  /*Test Case 4*/

  it("should not be able to login with incorrect username & password", () => {
    //Input incorrect Username & Password
    cy.get("#username").type("username");
    cy.get("#password").type("password123");
    cy.get(".radius").click();
    //Validations after unsuccessful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("Your username is invalid!");
  });

  /*Test Case 5*/

  it("should not be able to login with blank username", () => {
    cy.get("#password").type(password);
    cy.get(".radius").click();
    //Validations after unsuccessful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("Your username is invalid!");
  });

  /*Test Case 6*/

  it("should not be able to login with blank password", () => {
    cy.get("#username").type("tomsmith");
    cy.get(".radius").click();
    //Validations after unsuccessful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("Your password is invalid!");
  });

  /*Test Case 7*/

  it("should not be able to login with blank username & password", () => {
    cy.get(".radius").click();
    //Validations after unsuccessful Login
    cy.get("#flash").should("be.visible");
    cy.get("#flash").contains("Your username is invalid!");
  });
});
