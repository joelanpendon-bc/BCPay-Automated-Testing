export const Verify_Country_of_Residence_Page = () =>{

    cy.findByRole("heading", {
        name: "Get Started",
    }).should('be.visible');

}

export const Enter_Country_of_Residence = (Country_of_Residence) =>{

    cy.findByRole("combobox", {
        name: "Country of residence",
    }).type(Country_of_Residence);
    cy.findByRole("option", {
        name: Country_of_Residence,
      }).click()

}

export const Enter_State_of_Residence = (State_of_Residence) =>{

    cy.findByRole("combobox", {
        name: "State",
    }).type(State_of_Residence);
    cy.findByRole("option", {
        name: State_of_Residence,
      }).click()

}

export const Click_Continue_in_Country_of_Residence_Page = () =>{

    cy.findByRole("button", {
        name: "Continue",
    }).click()
    
}
