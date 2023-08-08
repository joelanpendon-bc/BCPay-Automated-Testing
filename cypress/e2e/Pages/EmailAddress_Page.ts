
export const Verify_Email_Page = () =>{

    cy.findByRole("heading", {
        name: "Checkout with Blockchain.com",
      }).should('be.visible');

}

export const Enter_Email_Address = (Email:string) =>{

    cy.findByRole("textbox", {
        name: "Enter email address",
      }).type(Email);

}

export const Click_Continue_in_Email_page = () =>{

    cy.findByRole("button", {
        name: "Continue",
      }).click();
    
}
