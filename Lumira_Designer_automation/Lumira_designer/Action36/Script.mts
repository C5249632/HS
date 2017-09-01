'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_BOOKMARKSINTEGRATION''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

wait 10

'Write the Document name
Environment.Value("doc_name")="A_ZEN2WDF_BOOKMARKSINTEGRATION"
Get_Scenario("Create_Document")

'Create an Application 1
Environment.Value("app_name")="A_ZEN2WDF_BOOKMARKSINTEGRATION"
Get_Scenario("Create_Application")

'Add Data source
Environment.Value("app_name")="A_ZEN2WDF_BOOKMARKSINTEGRATION"
Environment.Value("query_name")="0PIOVC_QRY001"
Environment.Value("system_name")="Q93"
Get_Scenario("Add_Datasource")
wait 9


'Add few components to the application.
Call Get_Component("Table Components","Crosstab","0","0")
Get_Scenario("Add_Component")
wait 9
Get_Scenario("Add_Datasource_to_component")
wait 9


Call Get_Component("Chart Components","Chart","326","35")
Get_Scenario("Add_Component")
wait 9
Get_Scenario("Add_Datasource_to_component")
wait 9

'In the outline pane, invoke context menu on Technical Components and select Create  Smart Bookmark

JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Bookmarks"))
JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Bookmarks").Select

wait 9
'Now, invoke context menu on any of the components in the outline pane.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Layout;CROSSTAB_1 - DS_1"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Add to Bookmark Definition"))
JavaWindow("SAP BusinessObjects").JavaMenu("Add to Bookmark Definition").Select
wait 9

'The bookmark selection can also be done from the properties pane of the smart bookmark technical component.In the properties pane of the smart bookmark, select Bookmark Configuration  Defination.

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components;BOOKMARKS_1"
wait 3
Call Check_Property_Value("Configuration","Definition","CROSSTAB_1")
wait 4


'In order to remove the component from the bookmark definition, invoke context menu on the same component again in outline pane and select ‘Remove from Bookmark Definition’.

JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Layout;CROSSTAB_1 - DS_1"
JavaWindow("SAP BusinessObjects").JavaMenu("Remove from Bookmark Definitio").Select

wait 9
'Now, invoke context menu on any of the components in the outline pane.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Layout;CROSSTAB_1 - DS_1"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Add to Bookmark Definition"))
JavaWindow("SAP BusinessObjects").JavaMenu("Add to Bookmark Definition").Select

'The components can also be added/removed to/from the bookmark definition by invoking context menu in the editor layout. 

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components;BOOKMARKS_1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition"))



'Uncheck the check box  show selected only
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaCheckBox("Show Selected Only"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaCheckBox("Show Selected Only").Set "OFF"

'Try expanding and collapsing the hierarchy using the buttons
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Button"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Button").Click
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Button_2"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Button_2").Click


'check the check box  show selected only
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaCheckBox("Show Selected Only"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaCheckBox("Show Selected Only").Set "ON"

'click on clear selection
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Clear Selection"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Clear Selection").Click

'Click on Cancel.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Cancel"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Cancel").Click


'Reopen the Bookmark Definition dialog.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components;BOOKMARKS_1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition"))


'Search for any selected component using the search field.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaEdit("Select the components"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaEdit("Select the components").Set "crosstab"
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").highlight

'Clear the search field.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaEdit("Select the components"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaEdit("Select the components").Set ""

'Click on Cancel.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Cancel"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("Cancel").Click



JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Layout;CHART_1 - DS_1"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Add to Bookmark Definition"))
JavaWindow("SAP BusinessObjects").JavaMenu("Add to Bookmark Definition").Select

'Reopen the Bookmark Definition dialog.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components;BOOKMARKS_1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition"))


'Unselect few components and click on OK

JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaTree("Select the components").SetItemState "Layout;CHART_1 - DS_1",micUnchecked
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("OK").Click


 'Save the application and reopen. Check the bookmark definition again.
Environment.Value("doc_name")="A_ZEN2WDF_BOOKMARKSINTEGRATION" 
Get_Scenario("Save_Document")
Get_Scenario("Close_LD_Without_Changes")

wait 40

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")
wait 10

JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").Select "BI Platform Documents [10.97.152.171]"

Sendkey("{DOWN}")
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").Select "BI Platform Documents [10.97.152.171];A_ZEN2WDF_BOOKMARKSINTEGRATION"
'Open the document
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];A_ZEN2WDF_BOOKMARKSINTEGRATION"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Open"))
JavaWindow("SAP BusinessObjects").JavaMenu("Open").Select

'Open the application
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];A_ZEN2WDF_BOOKMARKSINTEGRATION;A_ZEN2WDF_BOOKMARKSINTEGRATION"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Open"))
JavaWindow("SAP BusinessObjects").JavaMenu("Open").Select

wait 22

'Add  the available technical components to the application and open the bookmark definition.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Action Sheet"))
JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Action Sheet").Select
JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Text Pool"))
JavaWindow("SAP BusinessObjects").JavaMenu("Create").JavaMenu("Text Pool").Select

'Reopen the Bookmark Definition dialog.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_ZEN2WDF_BOOKMARKSINTEGRATION;Technical Components;BOOKMARKS_1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition"))

'In the search field of the bookmark definition, enter any text starting with * (asterisk) and press enter.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaEdit("Select the components"))
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaEdit("Select the components").Set " * "
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Bookmark Definition").JavaButton("OK").Click


'Delete the document from BI

Environment.Value("doc_name")="A_ZEN2WDF_BOOKMARKSINTEGRATION"
Get_Scenario("Delete_documents_from_BI")

'Close the LD
Get_Scenario("Close_LD_Without_Changes")

