'TestCase to check the functinality of the tab button at runtime

Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AccWtVW_bJREsBDb56cKM9k&APP_TO_LAUNCH=A_ZEN2WDF_DATEPICKER_S4"
Get_Scenario("Execute_on_IE")
wait 9

' Press tab consecutively to put properly set the parameters of the vaiables in the prompt screen at runtime
Sendkey("{TAB}")
wait 2
Sendkey("16-Aug-2017")
wait 2
Sendkey("{TAB}")
wait 2
Sendkey("2004/11/23")
wait 2
Sendkey("{TAB}")
wait 2
Sendkey("15-Aug-2017")
wait 2
Sendkey("{TAB}")
wait 2
'If all the "TABS" are executed successfully and the parameters are set properly then only the OK button will get active. So below statement
'checks if the OK button is active or not. If yes the test is successful and the tabs are working properly.
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("OK").Click
wait 2
Get_Scenario("Close_IE_Browser")




