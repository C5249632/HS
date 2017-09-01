'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_MESSAGE_VIEW_CLAER''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''



'Mention the BIP Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AaOhSQtYNdtEojKxqej20Z8&APP_TO_LAUNCH=A_ZEN2WDF_MESSAGE_VIEW"

'Execute it on the browser
Get_Scenario("Execute_on_IE")
wait 20


'Click on Button  Show messages
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show Messages"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show Messages").Click


'Click on the message view 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("MESSAGE_BOX_1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("MESSAGE_BOX_1").Click

'You should be able to see the error , info and warning messages
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("ERROR"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("info"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("warning"))


'Click on Delete button 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Delete"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Delete").Click

'Click on Button Show messages
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show Messages"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show Messages").Click

'The messages should appear again 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("MESSAGE_BOX_1"))


'Click on Close 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Close"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Close").Click


'close the browser
Get_Scenario("Close_IE_Browser")


'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_MESSAGE_VIEW_PROMPT''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


'Mention the BIP Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AaOhSQtYNdtEojKxqej20Z8&APP_TO_LAUNCH=A_ZEN2WDF_MESSAGE_VIEW_PROMPTS"


'Execute it on the browser
Get_Scenario("Execute_on_IE")
wait 20


Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))

'Click on the message view 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box").Click


'You should be able to see the error , info and warning messages

Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("warning_message_Specify a value for variable"))


'Click on Close 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Close"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Close").Click



'The messages should appear again 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("message_box").Click

'Click on Delete button 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Delete"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Delete").Click


'Select some value
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_help_for_freetext").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Dachau"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Dachau").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click



'close the browser
Get_Scenario("Close_IE_Browser")

