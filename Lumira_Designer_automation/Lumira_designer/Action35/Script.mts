'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_FILTERBAR_APP'''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")


'Write the Document name
Environment.Value("doc_name")="A_FILTERBAR_APP"

'Write the Application name
Environment.Value("app_name")="A_FILTERBAR_APP"

'Open application Filterbar_application in designer 
Get_Scenario("Open_Application")

wait 50

 'Select filterbar in outline and go to properties->display->Filter Area Visible. Set this as true

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select  "A_FILTERBAR_APP;Layout (1 hidden component);LAYOUT_CONTAINER;BODY;FILTERBAR_1 - DS_1"

wait 10
'Check The properties of the application shows that it is in commons mode.
Call Check_Property_Value("Display","Filter Area Visible","true")

'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 20

'Click on “Hide Filter Bar”
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Filterbar_expand"))
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("Hide Filter Bar"))
Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("Hide Filter Bar").Click

wait 10
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIToolbar("SAPUIToolbar"))


'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs


'Again go to designer and set Filter area visible as false
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select  "A_FILTERBAR_APP;Layout (1 hidden component);LAYOUT_CONTAINER;BODY;FILTERBAR_1 - DS_1"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Filter Area Visible"
Sendkey("{UP}")

 'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 20

'Click on “Show Filter Bar”
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("Show Filter Bar"))
Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("Show Filter Bar").Click
wait 8
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Filterbar_expand"))

wait 10

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs


'Write the Document name
Environment.Value("doc_name")="A_FILTERBAR_APP"

'Write the Application name
Environment.Value("app_name")="A_FILTERBAR_APP"

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'Close LD
Get_Scenario("Close_LD_Without_Changes")

