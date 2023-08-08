export const Verify_Your_Order_Page = () =>{

    cy.findByRole("heading", {
        name: "Your order",
    }).should('be.visible');

}
