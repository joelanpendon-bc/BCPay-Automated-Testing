export const Verify_Personal_Details_Page = () =>{
    
    cy.findByRole("heading", {
        name: "Enter Personal Details",
    }).should('be.visible');

}

export const Enter_First_Name = (First_name) =>{

    cy.findByRole("textbox", {
        name: "First Name",
    }).type(First_name);

}

export const Enter_Last_Name = (Last_Name) =>{

    cy.findByRole("textbox", {
        name: "Last Name",
    }).type(Last_Name);

}

export const Enter_Date_of_Birth = (Date_of_Birth) =>{

    cy.findByRole("textbox", {
        name: "Date of birth",
    }).type(Date_of_Birth);

}

export const Enter_Address = (Residencial_Address) =>{

    cy.findByRole("combobox", {
        name: "Enter a location",
    }).type(Residencial_Address);
    cy.findByRole("option", {
        name: Residencial_Address,
    }).click()

}

export const Click_Continue_in_Personal_Details_Page = () =>{

    cy.findByRole("button", {
        name: "Continue",
    }).click();

}

export const Click_Add_address_manually = () =>{

    cy.findByRole("button", {
        name: "Add address manually",
    }).click();

}


