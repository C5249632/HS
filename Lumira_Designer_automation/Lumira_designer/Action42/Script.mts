Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=Af0f4IhwcEtMpSK6ia0aBxo&APP_TO_LAUNCH=A_ZEN2WDF_CROSSTAB_TITLE_API"
Environment.Value("doc_name")="A_ZEN2WDF_CROSSTAB_TITLE_API"
Environment.Value("app_name")="A_ZEN2WDF_CROSSTAB_TITLE_API"
Get_Scenario("Launch_LD")
Get_Scenario("Open_Nonlegacy_Application")
wait 80
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_CROSSTAB_TITLE_API;Layout;CROSSTAB_1 - DS_1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Title Display"
wait 2
Sendkey("{DOWN}")
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display"
Call Check_Property_Value("Display","Title Display","Title Text")
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Title Display"
wait 2
Sendkey("{DOWN}")
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display"
Call Check_Property_Value("Display","Title Display","Data Source")
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Title Text"
Sendkey("!@New Title&$^%13")
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_CROSSTAB_TITLE_API"
Get_Scenario("Save_Document")
wait 2
Get_Scenario("Execute_on_IE")
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set Crosstab title text"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set Crosstab title text").Click
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Get Crosstab title text"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Get Crosstab title text").Click
wait 3
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Get Crosstab title"),"New CTB Title!!!")
wait 2
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Title Display = Data source"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Title Display = Data source").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("Crosstab Header"))
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Title Display = None"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Title Display = None").Click
wait 3
Check_Object_Doesnt_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("Crosstab Header"))
Get_Scenario("Close_IE_Browser")
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_CROSSTAB_TITLE_API;Layout;CROSSTAB_1 - DS_1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Title Display"
wait 2
Sendkey("{UP 2}")
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_CROSSTAB_TITLE_API"
Get_Scenario("Save_Document")
Get_Scenario("Delete_Document_from_Local")
wait 2
Get_Scenario("Close_LD_Without_Changes")








