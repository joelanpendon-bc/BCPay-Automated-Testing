
export const Select_Currency = (Currency:string) =>{

  cy.findByRole("button", {
      name: "GBP",
    }).click();
    cy.findByRole("option", {
      name: Currency,
    }).click();
}

export const Enter_Amount = (Amount:string) =>{

    cy.findByRole("spinbutton", {
        name: "Currency amount",
      }).type('{selectall}{backspace)');

    cy.findByRole("spinbutton", {
        name: "Currency amount",
      }).type(Amount);

}

export const Click_Dropdown_Summary = () =>{

    cy.findByRole("button", {
        name: "View summary",
      }).click();

}

export const Verify_Content_Summary = () =>{

    cy.findByRole("generic", {
        name: "Price",
      }).should('be.visible');

}

export const Verfiy_Network_Fee =() =>{

    cy.findByRole("generic", {
        name: "Network fee",
      }).should('be.visible');

}

export const Verfiy_Processing_Fee =() =>{

    cy.findByRole("generic", {
        name: "Processing fee",
      }).should('be.visible');

}

export const Click_Preview_Buy =() =>{

    cy.findByRole("button", {
        name: "Preview buy",
      }).click();

}

export const Verify_Invalid_Less_Than_Minimum_Amount_GBP =() =>{

  cy.findByRole("alert", {
      name: "The minimum purchasable amount is £30.00",
    }).should('be.visible');

}

export const Verify_Invalid_Less_Than_Minimum_Amount_USD =() =>{

  cy.findByRole("alert", {
      name: "The minimum purchasable amount is $30.00",
    }).should('be.visible');

}

export const Verify_Invalid_Less_Than_Minimum_Amount_EUR =() =>{

  cy.findByRole("alert", {
      name: "The minimum purchasable amount is €30.00",
    }).should('be.visible');

}

export const Verify_Invalid_Greater_Than_Maximum_Amount_GBP =() =>{

  cy.findByRole("alert", {
      name: "The maximum purchasable amount is £1,200.00",
    }).should('be.visible');

}

export const Verify_Invalid_Greater_Than_Maximum_Amount_USD =() =>{

  cy.findByRole("alert", {
      name: "The maximum purchasable amount is $1,200.00",
    }).should('be.visible');

}

export const Verify_Invalid_Greater_Than_Maximum_Amount_EUR =() =>{

  cy.findByRole("alert", {
      name: "The maximum purchasable amount is €1,200.00",
    }).should('be.visible');

}


