Environment.Value("doc_name")="A_ZEN2WDF_DACTV_BROWSER_CMENU"
Environment.Value("app_name")="A_ZEN2WDF_DACTV_BROWSER_CMENU"
Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AT1gNZG5AsxOisZxDk.70Qk&APP_TO_LAUNCH=A_ZEN2WDF_DACTV_BROWSER_CMENU"
Get_Scenario("Launch_LD")
Get_Scenario("Open_Application")
wait 130
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_DACTV_BROWSER_CMENU"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Behavior;Disable Browser Context Menu"
wait 2
Sendkey("{DOWN}")
wait 5
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_DACTV_BROWSER_CMENU"
Get_scenario("Save_Document")
Get_Scenario("Execute_on_IE")
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Context_Menu"))
Get_Scenario("Close_IE_Browser")
wait 3
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_DACTV_BROWSER_CMENU"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Behavior;Disable Browser Context Menu"
wait 2
Sendkey("{UP}")
wait 5
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_DACTV_BROWSER_CMENU"
Get_scenario("Save_Document")
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Legacy Application").JavaButton("Save"))
JavaWindow("SAP BusinessObjects").JavaWindow("Legacy Application").JavaButton("Save").Click
Get_Scenario("Delete_Document_from_Local")
Get_Scenario("Close_LD_Without_Changes")

 @@ hightlight id_;_199158220_;_script infofile_;_ZIP::ssf1.xml_;_

