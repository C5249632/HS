'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_CALCVIEW_MUL_IPARAM'''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

wait 10

'Write the Document name
Environment.Value("doc_name")="A_MULT_TEXT_INPUT_PARAM"

'Write the Application name
Environment.Value("app_name")="A_MULT_TEXT_INPUT_PARAM"

'Close all Prompts
Get_Scenario("Close_All_Prompts")
wait 9

'Open application Filterbar_application in designer 
Get_Scenario("Open_Application")

wait 90

 'Give multiple text inputs eg : Hello, World, This , is, Lumira ,so Hello5 and the variable prompt should accept

Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaObject("ZenBrowser"))
Sendkey("{TAB}")
wait 2

Sendkey("{TAB}")
wait 2

Sendkey("HELLO WORLD")
Sendkey("{ENTER}")
wait 5
Sendkey("HELLO SANDY")
Sendkey("{ENTER}")
wait 5
Sendkey("{TAB}")

Sendkey("HELLO SAP")
Sendkey("{ENTER}")
wait 5
'Click “OK” on variable prompt

 Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK").Click

wait 12

'Go to “Edit Initial View” and move “cal” field into columns and click on “OK + Create Crosstab”
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_MULT_TEXT_INPUT_PARAM;Data Sources;bics.basic/MULT_TEXT_INPUT_PARAM - DS_1"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View..."))
JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View...").Select

wait 10

Sendkey("{TAB}")
wait 6
Sendkey("HELLO SANDY")
wait 3
Sendkey("{TAB}")
wait 3
Sendkey("{ENTER}")

wait 3
Sendkey("{TAB}")
Sendkey("{TAB}")
Sendkey("{TAB}")
Sendkey("{ENTER}")
wait 9
JavaWindow("SAP BusinessObjects").JavaTree("Tree_3").Select "cal"

JavaWindow("SAP BusinessObjects").JavaTree("Tree_3").OpenContextMenu "cal"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Add To Columns"))
JavaWindow("SAP BusinessObjects").JavaMenu("Add To Columns").Select
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaButton("OK + Create Crosstab"))
JavaWindow("SAP BusinessObjects").JavaButton("OK + Create Crosstab").Click

 wait 20

JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
Browser("IE Browser").Page("App_Doc").Sync
wait 7


'Close the browser
Get_Scenario("Close_IE_Browser")


'Repeat steps 

'Write the Document name
Environment.Value("doc_name")="A_MULT_TEXT_INPUT_PARAM"

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'Close LD
Get_Scenario("Close_LD_Without_Changes")

wait 40

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

wait 10



'Write the Document name
Environment.Value("doc_name")="A_MULT_TEXT_INPUT_PARAM"

'Write the Application name
Environment.Value("app_name")="A_MULT_TEXT_INPUT_PARAM"

'Close all Prompts
Get_Scenario("Close_All_Prompts")
wait 9

'Open application Filterbar_application in designer 
Get_Scenario("Open_Application")

wait 90

 'Give multiple text inputs eg : Hello, World, This , is, Lumira ,so Hello5 and the variable prompt should accept

Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaObject("ZenBrowser"))
Sendkey("{TAB}")
wait 2

Sendkey("{TAB}")
wait 2

Sendkey("HELLO WORLD")
Sendkey("{ENTER}")

Sendkey("HELLO SANDY")
Sendkey("{ENTER}")

Sendkey("{TAB}")

Sendkey("HELLO SAP")
Sendkey("{ENTER}")
'Click “OK” on variable prompt

 Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK").Click

'Go to “Edit Initial View” and move “cal” field into columns and click on “OK + Create Crosstab”
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_MULT_TEXT_INPUT_PARAM;Data Sources;bics.basic/MULT_TEXT_INPUT_PARAM - DS_1"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View..."))
JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View...").Select

wait 10

Sendkey("{TAB}")
wait 6
Sendkey("HELLO SANDY")
wait 3
Sendkey("{TAB}")
wait 3
Sendkey("{ENTER}")

wait 9
Sendkey("{TAB}")
Sendkey("{TAB}")
Sendkey("{TAB}")
Sendkey("{ENTER}")
wait 9
JavaWindow("SAP BusinessObjects").JavaTree("Tree_3").Select "cal"

JavaWindow("SAP BusinessObjects").JavaTree("Tree_3").OpenContextMenu "cal"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Add To Columns"))
JavaWindow("SAP BusinessObjects").JavaMenu("Add To Columns").Select
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaButton("OK + Create Crosstab"))
JavaWindow("SAP BusinessObjects").JavaButton("OK + Create Crosstab").Click

 wait 20

JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
Browser("IE Browser").Page("App_Doc").Sync
wait 7



'Re-run the application and give only one text input in multi_text input field ->ok buttonis disabled
Check_Button_Disabled(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("OK_1"))



'Close the browser
Get_Scenario("Close_IE_Browser")

'Write the Document name
Environment.Value("doc_name")="A_MULT_TEXT_INPUT_PARAM"

'Write the Application name
Environment.Value("app_name")="A_MULT_TEXT_INPUT_PARAM"

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'Close LD
Get_Scenario("Close_LD_Without_Changes")

