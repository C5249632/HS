                '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_SAMP_VAL_VALUE_DIA''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")


'Write the Document name
Environment.Value("doc_name")="A_VALUE_HELP"

'Write the Application name
Environment.Value("app_name")="A_VALUE_HELP"

'Close all Prompts
Get_Scenario("Close_All_Prompts")
wait 9

'Open application Filterbar_application in designer 
Get_Scenario("Open_Application")

wait 90



 'Enter the value for prompt
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaObject("ZenBrowser"))
wait 4
Sendkey("{TAB}")
  wait 4
  Sendkey("{TAB}")
  wait 4
Sendkey("DACHAU")
wait 4
Sendkey("{ENTER}")
wait 4
JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK").Click

'Go to technical component and create a new component “Value Help Settings”.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Technical Components"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_VALUE_HELP;Technical Components"
JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Value Help Settings").Select

'Double click and open the Value Help Setting.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"

'Click on ‘Select’ to open “Select Dimensions” pop-up.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select..."))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select...").Click
wait 15

'Check the 0BC_VEND1__0BC_HOME and change the datasource to DS_2 from the dropdown “Select Data Source”.
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaTable("Dimensions of Data Source:").SelectCell "0","0"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Select All"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Select All").Click
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaList("Select Data Source:"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaList("Select Data Source:").Select "DS_2"
wait 7
'Click on “Select All”.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Select All"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Select All").Click
wait 7
'Click ‘OK’ to return to Value Help Setting Pop-up
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK").Click

'Type ‘HOME’ in the “type filter text” Search Box to search for the dimension.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Dimensions:"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Dimensions:").highlight
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Dimensions:").Set "HOME"
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaTable("Dimensions:").SelectCell "0","0"
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Dimensions:").highlight
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Dimensions:").Set ""


'Check if it is possible to Edit the “Name” & “Comment” of the dimensions in the property.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name").highlight
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment").highlight

'Change the order of the dimensions by clicking on ‘Move Down’
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Move Down"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Move Down").Click

'Change the order of the dimensions by clicking on ‘Move Up’ 
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Move Up"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Move Up").Click

'Click on ‘Ok’.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK").Click

'Open the Value Help settings again.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"

'The saved order should not be lost.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings"))


'Click on ‘Insert’ to add custom dimension.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Insert"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Insert").Click

'Change the Name & Comment of custom dimension.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name").Set "All_Dimensions"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment").Set "All_Dimensions"

'Click on ‘Ok’.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK").Click

'Open the Value Help settings again.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"

'Click on ‘Insert’ to add custom dimension.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Insert"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Insert").Click

'Add another custom dimension like “ALL Measures”  & then delete it.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Dimension Name").Set "ALL_Measures"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaEdit("Edit Comment").Set "ALL_Measures"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Delete"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Delete").Click

'Click on ‘Select’ to open “Select Dimensions” pop-up.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select..."))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("Select...").Click
wait 9

'Click on ‘Add’
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Add.."))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("Add..").Click

'Add “0PIOVC_QRY001” as DS_4 and click ‘Ok’
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaWindow("Add Data Source").JavaButton("Browse...").Click
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Add Data Source").JavaWindow("Select Connection").JavaEdit("Text"))    
JavaWindow("SAP BusinessObjects").JavaWindow("Add Data Source").JavaWindow("Select Connection").JavaEdit("Text").Set "Q93"
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaWindow("Add Data Source").JavaWindow("Select Connection").JavaButton("OK").Click
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaWindow("Add Data Source").JavaEdit("Data Source:").Set "0PIOVC_QRY001"
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaWindow("Add Data Source").JavaEdit("Data Source Alias:").Set "DS_4"
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaWindow("Add Data Source").JavaButton("OK").Click
wait 20

'Click on ‘Ok’ to return to Value Help Setting pop-up
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaWindow("Select Dimensions").JavaButton("OK").Click

'Click on ‘Ok’ in value help setting to return to the application.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK").Click


'Select Spreadsheet & Filter Bar & assign them DS_4
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;SPREADSHEET_1 - DS_3"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Data Binding;Data Source"
wait 2
Sendkey("{DOWN}")
wait 2
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;FILTERBAR_1 - DS_3"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Data Binding;Data Source"
wait 2
Sendkey("{DOWN}")

'Assign the technical component “VALUE_HELP_SETTINGS_2” to Dimension Filter, Filter Bar, Filter Panel
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;DIMENSIONFILTER_1 - DS_1"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate"Value Help;Value Help Settings"
wait 2
Sendkey("{DOWN}")


JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;FILTERPANEL_1 - DS_2"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate"Value Help;Value Help Settings"
wait 2
Sendkey("{DOWN}")

'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Filter the component
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").WebElement("html id:=__input0__vhi","class:=sapMInputValHelpInner sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer"))
Browser("IE Browser").Page("IE Frame").WebElement("html id:=__input0__vhi","class:=sapMInputValHelpInner sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer").Click 
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").WebElement("__text19-col0-row1"))
Browser("IE Browser").Page("IE Frame").WebElement("__text19-col0-row1").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1").highlight
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1").Click
wait 10

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs

'change the “Runtime sort order” and the dimensions will be sorted accordingly
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaList("Runtime Sort Order:"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaList("Runtime Sort Order:").Select "Ascending by Name"

''Click on ‘Ok’ in value help setting to return to the application.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Value Help Settings").JavaButton("OK").Click

'Add a Navigation Panel to an application 
Call Get_Component("Filter Components","Navigation Panel","728","411")
Get_Scenario("Add_Component")

'Assign a data source to it
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;NAVIGATIONPANEL_1"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Data Binding;Data Source"
wait 2
Sendkey("{UP}")


'Add the Value Help Settings technical component
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate"Value Help;Value Help Settings"
wait 2
Sendkey("{UP}")

'Delete the DS_4 Data Source 
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Data Sources;0PIOVC_QRY001 - DS_4"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_VALUE_HELP;Data Sources;0PIOVC_QRY001 - DS_4"
JavaWindow("SAP BusinessObjects").JavaMenu("Delete").Select

'Delete technical component “VALUE_HELP_SETTINGS_2”

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_VALUE_HELP;Technical Components;VALUE_HELP_SETTINGS_2"
JavaWindow("SAP BusinessObjects").JavaMenu("Delete").Select


'In Dimension filter, go to the property and delete the selected dimension “0BC_VEND1__0BC_HOME”

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;DIMENSIONFILTER_1 - DS_1"
wait 20
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Data Binding;Dimension"
Sendkey("{BACKSPACE}")
Sendkey("{ENTER}")
'*********Sample Value in Value Help when limit exceeded**********
'Search for a datasource which contains more than 100 members for dimension like BICS/FOODMART with dimension product
Environment.Value("app_name")="A_VALUE_HELP"
Environment.Value("query_name")="bics.basic/BICS_FOODMART"
Environment.Value("system_name")="AO5"
Get_Scenario("Add_Datasource")
Wait 10



'Go to Edit initail view
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Data Sources;bics.basic/BICS_FOODMART - DS_4"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_VALUE_HELP;Data Sources;bics.basic/BICS_FOODMART - DS_4"
JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View...").Select
JavaWindow("SAP BusinessObjects").JavaTree("Tree_3").highlight
JavaWindow("SAP BusinessObjects").JavaTree("Tree_3").OpenContextMenu "Product - product_id"
JavaWindow("SAP BusinessObjects").JavaMenu("Add To Rows").Select
JavaWindow("SAP BusinessObjects").JavaButton("OK").Click

'Assign the data source to the SPREADSHEET
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_VALUE_HELP;Layout;SPREADSHEET_1"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Data Binding;Data Source"
wait 2
Sendkey("{UP}")

'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Filter the component
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").WebElement("html id:=__input0__vhi","class:=sapMInputValHelpInner sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer"))
Browser("IE Browser").Page("IE Frame").WebElement("html id:=__input0__vhi","class:=sapMInputValHelpInner sapUiIcon sapUiIconMirrorInRTL sapUiIconPointer").Click 
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").WebElement("__text19-col0-row1"))
Browser("IE Browser").Page("IE Frame").WebElement("__text19-col0-row1").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1").highlight
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1").Click
wait 10

'Open contextmenu on spreadsheet product and click on filter
Context_Menu(Browser("IE Browser").Page("IE Frame").WebElement("Products"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").WebElement("Filter Members..._1"))
Browser("IE Browser").Page("IE Frame").WebElement("Filter Members..._1").Click
wait 7

'The value help shows first 100 entries and a message shows “More entries available, please narrow down your search result”
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").WebElement("More entries are available."))

'Close the browser
Get_Scenario("Close_IE_Browser")
Environment.Value("doc_name")="A_VALUE_HELP"
'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'Close LD
Get_Scenario("Close_LD_Without_Changes")



