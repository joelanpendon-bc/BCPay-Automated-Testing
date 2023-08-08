export const Verify_Cellphone_Number_Page = () =>{

    cy.findByRole("heading", {
        name: "Enter your cellphone number",
    }).should('be.visible');

}

export const Enter_Cellphone_Number = (Cellphone_Number) =>{

    cy.findByRole("textbox", {
        name: "Cellphone number",
    }).type(Cellphone_Number);

}

export const Click_Continue_in_Cellphone_Number_Page = () =>{

    cy.findByRole("button", {
        name: "Continue",
    }).click();

}

