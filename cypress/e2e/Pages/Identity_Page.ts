export const Verify_Identity_Page = () =>{

    cy.findByRole("heading", {
        name: "Almost there!",
    }).should('be.visible');

}

export const Click_Continue_in_Identity_Page = () =>{

    cy.findByRole("button", {
        name: "Continue",
    }).click();

}

