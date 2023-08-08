export const Verify_Confirm_Your_Order_Page = () =>{

    cy.findByRole("heading", {
        name: "Confirm your order",
    }).should('be.visible');

}

export const Enter_CVV = (CVV) =>{

    cy.findByRole("spinbutton", {
        name: "CVV",
    }).type(CVV);

}

export const Enter_Wallet = (Wallet) =>{

    cy.findByRole("textbox", {
        name: "Deliver BTC to",
    }).type(Wallet);

}

export const Click_on_Summary = () =>{

    cy.findByRole("button", {
        name: "View summary",
    }).click();

}

export const Verify_Price = () =>{

    cy.findByRole("generic", {
        name: "Price",
    }).should('be.visible');

}

export const Verify_Network_Fee = () =>{

    cy.findByRole("generic", {
        name: "Network fee",
    }).should('be.visible');

}

export const Verify_Processing_Fee = () =>{

    cy.findByRole("generic", {
        name: "Processing fee",
    }).should('be.visible');

}

export const Click_on_Terms_and_Condition = () =>{

    cy.findByRole("checkbox", {
        name: "I have read and agreed with Blockchain.com’s Terms of Service and I authorize Blockchain.com to debit my chosen payment method for the amount above on today’s date and understand that this cannot be cancelled, recalled or refunded.",
    }).click();

}

export const Click_Continue_in_Confirm_Your_Order_Page = () =>{

    cy.findByRole("button", {
        name: "Pay £30.00",
    }).click();

}




