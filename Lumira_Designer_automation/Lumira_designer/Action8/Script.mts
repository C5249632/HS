'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''M_ZEN2WDF_DATEPICKER_S4'''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Close all Prompts
Get_Scenario("Close_All_Prompts")
wait 9


'Write the Document name
Environment.Value("doc_name")="M_ZEN2WDF_DATEPICKER_S4"

'Write the Application name
Environment.Value("app_name")="M_ZEN2WDF_DATEPICKER_S4"


'Open application Filterbar_application in designer 
Get_Scenario("Open_Application")
wait 90

'Invoke date picker on single_date_var and ->not possible ->a date picker should appear


JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaObject("ZenBrowser").highlight
Sendkey("{TAB}")
wait 2

'Select the date for single_date_var = 1st Aug 2017 and Value should be selected without any issue
Sendkey("{TAB}")
wait 2
Sendkey("Aug 1, 2017")
wait 2

'For Multi_Sel_date_var, ->not possible-> invoke value help

Sendkey("{TAB}")
wait 2


'For Multi_sel_date_var, select values = 6th July 2004 and 21st July 2004
Sendkey("2004/07/06")
wait 2
Sendkey("{ENTER}")
wait 4
Sendkey("2004/07/21")

Sendkey("{ENTER}")


'invoke date picker on Interval_date_var
Sendkey("{TAB}")
wait 2
'Select dates for Interval_date_var = 6th July 2004 to 21st July 2004
Sendkey("Jul 6, 2017 - Jul 21, 2017")
Sendkey("{ENTER}")
wait 9
'Click on “OK” button 

JavaWindow("SAP BusinessObjects").JavaWindow("Prompts for 'VALUE_HELP'").JavaButton("OK").Click
wait 12

'Execute the application in browser
JavaWindow("SAP BusinessObjects").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"
wait 7


'Invoke date picker on single_date_var
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("date_picker_2"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("date_picker_2").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2017"))
Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2017").Click
wait 3
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Select_2007"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Select_2007").Click
wait 3
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2007"))
Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2007").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("select_2004"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("select_2004").Click
wait 3
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("6-july-2004"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("6-july-2004").Click
wait 3


'Invoke date picker on Interval_date_var
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("date_picker_1"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("date_picker_1").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2017"))
Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2017").Click
wait 3
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Select_2007_1"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Select_2007_1").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2007_1"))
Browser("IE_Execute_Locally").Page("IE Frame").WebButton("2007_1").Click
wait 3
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("select_2004").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("13-july-2004"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("13-july-2004").Click
wait 3
Sendkey("{ENTER}")
wait 3
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("date_picker_1"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("date_picker_1").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("21-july-2004"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("21-july-2004").Click
wait 3
Sendkey("{ENTER}")


'Select Multi_sel_date_var,
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Value_help_multi_sel"))
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Value_help_multi_sel").Click
wait 2
Sendkey("2004/07/06")
wait 3
Sendkey("{ENTER}")
wait 7
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Select_element_06_07_2004").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("OK"))
Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("OK").Click
wait 7
Sendkey("{ENTER}")
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Value_help_2").Click
Sendkey("2004/07/06")
wait 3
Sendkey("{ENTER}")
wait 7
Browser("IE_Execute_Locally").Page("IE Frame").WebElement("Select_element_21_07_2004").Click
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("OK"))
Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("OK").Click


wait 40

'Click on open Prompt
Check_Object_Exist(Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("Open Prompt"))
Browser("IE_Execute_Locally").Page("IE Frame").SAPUIButton("Open Prompt").Click

wait 9

'Close the browser
Get_Scenario("Close_IE_Browser")

'Write the Document name
Environment.Value("doc_name")="M_ZEN2WDF_DATEPICKER_S4"

'Write the Application name
Environment.Value("app_name")="M_ZEN2WDF_DATEPICKER_S4"

'Delete the document from local
Get_Scenario("Delete_Document_from_Local")

'Close LD
Get_Scenario("Close_LD_Without_Changes")

