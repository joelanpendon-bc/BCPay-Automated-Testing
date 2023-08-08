export const Verify_Use_of_account_Page = () =>{

    cy.findByRole("heading", {
        name: "Use of account",
    }).should('be.visible');

}
export const Select_Citizenship = (Citizenship) =>{

    cy.findByRole("combobox", {
        name: "Please, select your citizenship Select only one",
    }).type(Citizenship);
    cy.findByRole("option", {
        name: Citizenship,
    }).click();

}
export const Check_Nature_Buy = () =>{

    cy.findByRole("checkbox", {
        name: "Buy cryptocurrency with cards or bank transfer",
    }).click();

}

export const Check_Nature_Swap = () =>{

    cy.findByRole("checkbox", {
        name: "Swap my cryptocurrency",
    }).click();

}

export const Check_Nature_Send = () =>{

    cy.findByRole("checkbox", {
        name: "Send cryptocurrency to family or friends",
    }).click();
}

export const Check_Nature_Online = () =>{

    cy.findByRole("checkbox", {
        name: "Online purchases",
    }).click();
}

export const Check_Nature_Business = () =>{

    cy.findByRole("checkbox", {
        name: "Business",
    }).click();
}

export const Select_Source_Fund = (Source_of_Fund) =>{

    cy.findByRole("combobox", {
        name: "Source of funds Select all that apply",
    }).click();
    cy.findByRole("option", {
        name: Source_of_Fund,
    }).click()
    
}

export const Select_Acting_on_Behalf = (Acting_on_Behalf) =>{

cy.findByRole("combobox", {
    name: "Are you acting on your behalf? Select only one",
}).click();
cy.findByRole("option", {
    name: Acting_on_Behalf,
  }).click()

}

export const Are_You_PEP_No = () =>{

    cy.findByRole("radio", {
        name: "No",
    }).click();
    
}

export const Are_You_PEP_Yes = () =>{

    cy.findByRole("radio", {
        name: "Yes",
    }).click();
    
}

export const Are_You_PEP_Associated = () =>{

    cy.findByRole("radio", {
        name: "Yes, my family member or close associate is",
    }).click();
    
}

export const PEP_Associate_Name = (Associate_Name) =>{

    cy.findByRole("textbox", {
        name: "Full name",
    }).type(Associate_Name);    

}

export const PEP_Associate_Relationship = (Relation) =>{

    cy.findByRole("textbox", {
        name: "Their relationship to you",
    }).type(Relation);    

}

export const Click_Continue_in_Use_of_Account = () =>{

    cy.findByRole("button", {
        name: "Continue",
    }).click();

}



