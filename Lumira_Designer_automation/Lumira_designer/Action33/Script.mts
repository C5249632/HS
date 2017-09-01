Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AZG6IIJOCwlAv.lRbBtIDZc&APP_TO_LAUNCH=A_ZEN2WDF_SEL_VALUES_BOUND"
Get_Scenario("Execute_on_IE")
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("value_Select_0BC_EVAL"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("value_Select_0BC_EVAL").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("excellent"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("excellent").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("average"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("average").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Excellent-Listboc"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Excellent-Listboc").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Average - Listbox"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Average - Listbox").Click
Get_Scenario("Close_IE_Browser")

