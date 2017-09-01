'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_SORTING_IN_OFFLINE_PROVIDERS'''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Write the Document name
Environment.Value("doc_name")="A_SORTING_IN_OFFLINE_PROVIDERS"

'Write the Application name
Environment.Value("app_name")="A_SORTING_IN_OFFLINE_PROVIDERS"


'Open application Filterbar_application in designer 
Get_Scenario("Open_Nonlegacy_Application")

wait 40
'Open Story

JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];A_SORTING_IN_OFFLINE_PROVIDERS;Story -01"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Open"))
JavaWindow("SAP BusinessObjects").JavaMenu("Open").Select

wait 50


'Go to STORY-01-Data Sourceslumira_retail_sales.xlsx/lumira_retail_sales-DS_1 via the context menu  Edit Initial View… 

JavaWindow("SAP BusinessObjects").JavaTree("Tree").OpenContextMenu "Story -01;Data Sources;lumira_retail_sales.xlsx/lumira_retail_sales - DS_1"
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View..."))
JavaWindow("SAP BusinessObjects").JavaMenu("Edit Initial View...").Select


'In the rows shelf  CustomerType-> Sort ->By Member ->By Key,Ascending

JavaWindow("SAP BusinessObjects").JavaWindow("Edit Initial View of 2").JavaTree("Tree_5").OpenContextMenu "Customertype - DS:2,DIM:id_12"
wait 2
Check_Object_Designer_CM(JavaWindow("SAP BusinessObjects").JavaWindow("Edit Initial View of 2").JavaMenu("Sort"))
wait 2
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Initial View of 2").JavaMenu("Sort").JavaMenu("By Member").JavaMenu("By Key, Ascending").Select
JavaWindow("SAP BusinessObjects").JavaWindow("Edit Initial View of 2").JavaButton("OK").Click
wait 9

 'Activate Application
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").Activate "BI Platform Documents [10.97.152.171];A_SORTING_IN_OFFLINE_PROVIDERS;A_SORTING_IN_OFFLINE_PROVIDERS"

 'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7
'maximize the browser
Browser("IE Browser").Page("App_Doc").Sync
wait 7

'Invoke context menu on the dimension Customer  Sort  key Ascending 
Context_Menu(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Customer"))
Check_Text_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Sort"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Sort").Click
Check_Text_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Key Ascending"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Key Ascending").Click


'Close the browser
Get_Scenario("Close_IE_Browser")

'Write the Document name
Environment.Value("doc_name")="A_SORTING_IN_OFFLINE_PROVIDERS"

'Write the Application name
Environment.Value("app_name")="A_SORTING_IN_OFFLINE_PROVIDERS"

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'Close LD
Get_Scenario("Close_LD_Without_Changes")

