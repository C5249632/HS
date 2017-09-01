Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AR1O92LNi.BGgqiwwTSSk3Q&APP_TO_LAUNCH=A_ZEN2WDF_CONTEXT_MENU_REDO"
Get_Scenario("Execute_on_IE")
wait 6
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Variable_Selector"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Variable_Selector").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("HALLE"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("HALLE").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("VarSelect_OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("VarSelect_OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Promp_OK"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Promp_OK").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter Members..."))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter Members...").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("excellent"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("excellent").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("FilterSelect_OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("FilterSelect_OK").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Expand to Level"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Expand to Level").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Level 04"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Level 04").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Undo Previous Step"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Undo Previous Step").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Redo Previous Step"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Redo Previous Step").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Go to End"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Go to End").Click
Get_Scenario("Close_IE_Browser")

