export const Verify_Add_address_manually_page = () =>{

    cy.findByRole("heading", {
        name: "Add address manually",
    }).should('be.visible');

}

export const Enter_Address_1 = (Address_1) =>{

    cy.findByRole("textbox", {
        name: "Address 1",
    }).type(Address_1);

}

export const Enter_Address_2 = (Address_2) =>{

    cy.findByRole("textbox", {
        name: "Address 2 (optional)",
    }).type(Address_2);

}

export const Enter_City = (City) =>{

    cy.findByRole("textbox", {
        name: "City",
    }).type(City);

}

export const Enter_Postcode = (Postcode) =>{

    cy.findByRole("textbox", {
        name: "Postcode",
    }).type(Postcode);

}

export const Click_Save = () =>{

    cy.findByRole("button", {
        name: "Save",
    }).click();

}


