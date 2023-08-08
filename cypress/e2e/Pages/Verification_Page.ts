
export const Verify_Verification_Page = () =>{

    cy.findByRole("heading", {
        name: "Verification code",
      }).should('be.visible');

}

export const Enter_Verification_Code = (Verif_Code) =>{

    cy.findByRole("textbox", {
        name: "Verification code",
      }).type(Verif_Code);

}

export const Click_Terms_and_Condition = () =>{

    cy.findByRole("checkbox", {
        name: "I have read and agreed with Blockchain.com’s Terms of Service & Privacy.",
      }).click();

}

export const Click_Continue_in_Verification_page = () =>{

    cy.findByRole("button", {
        name: "Continue",
      }).click();

}

