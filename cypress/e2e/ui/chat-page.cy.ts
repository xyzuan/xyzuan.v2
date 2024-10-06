context("Chat", () => {
  beforeEach(() => {
    cy.setCookie("auth_session", "nwgdbsilxp7cnyf3zntekwuclkbmb2gqca7gd2wh");
    cy.visit("https://xyzuan.my.id/chats");
  });

  it("Validate that chat list contains items from all users", () => {
    // cy.get("[data-cy=chat-page]").should("exist");
  });
});
