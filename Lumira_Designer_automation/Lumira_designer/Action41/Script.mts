'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_CTAB_SHIFTTAB'''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Close all Prompts
Get_Scenario("Close_All_Prompts")
wait 9

'Write the Document name
Environment.Value("doc_name")="A_ZEN2WDF_CTAB_SHIFTTAB"

'Write the Application name
Environment.Value("app_name")="A_ZEN2WDF_CTAB_SHIFTTAB"


'Open application Filterbar_application in designer 
Get_Scenario("Open_Nonlegacy_Application")

wait 60


'Select the value for prompt

Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaObject("ZenBrowser"))
Sendkey("{TAB}")
wait 2

Sendkey("{TAB}")
wait 2

Sendkey("CAMG01")
wait 2


Sendkey("{TAB}")
wait 2

Sendkey("CAMG02")
wait 2
Sendkey("{ENTER}")
wait 2
'Click on “OK” button 

JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK").Click
wait 30

'In the designer Under the user interactivity section in the Property sheet of the crosstab:Horizontal header resizing enabled : true->Horizontal Scrolling for Header Enabled : true

JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_ZEN2WDF_CTAB_SHIFTTAB;Layout;CROSSTAB_1 - DS_2"
wait 4

'Go to properties->Display->Auto apply->false
Call Check_Property_Value("User Interactivity","Horizontal Header Resizing Enabled","true")
wait 12

'Go to properties->Display->Auto apply->false
Call Check_Property_Value("User Interactivity","Horizontal Scrolling for Header Enabled","true")
wait 12

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")
'               Close LD
Get_Scenario("Close_LD_Without_Changes")


'Mention the Document path
Environment.Value("document_path")="http://10.97.152.171:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=Af5DqWir40JLjN86IjSuUVA&APP_TO_LAUNCH=A_ZEN2WDF_CTAB_SHIFTTAB"
'Execute it on the browser
Get_Scenario("Execute_on_IE")

wait 8

'Position the cursor on any cell, press Tab Key,The pointer should move to the next cell.
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").WebTable("* CharacterisitcVariable1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUITextEdit("BIC_VAR1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("BIC_VAR1_VALUEHELP"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("BIC_VAR1_VALUEHELP").Click
wait 5
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("VarSelect_SearchBar"))
Sendkey("CAMG01")
wait 3
Sendkey("{ENTER}")
wait 9
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("CAMG01"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("CAMG01").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click

Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUITextEdit("BIC_VAR21"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("BIC_VAR21_VALUEHELP"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("BIC_VAR21_VALUEHELP").Click
wait 5
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebEdit("VarSelect_SearchBar"))
Sendkey("CAMG02")
wait 3
Sendkey("{ENTER}")
wait 9
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("CAMG02"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("CAMG02").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 12
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("tab_select"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("tab_select").Click
wait 12
Sendkey("{TAB}")
wait 4
Sendkey("{TAB}")

wait 4
Sendkey("{TAB}")

wait 4
Sendkey("{TAB}")

wait 4
Sendkey("{TAB}")

'In order to move backward , use Shift+Tab 
wait 4
Sendkey("+{TAB}")
wait 4
Sendkey("+{TAB}")

wait 4
Sendkey("+{TAB}")
wait 7

'Point the cursor to the first cell in the crosstab  and press Shift +Tab,the control remains in the last cell.
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("tab_select"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("tab_select").Click
wait 4
Sendkey("+{TAB}")

'Point the cursor to the last cell in the crosstab and press Tab,the control remains in the last cell.
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Last_tab"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Last_tab").Click
wait 4
Sendkey("+{TAB}")
wait 7

'close the browser
Browser("IE Browser").Page("IE Frame").Sync
Browser("IE Browser").CloseAllTabs
wait 20

