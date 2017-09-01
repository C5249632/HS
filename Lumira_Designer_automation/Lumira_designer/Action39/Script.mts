'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_SESSION_HANDLING''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Mention the BIP Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdV3Pz9q9jxJrd934.nsOnw&APP_TO_LAUNCH=A_ZEN2WDF_SESSION_HANDLING"
'Execute it on the browser
Get_Scenario("Execute_on_IE")

'Click on the button  “Save Bookmark”
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Save Bookmark"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Save Bookmark").Click
wait 7

'Click on the button “Release&Suspend”->application is logged out of the connection with database.
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Release&Suspend"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Release&Suspend").Click

'Try to invoke context menu on crosstab
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Net_Sales"))


'Check the dialog box message saying your logged out of the connection
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIDialog("Confirmation"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("OK_confirmation"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("OK_confirmation").Click

'Close the browser
Get_Scenario("Close_IE_Browser")

