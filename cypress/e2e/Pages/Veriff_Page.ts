export const Verify_Veriff_Page = () =>{

    cy.findByRole("heading", {
        name: "Veriff",
    }).should('be.visible');

}

export const Click_Continue_in_Veriff_Page = () =>{

    cy.findByRole("button", {
        name: "Complete verification",
    }).click();

}
