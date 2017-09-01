'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_BROWSER_TITLE''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Write the Document name
Environment.Value("doc_name")="A_BROWSER_TITLE"

'Write the Application name
Environment.Value("app_name")="A_BROWSER_TITLE"


'Open application Filterbar_application in designer 
Get_Scenario("Open_Nonlegacy_Application")

wait 30

 'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Check the browser title name
myStr=Browser("IE Browser").GetROproperty("name")
                if(myStr="A_BROWSER_TITLE") Then
                                Reporter.ReportEvent micPass,myStr,"The title is name matches"
                Else
                                Reporter.ReportEvent micFail,myStr,"The title is name mismatches"
                End If

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs


'Set the property Display ->Browser Title to “NEW_NAME” and save the application and save it.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_BROWSER_TITLE"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Browser Title"



Sendkey("NEW_NAME")


JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_BROWSER_TITLE"
'Save the document
Get_Scenario("Save_Document")


'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Check the browser title name
myStr=Browser("IE Browser").GetROproperty("name")
                if(myStr="NEW_NAME") Then
                                Reporter.ReportEvent micPass,myStr,"The title is name matches"
                Else
                                Reporter.ReportEvent micFail,myStr,"The title is name mismatches"
                End If

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs



'Set the property Display-> Browser Title to “   3space    4space     5space     ” ,and save it.and save the application,All the extra spaces have been trimmed.
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_BROWSER_TITLE"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Browser Title"

Sendkey("  3space    4space     5space     ")

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_BROWSER_TITLE"
'Save the document
Environment.Value("doc_name")="A_BROWSER_TITLE"
Get_Scenario("Save_Document")


'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Check the browser title name
myStr=Browser("IE Browser").GetROproperty("name")
                if(myStr="3space 4space 5space") Then
                                Reporter.ReportEvent micPass,myStr,"The title is name matches"
                Else
                                Reporter.ReportEvent micFail,myStr,"The title is name mismatches"
                End If

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs

''Delete the Browser title, save and execute the application 
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_BROWSER_TITLE"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Browser Title"

Sendkey(" ")

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_BROWSER_TITLE"
'Save the document
Environment.Value("doc_name")="A_BROWSER_TITLE"
Get_Scenario("Save_Document")


wait 10

 'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Check the browser title name
myStr=Browser("IE Browser").GetROproperty("name")
                if(myStr="A_BROWSER_TITLE") Then
                                Reporter.ReportEvent micPass,myStr,"The title is name matches"
                Else
                                Reporter.ReportEvent micFail,myStr,"The title is name mismatches"
                End If

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'Close LD
Get_Scenario("Close_LD_Without_Changes")

