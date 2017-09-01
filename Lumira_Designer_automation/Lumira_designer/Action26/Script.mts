Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AR5_g.cemK1BoAztcyuCGbI&APP_TO_LAUNCH=A_ZEN2WDF_CMENU_NODISPLAY"
Get_Scenario("Execute_on_IE")
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Display"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Display").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("No Display"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("No Display").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_Selector VEND1_EVAL"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Value_Selector VEND1_EVAL").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("No items selected"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").SAPUIButton("OK").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Display"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Display").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Key and Text"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Key and Text").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("008"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Display"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Display").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Medium Text"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Medium Text").Click
wait 2
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Back to Start"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Back to Start").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Get_Scenario("Close_IE_Browser")




