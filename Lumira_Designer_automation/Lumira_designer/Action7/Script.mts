'Mention the BIP Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AaotdVvMHrJMsZUUe2g0Frs&APP_TO_LAUNCH=A_TOGGLE_BUTTON1"

'Execute it on the browser
Get_Scenario("Execute_on_IE")

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_Toggle Button ''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''Execute_TOGGLE_BUTTON1'''''''''''''''''''''''''''''''''

'Click on Open Button and check for the functionality
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Open"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Open").Click

'Check whether Crosstab is visible or not 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebElement("ShowTooltip:  Show Crosstab"))
Browser("IE Browser").Page("IE Frame").WebElement("ShowTooltip:  Show Crosstab").highlight

'Toggle button text should be Show
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Show_2"))
Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Show_2").highlight

'Following text should be in the text area:Tooltip:  Show the Crosstab    The toggle button is not pressed   Icon: bengal-tiger.jpg  Text:Show
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUITextEdit("SAPUITextEdit"))
Browser("IE Browser").Page("IE Frame").SAPUITextEdit("SAPUITextEdit").highlight

'Tool tip should be Show the Crosstab
Dim Var_3
Var_1="Show the Crosstab"
Dim Var_4
Var_2= Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Show_2").GetROProperty("title")

If (Var_3=Var_4) Then
Reporter.ReportEvent micPass, "Show the Crosstab" & " : text Exists in Application", "Continue in Test"
Else
Reporter.ReportEvent micFail, "Show the Crosstab" & " : text does not  exist  in Application", "Continue in Test"
End if

'Click on  Show Button and check for the functionality
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIToggleButton("Show_1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIToggleButton("Show_1").Set "ON"

'Following text should be in the text area.Tooltip: Hide the crosstab State: The toggle button is pressed   Icon: bengal-tiger.jpg  Text: Hide
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUITextEdit("SAPUITextEdit"))
Browser("IE Browser").Page("IE Frame").SAPUITextEdit("SAPUITextEdit").highlight

'Crosstab should be visible now
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("CROSSTAB_1_altRenderModeTableD"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("CROSSTAB_1_altRenderModeTableD").highlight
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("__cell5_textContentDiv"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("__cell5_textContentDiv").highlight

'checkpoint to che ck the Tool tip that should be Hide the Crosstab.
Dim Var_1
Var_1="Hide the crosstab"
Dim Var_2
Var_2=Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIToggleButton("Hide_1").GetROProperty("title")

If (Var_1=Var_2) Then
Reporter.ReportEvent micPass, "Hide the Crosstab" & " : text Exists in Application", "Continue in Test"
Else
Reporter.ReportEvent micFail, "Hide the Crosstab" & " : text does not  exist  in Application", "Continue in Test"
End if

'Click on  Hide Button and check for the functionality
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIToggleButton("Hide_1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIToggleButton("Hide_1").Click

'Check whether Crosstab is visible or not 
If Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("__cell5_textContentDiv").Exist Then
Reporter.ReportEvent micPass, "Crosstab is Visible" & " : text Exists in Application", "Continue in Test"
Else
Reporter.ReportEvent micFail, "Crosstab is not Visible" & " : text does not  exist  in Application", "Continue in Test"
End if


'Following text should be in the text area:Tooltip:  Show the Crosstab    The toggle button is not pressed   Icon: bengal-tiger.jpg  Text:Show
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUITextEdit("SAPUITextEdit"))
Browser("IE Browser").Page("IE Frame").SAPUITextEdit("SAPUITextEdit").highlight


'Toggle button text should be Show
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Show_2"))
Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Show_2").highlight

'Tool tip should be Show the Crosstab
Dim Var_5
Var_1="Show the Crosstab"
Dim Var_6
Var_2=Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Show_2").GetROProperty("title")

If (Var_5=Var_6) Then
Reporter.ReportEvent micPass, "Show the Crosstab" & " : text Exists in Application", "Continue in Test"
Else
Reporter.ReportEvent micFail, "Show the Crosstab" & " : text does not  exist  in Application", "Continue in Test"
End if
'Close the browser
Get_Scenario("Close_IE_Browser")

''''''''''''''''''Execute_TOGGLE_BUTTON2'''''''''''''''''''''''''''''''''
'Mention the Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AeQq3XXhYqJEqpYjJpLJrRA&APP_TO_LAUNCH=A_TOGGLE_BUTTON2"

'Execute it on the browser
Get_Scenario("Execute_on_IE")
'Click on  Show Button and check for the functionality
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show").Click

'The toggle button text would change to Pressed
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Pressed"))
Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Pressed").highlight

'The Crosstab is visible
If Browser("IE Browser").Page("IE Frame").WebElement("__cell5_textContentDiv").Exist then
Reporter.ReportEvent micPass, "Crosstab is Visible" & " : text Exists in Application", "Continue in Test"
Else
Reporter.ReportEvent micFail, "Crosstab is not Visible" & " : text does not  exist  in Application", "Continue in Test"
End if

'Click on  Hide Button and check for the functionality
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Hide"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Hide").Click

'The toggle button text would change to Not Pressed
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Not Pressed"))
Browser("IE Browser").Page("IE Frame").SAPUIToggleButton("Not Pressed").highlight

'The crosstab is not visible
If Browser("IE Browser").Page("IE Frame").WebElement("__cell5_textContentDiv").Exist then
Reporter.ReportEvent micFail,  "Crosstab is Visible" & " : text Exists in Application", "Continue in Test"
Else
Reporter.ReportEvent micPass, "Crosstab is not Visible" & " : text does not  exist  in Application", "Continue in Test"
End if
'Close the browser
Get_Scenario("Close_IE_Browser")





