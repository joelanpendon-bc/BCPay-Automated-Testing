export const Verify_Enter_Card_Details_Page = () =>{

    cy.findByRole("heading", {
        name: "Enter Card Details",
    }).should('be.visible');

}

export const Enter_Name_on_Card = (Name_on_Card) =>{

    cy.findByRole("textbox", {
        name: "Name on Card",
    }).type(Name_on_Card);

}

export const Enter_Card_Number = (Card_Number) =>{

    cy.findByRole("textbox", {
        name: "Card number",
    }).type(Card_Number);

}

export const Enter_Expiry_Date = (Expiry_Date) =>{

    cy.findByRole("textbox", {
        name: "Expiry date",
    }).type(Expiry_Date);

}

export const Enter_Expiry_CVV = (CVV) =>{

    cy.findByRole("textbox", {
        name: "CVV",
    }).type(CVV);
        
}


export const Click_Continue_in_Enter_Card_Details_Page = () =>{

    cy.findByRole("button", {
        name: "Continue",
    }).click();

}