'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_BICS_EMPTY_HASH_KEYS''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''



'Mention the BIP Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AcerzUnIcKRDsAigaG5KB1g&APP_TO_LAUNCH=A_ZEN2WDF_BICS_EMPTY_NULL_APP"

'Execute it on the browser
Get_Scenario("Execute_on_IE")


wait 20

'In the prompts dialog for variable FREETEXT_VAR select the value via F4 With the Key # and Text unassigned
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 9

'Record with CUST_ID = 7 should be displayed
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("7"))
wait 8

'Click on button Show Prompts
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts").Click
wait 10

'In the prompts dialog for variable FREETEXT_VAR enter value ##
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("##"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("##").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 8
'Record with CUST_ID = 8 only should be displayed
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("8"))




'Click on button Show Prompts
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts").Click
wait 8

'In the prompts dialog for variable FREETEXT_VAR enter value    ?
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("##"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("##").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("?"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("?").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 8
'Record with CUST_ID = 4 and 5  should be displayed
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("tab_4"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("tab_5"))

'Click on button Show Prompts
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts").Click
wait 8

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("?"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("?").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR").Set "\#"
wait 4

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 4

wait 8
'Record with CUST_ID = 7 should be displayed
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("7"))


'Click on button Show Prompts
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts").Click
wait 7
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 4
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR").Set "\##"
wait 4

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 4
'Record with CUST_ID = 8 only should be displayed
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("8"))

wait 2
'Click on button Show Prompts
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show prompts").Click

wait 7

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR"))


'In the prompts dialog for variable FREETEXT_VAR enter values #(Unassigned),\#,1_FTEXT

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("##"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("##").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("#").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click

wait 3
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR").Set "\#"
wait 2

Sendkey("{ENTER}")


Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("FREETEXT_VAR").Set "1_FTEXT"
wait 2

Sendkey("{ENTER}")

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 7
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("1_2"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("7"))


'Re execute the application 

'close the browser
Get_Scenario("Close_IE_Browser")
wait 20

'In the prompts dialog don’t enter any values for the variables, click on OK

'Mention the BIP Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AcerzUnIcKRDsAigaG5KB1g&APP_TO_LAUNCH=A_ZEN2WDF_BICS_EMPTY_NULL_APP"

'Execute it on the browser
Get_Scenario("Execute_on_IE")

wait 20

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 4
'Click on button Set_Filter-NULL
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_filter - NULL- Not"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_filter - NULL- Not").Click
wait 4

'Record with CUST_ID = 3 should be displayed.
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("3"))



'Click on Button Clear Filters
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters").Click
wait 9

'Click on button Set_Filter-Value #
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_filter -Value -#"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_filter -Value -#").Click
wait 4

'Record with CUST_ID = 7 should be displayed.
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("7"))


'Click on Button Clear Filters
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters").Click
wait 9


'Click on button Set_Filter-EMPTY 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_filter - EMPTY-##"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_filter - EMPTY-##").Click
wait 4

'No Record should be displayed.
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("error_message"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("error_message").Click
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box").Click
wait 4

'Click on Button Clear Filters
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters").Click
wait 9


'Click on button Set_Filter-Value ##
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set Filter -Value - ##"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set Filter -Value - ##").Click
wait 4

'Record with CUST_ID = 8 should be displayed.
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("8"))


'Click on Button Clear Filters
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Clear filters").Click
wait 9

'For the dimension FREETEXT enter values - #(Unassigned),\#,1_FTEXT
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("freetext_var_2").Set "\#"
wait 2
Sendkey("{ENTER}")

Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("freetext_var_2").Set "#"
wait 2
Sendkey("{ENTER}")

Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("freetext_var_2").Set "1_FTEXT"
wait 2
Sendkey("{ENTER}")

wait 4
'Record with CUST_ID = 1 ,7 and 3 should be displayed

Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("1_2"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("7"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("3_2"))


'close the browser
Get_Scenario("Close_IE_Browser")


