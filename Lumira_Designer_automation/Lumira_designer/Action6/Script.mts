Environment.Value("doc_name")="A_GLOBAL_ARRAY" @@ hightlight id_;_1097493782_;_script infofile_;_ZIP::ssf4.xml_;_
Environment.Value("app_name")="A_GLOBAL_ARRAY"
Environment.Value("variable_name")="NEWVAR"
Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AWDRICWrXPxKnGow32M_AkM&APP_TO_LAUNCH=A_GLOBAL_ARRAY"
Get_Scenario("Execute_on_IE")
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Add B3"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Add B3").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Add B4"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Add B4").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Button"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Button").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Add String to StringArray"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Add String to StringArray").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show StringArray"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Show StringArray").Click
Get_Scenario("Close_IE_Browser")
Get_Scenario("Launch_LD")
Get_Scenario("Open_Application") 
Get_Scenario("Create_Global_Variable")
Call Get_Component("Basic Components","Button","200","30")
Get_Scenario("Add_Component")
Get_Scenario("Set_Events")
Get_Scenario("Delete_Document_from_Local")
wait 2
Get_Scenario("Close_LD_Without_Changes")




