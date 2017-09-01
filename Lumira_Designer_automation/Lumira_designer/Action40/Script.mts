'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_SPREADSHEET_DATASEL''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Write the Document name
Environment.Value("doc_name")="A_ZEN2WDF_SPREADSHEET_DATASEL"
Get_Scenario("Create_Document")

'Create an Application 1
Environment.Value("app_name")="A_ZEN2WDF_SPREADSHEET_DATASEL"
Get_Scenario("Create_Application")

'Add Data source
Environment.Value("app_name")="A_ZEN2WDF_SPREADSHEET_DATASEL"
Environment.Value("query_name")="0PIOVC_QRY001"
Environment.Value("system_name")="Q93"
Get_Scenario("Add_Datasource")
wait 22

'Add few components to the application.
Call Get_Component("Table Components","Spreadsheet","0","0")
Get_Scenario("Add_Component")
wait 9
Get_Scenario("Add_Datasource_to_component")
wait 9

'Click on select data 
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_1"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate  "Data Binding;Data Selection"
JavaWindow("SAP BusinessObjects").JavaButton("...").Click

'Select data from the grid and Type in the following text in the data selection section {"0BC_VEND1__0BC_EVAL":["1","2"]} and click on Show button 




wait 22
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaObject("ZenBrowser"))
wait 2
Sendkey("{TAB}")
Sendkey("{ENTER}")
wait 2




' Click on OK
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Select Data").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Select Data").JavaButton("OK").Click


'Delete the document from BI

Environment.Value("doc_name")="A_ZEN2WDF_SPREADSHEET_DATASEL"
Get_Scenario("Delete_documents_from_BI")

'Close the LD
Get_Scenario("Close_LD_Without_Changes")

