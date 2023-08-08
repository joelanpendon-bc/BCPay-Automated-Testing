Feature: BCPay Testcases
    
Background:
    Given Access BCPay URL

# @endtoend @endtoend2 @positive_testing
# Scenario: Scenario name :"<TestCase>"
# #one whole flow of new User
#     When Select Currency "<Currency>"
#     When Enter Currency Amount "<Amount>"
#     When Click on summary dropdown
#     Then Quote Summary is displayed with Content, Network fee and Processing Fee
#     When Click on Preview buy
#     Then Verify if went to Enter email address page
#     When Enter Generated email address in Enter email address page
# #    When Enter email address "<Email_Address>"
#     When Click on Continue in email address page
#     Then Verify if went to Verification Code page
#     When Enter verification code "<VerifCode>"    
#     When Clicked on Terms and Condition
#     When Click on Continue in verification page
#     Then Verify if went to country of residence and state page
#     When Enter Country of Residence "<Country_of_Residence>"
#     When Enter state in Country of Residence page "<State>","<Country_of_Residence>"
#     When Click on Continue in Country of Residence page
#     Then Verify if went to Cellphone Number page
#     When Enter Cellphone number in Cellphone Number page "<Cellphone_no>"
#     When Click on Continue in Cellphone Number page
#     Then Verify if went to Enter Personal Details page
#     When Enter First Name in Personal Details page "<First_Name>"
#     When Enter Last Name in Personal Details page "<Last_Name>"
#     When Enter Date of Birth in Personal Details page "<Birth_Date>"
#     When Enter address in Personal Details page "<Address>"
#     When Click on Continue in Enter Personal Details page
#     Then Verify if went to Use of account page
#     When Enter Citizenship in Use of account page "<Citizenship>"
#     When CheckBox Buy cryptocurrency with cards or bank transfer in Use of account page is set to "<Buy_Boolean>"
#     When CheckBox Swap my cryptocurrency in Use of account page is set to "<Swap_Boolean>"
#     When CheckBox Send cryptocurrency to family or friends in Use of account page is set to "<Send_Boolean>"
#     When CheckBox Online purchases in Use of account page is set to "<Online_Boolean>"
#     When CheckBox Business in Use of account page is set to "<Business_Boolean>"
#     When Select Source of funds in Use of account page "<Fund_Source>"
#     When Select answer on Are you acting on your behalf in Use of account page "<Behalf>"
#     When Select answer on Are you a Politically Exposed Person "<PEP>","<Associate_Name>","<Relation>"
#     When Click on Continue in Use of account page
#     Then Verify if went to Identity page
#     When Click on Continue in Identity page
#     Then Verify if went to Veriff page
#     When Click on Complete verification in Veriff page
#     Then Verify if went to Enter Card Details page
#     When Enter Name on Card in Enter Card Details page "<Name_on_Card>"
#     When Enter Card Number in Enter Card Details page "<Card_Number>"
#     When Enter Expiry date in Enter Card Details page "<Expiry_Date>"
#     When Enter CVV in Enter Card Details page "<CVV>"
#     When Click on Continue in Enter Card Details page
#     Then Verify if went to Confirm your order page
#     When Enter CVV in Confirm your order page "<CVV>"
#     When Enter Wallet in Confirm your order page "<Wallet>"
#     When Click on Summary in Confirm your order page
#     Then Verify Price in Summary of Confirm your order page
#     Then Verify Network fee in Summary of Confirm your order page
#     Then Verify Processing fee in Summary of Confirm your order page
#     When Click on Terms and Condition in Confirm your order page
# #    When Click on Continue in Confirm your order page
# #    Then Verify if went to Your order page

#     Examples:
#     |TestCase               |Currency         |Amount|VerifCode|Country_of_Residence    |State  |Cellphone_no|First_Name   |Last_Name   |Birth_Date|Address           |Citizenship|Buy_Boolean|Swap_Boolean|Send_Boolean|Online_Boolean|Business_Boolean|Fund_Source|Behalf|PEP        |Associate_Name|Relation|Name_on_Card|Card_Number     |Expiry_Date|CVV|Wallet |
#     |QA_TestCase_BCPay_1.001|British Pound GBP|200   |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.003|British Pound GBP|30    |123456   |United States of America|Florida|12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.005|British Pound GBP|1200  |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.006|US Dollar USD    |200   |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.008|US Dollar USD    |30    |123456   |United States of America|Florida|12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.010|US Dollar USD    |1200  |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.011|Euro EUR         |200   |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.013|Euro EUR         |30    |123456   |United States of America|Florida|12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
#     |QA_TestCase_BCPay_1.015|Euro EUR         |1200  |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|La Grande OR 97850|British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    
@endtoend @endtoend2 @positive_testing
Scenario: Scenario name :"<TestCase>"
#one whole flow of new User
    When Select Currency "<Currency>"
    When Enter Currency Amount "<Amount>"
    When Click on summary dropdown
    Then Quote Summary is displayed with Content, Network fee and Processing Fee
    When Click on Preview buy
    Then Verify if went to Enter email address page
    When Enter Generated email address in Enter email address page
#    When Enter email address "<Email_Address>"
    When Click on Continue in email address page
    Then Verify if went to Verification Code page
    When Enter verification code "<VerifCode>"    
    When Clicked on Terms and Condition
    When Click on Continue in verification page
    Then Verify if went to country of residence and state page
    When Enter Country of Residence "<Country_of_Residence>"
    When Enter state in Country of Residence page "<State>","<Country_of_Residence>"
    When Click on Continue in Country of Residence page
    Then Verify if went to Cellphone Number page
    When Enter Cellphone number in Cellphone Number page "<Cellphone_no>"
    When Click on Continue in Cellphone Number page
    Then Verify if went to Enter Personal Details page
    When Enter First Name in Personal Details page "<First_Name>"
    When Enter Last Name in Personal Details page "<Last_Name>"
    When Enter Date of Birth in Personal Details page "<Birth_Date>"
    When Click on Add address manually in Personal Details page
    Then Verify if went to Add address manually page
    When Enter Address 1 in Add address manually page "<Address_1>"
    When Enter Address 2 in Add address manually page "<Address_2>"
    When Enter City in Add address manually page "<City>"
    When Enter Postcode in Add address manually page "<Postcode>"
    When Click on Save in Add address manually page
    Then Verify if went to Enter Personal Details page
    When Click on Continue in Enter Personal Details page
    Then Verify if went to Use of account page
    When Enter Citizenship in Use of account page "<Citizenship>"
    When CheckBox Buy cryptocurrency with cards or bank transfer in Use of account page is set to "<Buy_Boolean>"
    When CheckBox Swap my cryptocurrency in Use of account page is set to "<Swap_Boolean>"
    When CheckBox Send cryptocurrency to family or friends in Use of account page is set to "<Send_Boolean>"
    When CheckBox Online purchases in Use of account page is set to "<Online_Boolean>"
    When CheckBox Business in Use of account page is set to "<Business_Boolean>"
    When Select Source of funds in Use of account page "<Fund_Source>"
    When Select answer on Are you acting on your behalf in Use of account page "<Behalf>"
    When Select answer on Are you a Politically Exposed Person "<PEP>","<Associate_Name>","<Relation>"
    When Click on Continue in Use of account page
    Then Verify if went to Identity page
    When Click on Continue in Identity page
    Then Verify if went to Veriff page
    When Click on Complete verification in Veriff page
    Then Verify if went to Enter Card Details page
    When Enter Name on Card in Enter Card Details page "<Name_on_Card>"
    When Enter Card Number in Enter Card Details page "<Card_Number>"
    When Enter Expiry date in Enter Card Details page "<Expiry_Date>"
    When Enter CVV in Enter Card Details page "<CVV>"
    When Click on Continue in Enter Card Details page
    Then Verify if went to Confirm your order page
    When Enter CVV in Confirm your order page "<CVV>"
    When Enter Wallet in Confirm your order page "<Wallet>"
    When Click on Summary in Confirm your order page
    Then Verify Price in Summary of Confirm your order page
    Then Verify Network fee in Summary of Confirm your order page
    Then Verify Processing fee in Summary of Confirm your order page
    When Click on Terms and Condition in Confirm your order page
#    When Click on Continue in Confirm your order page
#    Then Verify if went to Your order page

    Examples:
    |TestCase               |Currency         |Amount|VerifCode|Country_of_Residence    |State  |Cellphone_no|First_Name   |Last_Name   |Birth_Date|Address_1|Address_2|City|Postcode|Citizenship|Buy_Boolean|Swap_Boolean|Send_Boolean|Online_Boolean|Business_Boolean|Fund_Source|Behalf|PEP        |Associate_Name|Relation|Name_on_Card|Card_Number     |Expiry_Date|CVV|Wallet |
    |QA_TestCase_BCPay_1.101|British Pound GBP|200   |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.103|British Pound GBP|30    |123456   |United States of America|Florida|12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.105|British Pound GBP|1200  |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.106|US Dollar USD    |200   |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.108|US Dollar USD    |30    |123456   |United States of America|Florida|12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.110|US Dollar USD    |1200  |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.111|Euro EUR         |200   |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.113|Euro EUR         |30    |123456   |United States of America|Florida|12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|
    |QA_TestCase_BCPay_1.115|Euro EUR         |1200  |123456   |United Kingdom          |N/A    |12345678901 |FirstNameTest|LastNameTest|01/01/1983|abc      |def      |ghij|14344   |British    |true       |true        |true        |true          |true            |Salary     |Yes   |No         |N/A           |N/A     |Testing Only|1234567890123456|0130       |123|abcdefg|

@negative_testing
Scenario: Scenario name :"<TestCase>"
#Amount is less than minimum purchasable amount
    When Select Currency "<Currency>"
    When Enter Currency Amount "<Amount>"
    Then Verify if Warning message for less than minimum purchasable amount is displayed based on "<Currency>"
    Examples:
    |TestCase               |Currency         |Amount|
    |QA_TestCase_BCPay_1.002|British Pound GBP|29    |
    |QA_TestCase_BCPay_1.007|US Dollar USD    |29    |
    |QA_TestCase_BCPay_1.012|Euro EUR         |29    |

@negative_testing
Scenario: Scenario name :"<TestCase>"
#Amount is greater than maximum purchasable amount
    When Select Currency "<Currency>"
    When Enter Currency Amount "<Amount>"
    Then Verify if Warning message for greater than maximum purchasable amount is displayed based on "<Currency>"
    Examples:
    |TestCase               |Currency         |Amount|
    |QA_TestCase_BCPay_1.004|British Pound GBP|1201  |
    |QA_TestCase_BCPay_1.009|US Dollar USD    |1201  |
    |QA_TestCase_BCPay_1.014|Euro EUR         |1201  |

