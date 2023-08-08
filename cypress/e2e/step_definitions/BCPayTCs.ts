
import {Given, When, Then
} from "@badeball/cypress-cucumber-preprocessor";
//const loginPage = require(" ../ ../pages/LoginPage");


import * as Buy_Page from "../Pages/Buy_Page";
import * as EmailAddress_Page from "../Pages/EmailAddress_Page"
import * as Verification_Page from "../Pages/Verification_Page"
import * as Country_of_Residence_State_Page from "../Pages/Country_of_Residence_State_Page"
import * as Cellphone_Number_Page from "../Pages/Cellphone_Number_Page"
import * as Personal_Details_Page from "../Pages/Personal_Details_Page"
import * as Use_of_Account_Page from "../Pages/Use_of_Account_Page"
import * as Identity_Page from "../Pages/Identity_Page"
import * as Veriff_Page from "../Pages/Veriff_Page"
import * as Enter_Card_Details from "../Pages/Enter_Card_Details_Page"
import * as Confirm_Your_Order_Page from "../Pages/Confirm_Your_Order_Page"
import * as Your_Order_Page from "../Pages/Your_Order_Page"
import * as Add_address_manually_page from "../Pages/Add_address_manually_page";

Given ("Access BCPay URL", () => {
    cy.visit("https://bcpay-frontend.dev.blockchain.info/")
});

When("Select Currency {string}", (Currency:string)=>{
    Buy_Page.Select_Currency(Currency)

})


//When Select Currency "<Currency>"

When("Enter Currency Amount {string}", (Amount:string)=>{
    Buy_Page.Enter_Amount(Amount)

})

When("Click on summary dropdown", ()=>{
    Buy_Page.Click_Dropdown_Summary()
})

Then("Quote Summary is displayed with Content, Network fee and Processing Fee", ()=>{
    Buy_Page.Verify_Content_Summary()
    Buy_Page.Verfiy_Network_Fee()
    Buy_Page.Verfiy_Processing_Fee()
})

When("Click on Preview buy",()=>{
    Buy_Page.Click_Preview_Buy()
})

Then("Verify if went to Enter email address page",()=>{
    EmailAddress_Page.Verify_Email_Page()
})


When("Enter Generated email address in Enter email address page", ()=>{
    const result = Math.random().toString(36).substring(2,12);
    const Email = result.concat("@bcptest.com")
    cy.log('Email to be used = ', Email);
    EmailAddress_Page.Enter_Email_Address(Email)
})


//When Enter Generated email address in Enter email address page
When("Enter email address {string}", (Email:string)=>{
    EmailAddress_Page.Enter_Email_Address(Email)
})

When("Click on Continue in email address page",()=>{
    EmailAddress_Page.Click_Continue_in_Email_page()
})

Then("Verify if went to Verification Code page", ()=>{
    Verification_Page.Verify_Verification_Page()
})

When("Enter verification code {string}", (Verif_Code:string)=>{
    Verification_Page.Enter_Verification_Code(Verif_Code)
})

When("Clicked on Terms and Condition", ()=>{
    Verification_Page.Click_Terms_and_Condition()
})

When("Click on Continue in verification page", ()=>{
    Verification_Page.Click_Continue_in_Verification_page()
})

Then("Verify if went to country of residence and state page", ()=>{
    Country_of_Residence_State_Page.Verify_Country_of_Residence_Page()
})

When("Enter Country of Residence {string}", (Country_of_Residence:string)=>{
    Country_of_Residence_State_Page.Enter_Country_of_Residence(Country_of_Residence)
})

When("Enter state in Country of Residence page {string},{string}", (State_of_Residence:string,Country_of_Residence:string)=>{

    if (Country_of_Residence == "United States of America"){
    Country_of_Residence_State_Page.Enter_State_of_Residence(State_of_Residence)
    }
})

When("Click on Continue in Country of Residence page", ()=>{
    Country_of_Residence_State_Page.Click_Continue_in_Country_of_Residence_Page()
})

Then("Verify if went to Cellphone Number page", ()=>{
    Cellphone_Number_Page.Verify_Cellphone_Number_Page()
})

When("Enter Cellphone number in Cellphone Number page {string}", (Cellphone_Number:String)=>{
    Cellphone_Number_Page.Enter_Cellphone_Number(Cellphone_Number)
})

When("Click on Continue in Cellphone Number page", ()=>{
    Cellphone_Number_Page.Click_Continue_in_Cellphone_Number_Page()
})

Then("Verify if went to Enter Personal Details page", ()=>{
    Personal_Details_Page.Verify_Personal_Details_Page()
})


When("Enter First Name in Personal Details page {string}", (First_Name:String)=>{
    Personal_Details_Page.Enter_First_Name(First_Name)
})

When("Enter Last Name in Personal Details page {string}", (Last_Name:String)=>{
    Personal_Details_Page.Enter_Last_Name(Last_Name)
})

When("Enter Date of Birth in Personal Details page {string}", (Date_of_Birth:String)=>{
    Personal_Details_Page.Enter_Date_of_Birth(Date_of_Birth)
})

When("Enter address in Personal Details page {string}", (Residencial_Address:String)=>{
    Personal_Details_Page.Enter_Address(Residencial_Address)
})

When("Click on Continue in Enter Personal Details page", ()=>{
    Personal_Details_Page.Click_Continue_in_Personal_Details_Page()
})

Then("Verify if went to Use of account page", ()=>{
    Use_of_Account_Page.Verify_Use_of_account_Page()
})

When("Enter Citizenship in Use of account page {string}", (Citizenship:String)=>{
    Use_of_Account_Page.Select_Citizenship(Citizenship)
})

When("CheckBox Buy cryptocurrency with cards or bank transfer in Use of account page is set to {string}", (Nature:String)=>{

    if (Nature == 'true')
    {
        Use_of_Account_Page.Check_Nature_Buy()
    }
})

When("CheckBox Swap my cryptocurrency in Use of account page is set to {string}", (Nature:String)=>{

    if (Nature == 'true')
    {
        Use_of_Account_Page.Check_Nature_Swap()
    }
})

When("CheckBox Send cryptocurrency to family or friends in Use of account page is set to {string}", (Nature:String)=>{

    if (Nature == 'true')
    {
        Use_of_Account_Page.Check_Nature_Send()
    }
})

When("CheckBox Online purchases in Use of account page is set to {string}", (Nature:String)=>{

    if (Nature == 'true')
    {
        Use_of_Account_Page.Check_Nature_Online()
    }
})

When("CheckBox Business in Use of account page is set to {string}", (Nature:String)=>{

    if (Nature == 'true')
    {
        Use_of_Account_Page.Check_Nature_Business()
    }
})

When("Select Source of funds in Use of account page {string}", (Source_of_Fund:String)=>{
    Use_of_Account_Page.Select_Source_Fund(Source_of_Fund)
})

When("Select answer on Are you acting on your behalf in Use of account page {string}", (Acting_on_Behalf:String)=>{
    Use_of_Account_Page.Select_Acting_on_Behalf(Acting_on_Behalf)
})

When("Select answer on Are you a Politically Exposed Person {string},{string},{string}", (Are_You_PEP:String,Associate_Name:String,Relation:String)=>{

    if (Are_You_PEP == 'No')
    {
        Use_of_Account_Page.Are_You_PEP_No()
    }
    else if (Are_You_PEP == 'Yes')
    {
        Use_of_Account_Page.Are_You_PEP_Yes()

    }
    else if (Are_You_PEP == 'Associated')
    {
        Use_of_Account_Page.Are_You_PEP_Associated()
        Use_of_Account_Page.PEP_Associate_Name(Associate_Name)
        Use_of_Account_Page.PEP_Associate_Relationship(Relation)   
    }

})

When("Click on Continue in Use of account page", ()=>{
    Use_of_Account_Page.Click_Continue_in_Use_of_Account()
})

Then("Verify if went to Identity page", ()=>{
    Identity_Page.Verify_Identity_Page()
})

When("Click on Continue in Identity page", ()=>{
    Identity_Page.Click_Continue_in_Identity_Page()
})

Then("Verify if went to Veriff page", ()=>{
    Veriff_Page.Verify_Veriff_Page()
})

Then("Click on Complete verification in Veriff page", ()=>{
    Veriff_Page.Click_Continue_in_Veriff_Page()
})

Then("Verify if went to Enter Card Details page", ()=>{
    //cy.wait(8000)
    Enter_Card_Details.Verify_Enter_Card_Details_Page()
})

When("Enter Name on Card in Enter Card Details page {string}", (Name_on_Card:String)=>{
    Enter_Card_Details.Enter_Name_on_Card(Name_on_Card)
})

When("Enter Card Number in Enter Card Details page {string}", (Card_Number:String)=>{
    Enter_Card_Details.Enter_Card_Number(Card_Number)
})

When("Enter Expiry date in Enter Card Details page {string}", (Expiry_Date:String)=>{
    Enter_Card_Details.Enter_Expiry_Date(Expiry_Date)
})

When("Enter CVV in Enter Card Details page {string}", (CVV:String)=>{
    Enter_Card_Details.Enter_Expiry_CVV(CVV)
})

When("Click on Continue in Enter Card Details page", ()=>{
    Enter_Card_Details.Click_Continue_in_Enter_Card_Details_Page()
})

Then("Verify if went to Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Verify_Confirm_Your_Order_Page()
})

When("Enter CVV in Confirm your order page {string}", (CVV:String)=>{
    Confirm_Your_Order_Page.Enter_CVV(CVV)
})

When("Enter Wallet in Confirm your order page {string}", (Wallet:String)=>{
    Confirm_Your_Order_Page.Enter_Wallet(Wallet)
})

When("Click on Summary in Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Click_on_Summary()
})

Then("Verify Price in Summary of Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Verify_Price()
})

Then("Verify Network fee in Summary of Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Verify_Network_Fee()
})

Then("Verify Processing fee in Summary of Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Verify_Processing_Fee()
})

When("Click on Terms and Condition in Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Click_on_Terms_and_Condition()
})

When("Click on Continue in Confirm your order page", ()=>{
    Confirm_Your_Order_Page.Click_Continue_in_Confirm_Your_Order_Page()
})

Then("Verify if went to Your order page", ()=>{
    Your_Order_Page.Verify_Your_Order_Page()
})

Then("Verify if Warning message for less than minimum purchasable amount is displayed based on {string}", (Currency:String)=>{

    if (Currency == 'British Pound GBP')
    {
        Buy_Page.Verify_Invalid_Less_Than_Minimum_Amount_GBP()
    }
    else if (Currency == 'US Dollar USD')
    {
        Buy_Page.Verify_Invalid_Less_Than_Minimum_Amount_USD()
    }
    else if (Currency == 'Euro EUR')
    {
        Buy_Page.Verify_Invalid_Less_Than_Minimum_Amount_EUR()
    }

})

Then("Verify if Warning message for greater than maximum purchasable amount is displayed based on {string}", (Currency:String)=>{

    if (Currency == 'British Pound GBP')
    {
        Buy_Page.Verify_Invalid_Greater_Than_Maximum_Amount_GBP()
    }
    else if (Currency == 'US Dollar USD')
    {
        Buy_Page.Verify_Invalid_Greater_Than_Maximum_Amount_USD()
    }
    else if (Currency == 'Euro EUR')
    {
        Buy_Page.Verify_Invalid_Greater_Than_Maximum_Amount_EUR()
    }

})

When("Click on Add address manually in Personal Details page", ()=>{
    Personal_Details_Page.Click_Add_address_manually()
})

Then("Verify if went to Add address manually page", ()=>{
    Add_address_manually_page.Verify_Add_address_manually_page()
})

When("Enter Address 1 in Add address manually page {string}", (Address_1:String)=>{
    Add_address_manually_page.Enter_Address_1(Address_1)
})

When("Enter Address 2 in Add address manually page {string}", (Address_2:String)=>{
    Add_address_manually_page.Enter_Address_2(Address_2)
})

When("Enter City in Add address manually page {string}", (City:String)=>{
    Add_address_manually_page.Enter_City(City)
})

When("Enter Postcode in Add address manually page {string}", (Postcode:String)=>{
    Add_address_manually_page.Enter_Postcode(Postcode)
})

When("Click on Save in Add address manually page", ()=>{
    Add_address_manually_page.Click_Save()
})


/**
    Then Verify if went to Your order page

    Then Verify if went to Confirm your order page
    When Enter CVV in Confirm your order page "<CVV>"
    When Enter Wallet in Confirm your order page "<Wallet>"
    When Click on Summary in Confirm your order page
    Then Verify Price in Summary of Confirm your order page
    Then Verify Network fee in Summary of Confirm your order page
    Then Verify Processing fee in Summary of Confirm your order page
    When Click on Terms and Condition in Confirm your order page
    When Click on Continue in Confirm your order page
*/