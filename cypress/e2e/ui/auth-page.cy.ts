context("Authentication", () => {
  beforeEach(() => {
    cy.visit("https://xyzuan.my.id/auth");
  });

  describe("Sign-in", () => {
    it("Validate successful sign-in with valid credentials", () => {
      cy.get('input[name="email"]').type("jodyyuan@xyzuan.my.id");
      cy.get('input[name="password"]').type("xyzuan2002");

      cy.intercept("POST", "https://api.xyzuan.my.id/v2/auth/login").as(
        "login"
      );

      cy.get('button[type="submit"]').click();
      cy.wait("@login")
        .its("response.statusCode")
        .should("eq", 200)
        .getCookie("auth_session")
        .should("exist");
    });

    it("Validate error message for invalid credentials", () => {
      cy.get('input[name="email"]').type("jodyyuan@xyzuan.my.id");
      cy.get('input[name="password"]').type("123");

      cy.intercept("POST", "https://api.xyzuan.my.id/v2/auth/login").as(
        "login"
      );

      cy.get('button[type="submit"]').click();
      cy.wait("@login")
        .its("response.statusCode")
        .should("eq", 400)
        .getCookie("auth_session")
        .should("not.exist");
    });
    it("Validate error with null Credentials", () => {
      cy.get('button[type="submit"]').click();
      cy.contains("Email must be valid email.");
      cy.contains("Required");
    });
  });
});
