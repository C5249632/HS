'Environment.Value("document_path")="http://BOESERVER.pgdev.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AYbDhM0hJPRNtjQz75fxpvY&APP_TO_LAUNCH=M_ZEN2WDF_VALUE_HELP_SEARCH"
'Get_Scenario("Execute_on_IE")
'Environment.Value("doc_name")="M_ZEN2WDF_VALUE_HELP_SEARCH"
'Environment.Value("app_name")="M_ZEN2WDF_VALUE_HELP_SEARCH"
'Get_Scenario("Launch_LD")
'Get_Scenario("Open_Application")
'wait 50
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
'JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "M_ZEN2WDF_VALUE_HELP_SEARCH;Technical Components"
'Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Value Help Settings"))
'JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Value Help Settings").Select
'JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "M_ZEN2WDF_VALUE_HELP_SEARCH;Technical Components;VALUE_HELP_SETTINGS_2"
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select..."))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select...").Click
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaList("Select Data Source:"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaList("Select Data Source:").Select "DS_2"
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaEdit("Search Dimensions of Data Source:").Set "0BC_VEND1__0BC_HOME"
'wait 3
'Sendkey("{ENTER}")
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Select All"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Select All").Click
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK").Click
'Check_Textbox_Disabled(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name"))
'Check_Textbox_Disabled(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment"))
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Insert"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Insert").Click
'Check_Textbox_Enabled(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name").Set "NEW_DIMENSION"
'Check_Textbox_Enabled(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment").Set "NEW_COMMENT"
''Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Delete"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Delete").Click
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK"))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK").Click
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
'JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "M_ZEN2WDF_VALUE_HELP_SEARCH;Technical Components;VALUE_HELP_SETTINGS_2"
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select..."))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select...").Click
'Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Add.."))
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK").Click
'JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK").Click









