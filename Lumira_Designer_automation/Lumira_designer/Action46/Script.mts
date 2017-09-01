'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF202_OFLN_RECORD_REMOV''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

wait 10

'Write the Document name
Environment.Value("doc_name")="A_ZEN2WDF202_OFLN_RECORD_REMOV"
Get_Scenario("Create_Document")

'Create an Application 1
Environment.Value("app_name")="A_ZEN2WDF202_OFLN_RECORD_REMOV"
Get_Scenario("Create_Application")

'Add Data source
Environment.Value("app_name")="A_ZEN2WDF202_OFLN_RECORD_REMOV"
Environment.Value("query_name")="0PIOVC_QRY001"
Environment.Value("system_name")="Q93"
Get_Scenario("Add_Datasource")
wait 9


'Add few components to the application.
Call Get_Component("Table Components","Crosstab","0","0")
Get_Scenario("Add_Component")
wait 9
Get_Scenario("Add_Datasource_to_component")
wait 20

'In outline Panel, Select Application name and go to Properties->Behavior->Under this properties, there is no option “Enable Offline Recording feature” like this as in 1.x

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF202_OFLN_RECORD_REMOV"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Select  "Behavior"


'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7


'Press CTRL+ALT+R,The application should not refresh and there should not be any recording menu available at bottom of the page
Sendkey("^%r") 

'Close the browser
Get_Scenario("Close_IE_Browser")

'delete from BI
Environment.Value("doc_name")="A_ZEN2WDF202_OFLN_RECORD_REMOV"
Environment.Value("app_name")="A_ZEN2WDF202_OFLN_RECORD_REMOV"
Get_Scenario("Delete_documents_from_BI")

'Close the LD
Get_Scenario("Close_LD_Without_Changes")

