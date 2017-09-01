Get_Scenario("Launch_LD")
Environment.Value("doc_name")="MAIN_DOCUMENT"
Environment.Value("app_name")="FIRST_APP"
Get_Scenario("Create_Document")
Get_Scenario("Create_Application")
Get_Scenario("Click_to_Open_NonLegacy_Apps")
Environment.Value("app_name")="SECOND_APP"
Get_Scenario("Create_Application")
Get_Scenario("Click_to_Open_NonLegacy_Apps")
Environment.Value("app_name")="THIRD_APP"
Get_Scenario("Create_Application")
Get_Scenario("Click_to_Open_NonLegacy_Apps")
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_2"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];MAIN_DOCUMENT"
JavaWindow("SAP BusinessObjects").JavaMenu("Default Application").JavaMenu("FIRST_APP").Select
wait 2
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_2"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];*MAIN_DOCUMENT"
JavaWindow("SAP BusinessObjects").JavaMenu("Default Application").JavaMenu("SECOND_APP").Select
wait 2
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];*MAIN_DOCUMENT"
JavaWindow("SAP BusinessObjects").JavaMenu("Default Application").JavaMenu("THIRD_APP").Select
Get_Scenario("Save_Document")
Get_Scenario("Delete_documents_from_BI")
Get_Scenario("Close_LD_Without_Changes")






 @@ hightlight id_;_1853641629_;_script infofile_;_ZIP::ssf6.xml_;_
