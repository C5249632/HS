Environment.Value("doc_name")="A_ZEN2WDF183_BELIZE_THEME"
Environment.Value("app_name")="A_ZEN2WDF183_BELIZE_THEME"
Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=Abvrhbve3apCqnTGXbalcKY&APP_TO_LAUNCH=A_ZEN2WDF183_BELIZE_THEME"
Get_Scenario("Execute_on_IE")
wait 14
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("BELIZE THEME"))
Get_Scenario("Close_IE_Browser")
Get_Scenario("Launch_LD")
Get_Scenario("Open_Application")
wait 90
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF183_BELIZE_THEME"
wait 2
Call Check_Property_Value("Display","Theme","Belize")
wait 2
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Theme"
wait 2
Sendkey("{DOWN}")
wait 2
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF183_BELIZE_THEME"
Call Check_Property_Value("Display","Theme","Blue Crystal")
wait 2
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Theme"
wait 2
Sendkey("{DOWN}")
wait 2
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF183_BELIZE_THEME"
Call Check_Property_Value("Display","Theme","Simplite")
wait 2
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Theme"
wait 2
Sendkey("{DOWN}")
wait 2
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF183_BELIZE_THEME"
Call Check_Property_Value("Display","Theme","High Contrast Black")
Get_Scenario("Delete_Document_from_Local")
wait 2
Get_Scenario("Close_LD_Before_Changes")




