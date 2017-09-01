'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_PAUSE_UNPAUSE''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")


'Write the Document name
Environment.Value("doc_name")="A_FILTERBAR_APPLICATION"

'Write the Application name
Environment.Value("app_name")="A_FILTERBAR_APPLICATION"


'Open application Filterbar_application in designer 
Get_Scenario("Open_Nonlegacy_Application")
wait 22

'Select navigation panel  
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_FILTERBAR_APPLICATION;Layout (1 hidden component);LAYOUT_CONTAINER;BODY;NAVIGATIONPANEL_1 - DS_1"

'Go to properties->Display->Auto apply->false
Call Check_Property_Value("Display","Auto Apply","false")
wait 12


'Select Filter Panel
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_FILTERBAR_APPLICATION;Layout (1 hidden component);LAYOUT_CONTAINER;BODY;FILTERPANEL_1 - DS_1"

'Go to properties->Display->Auto apply->false
Call Check_Property_Value("Display","Auto Apply","false")
wait 12


'Write the Document name
Environment.Value("doc_name")="A_FILTERBAR_APPLICATION"

'Write the Application name
Environment.Value("app_name")="A_FILTERBAR_APPLICATION"

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'               Close LD
Get_Scenario("Close_LD_Without_Changes")

'Mention the Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdsTOmhNHH1NlDiDIj0..vk&APP_TO_LAUNCH=A_FILTERBAR_APPLICATION"
'Execute it on the browser
Get_Scenario("Execute_on_IE")
wait 12

'Check whether all the GO button are not enabled 
Check_Button_Disabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go_2"))
Check_Button_Disabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go_3"))

'Invoke value help on “0BC_CUST1__0BC_EVAL” from Filter Bar 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter_Bar"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter_Bar").Click
wait 16
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_value_help"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_value_help").Click
'select “average” and click “ok”
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("average").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1").Click

'Click on “Go” button on filter bar
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go").Click
wait 9

'Check the crosstab is filtered with 1,2,3,4 
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("1"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("3"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("4"))


'Invoke Value help on “0BC_CUST1__0BC_EVAL” from Filter Panel 
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_valuehelp_panel"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_valuehelp_panel"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_valuehelp_panel").Click

'Unselect “average” and click “OK”
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("average").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1").Click
wait 9

'Click on “Go” button on Filter Panel
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go_1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go_1").Click

'Check the crosstab is filtered with 1,2,4 
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("1"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("4"))


'Drag “0BC_VEND1_0BC_EVAL” in Rows of navigation Panel.Done through button,Enabling go button is skipped
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Move_Dim_to_Row"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Move_Dim_to_Row").Click
wait 7

'Check the cross tab
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1_0BC_EVAL_cross_tab"))

'Click on  Button “Pause/Unpause” 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Pause/Unpause"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Pause/Unpause").Click


'Drag “0BC_VEND1_0BC_EVAL” from Rows of Navigation Panel into “Dimensions” column(can not be done)


'Invoke value help on “0BC_CUST1__0BC_EVAL” from Filter Bar 
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter_Bar"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter_Bar").Click
wait 16
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_value_help"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_CUST1__0BC_EVAL_value_help").Click

'select “average” and click “ok”
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("average").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK_1").Click

'Click on “Go” button on filter bar
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Go").Click
wait 9

'Check the crosstab is filtered with 1,2,3,4 
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("1"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("3"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("4"))

'Close the browser
Get_Scenario("Close_IE_Browser")

