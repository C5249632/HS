Environment.Value("doc_name")="A_ZEN2WDF_NO_UI5_COMMONS_MODE"
Environment.Value("app_name")="A_ZEN2WDF_NO_UI5_COMMONS_MODE"
Get_Scenario("Launch_LD")
Get_Scenario("Create_Document")
Get_Scenario("Create_Application")
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_NO_UI5_COMMONS_MODE"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Select "Display;SAPUI5 m Mode"
Call Check_Property_Value("Display","SAPUI5 m Mode","true")
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Theme"
Call Check_Property_Value("Display","Theme","Belize")
Sendkey("{DOWN}")
Sendkey("{ENTER}")
Call Check_Property_Value("Display","Theme","Blue Crystal")
Sendkey("{ENTER}")
Sendkey("{DOWN}")
Sendkey("{ENTER}")
Call Check_Property_Value("Display","Theme","Simplite")
Sendkey("{ENTER}")
Sendkey("{DOWN}")
Sendkey("{ENTER}")
Call Check_Property_Value("Display","Theme","High Contrast Black")
Get_Scenario("Delete_documents_from_BI")
wait 3
Get_Scenario("Close_LD_Without_Changes")


