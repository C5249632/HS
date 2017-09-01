Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=Aa1CUjV0cxJBvWOwFVaV8zA&APP_TO_LAUNCH=A_ZEN2WDF_MULTI_RESULT_DIALOG"
Get_Scenario("Execute_on_IE")
wait 5
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Totals"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Totals").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Select Multiple Totals..."))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Select Multiple Totals...").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Count"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Count").Click
wait 2
Sendkey(" ")
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Count Uparrow"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Count Uparrow").Click
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Count Uparrow").Click
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Count Uparrow").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sum"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sum").Click
wait 2
Sendkey(" ")
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sum Uparrow"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sum Uparrow").Click
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sum Uparrow").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Minimum"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Minimum").Click
wait 2
Sendkey(" ")
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Minimum Uparrow"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Minimum Uparrow").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
wait 4
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1__0BC_EVAL0BC_VEND1__"))
wait 2
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Totals"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Totals").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Hide Totals"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Hide Totals").Click
Get_Scenario("Close_IE_Browser")

