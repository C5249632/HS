Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=ActdpgXVxmpLv8Az.GAVF8w&APP_TO_LAUNCH=APPLICATION"
Get_Scenario("Execute_on_IE")
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Show/Hide"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Open Actionsheet"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Open Actionsheet").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Value1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Value1").Click
wait 3
Check_Object_Doesnt_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Show/Hide"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Enable/Disable 'Value1'"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Enable/Disable 'Value1'").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Open Actionsheet"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Open Actionsheet").Click
Check_Button_Disabled(Browser("IE Browser").Page("IE Frame").SAPUIButton("Value1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Enable/Disable 'Value1'"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Enable/Disable 'Value1'").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Open Actionsheet"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Open Actionsheet").Click
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").SAPUIButton("Value1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("Value1").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("Show/Hide"))
Get_Scenario("Close_IE_Browser")

