'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_COLLECT_SUPPORT_INFO''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Write the Document name
Environment.Value("doc_name")="SUPPORT_5"
Get_Scenario("Create_Document")

'Create an Application 1
Environment.Value("app_name")="APP1"
Get_Scenario("Create_Application")


'create Application 2
Environment.Value("app_name")="APP2"
Get_Scenario("Create_Application")


'create Application 3
Environment.Value("app_name")="APP3"
Get_Scenario("Create_Application")

'Write the Document name
Environment.Value("doc_name")="SUPPORT_4"
Get_Scenario("Create_Document")
wait 8
                Get_Scenario("Save_Document")
                wait 9
                Get_Scenario("Click_to_Open_Doc")

'Create a composite document in SUPPORT_1
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.208.197.66];SUPPORT_5"
JavaWindow("SAP BusinessObjects").JavaMenu("Create Composite...").Select
JavaWindow("SAP BusinessObjects").JavaWindow("New Composite").JavaEdit("Name:").Set "COMP1"
JavaWindow("SAP BusinessObjects").JavaWindow("New Composite").JavaButton("Create").Click
wait 8
                Get_Scenario("Save_Document")
                wait 9
                Get_Scenario("Click_to_Open_Doc")


'Create a composite document in SUPPORT_2
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.208.197.66];SUPPORT_4"
JavaWindow("SAP BusinessObjects").JavaMenu("Create Composite...").Select
JavaWindow("SAP BusinessObjects").JavaWindow("New Composite").JavaEdit("Name:").Set "COMP2"
JavaWindow("SAP BusinessObjects").JavaWindow("New Composite").JavaButton("Create").Click
wait 8
                Get_Scenario("Save_Document")
                wait 9
                Get_Scenario("Click_to_Open_Doc")

'Go to Menu Help->Collect Support Information and select and accept the legal terms and select next

JavaWindow("SAP BusinessObjects").JavaMenu("Help").JavaMenu("Collect Support Information...").Select
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaCheckBox("I accept the terms of").Set "ON"
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaButton("Next >").Click

'Choose a target folder and click on “Next”
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaButton("Browse...").Click
Window("SAP BusinessObjects").Dialog("Collect Support Information").Dialog("Browse For Folder").WinTreeView("Select the target folder").Select "Desktop;INLD50902244A"
Window("SAP BusinessObjects").Dialog("Collect Support Information").Dialog("Browse For Folder").WinTreeView("Select the target folder").Select "Desktop;INLD50902244A;OSDisk (C:)"
Window("SAP BusinessObjects").Dialog("Collect Support Information").Dialog("Browse For Folder").WinButton("OK").Click
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaButton("Next >").Click

'Select screenshot as Yes and click on next
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaRadioButton("Yes").Set
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaButton("Next >").Click

'Add Analysis Application which is required  and click on “Next”
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaTable("Add Analysis Application").SelectCell "0","Name"
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaButton("Next >").Click

'Include the log files and click on Finish
JavaWindow("SAP BusinessObjects").JavaWindow("Collect Support Information").JavaButton("Finish").Click


'Open the zip and check the following hierarchy of folders:First level folders: Backend System, Designer, Documents, Eclipse, Screenshots, Tracelog

Window("WinRAR").WinListView("SysListView32").Activate "Eclipse"
wait 2

Call WindowsUnZip("C:\functional_lib.zip", "C:\Dest")




