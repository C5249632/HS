Environment.Value("doc_name")="M_ZEN2WDF_CONTEXT_MENU_REDO"
Environment.Value("app_name")="CM_REDO"
Environment.Value("document_path")="http://BOESERVER.pgdev.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AfRLFaCfNJ1GnrJcFbfmkl8&APP_TO_LAUNCH=CM_REDO"
Get_Scenario("Execute_on_IE")
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Variable_Selector"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Variable_Selector").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("HALLE"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("HALLE").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("VarSelect_OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("VarSelect_OK").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Promp_OK"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Promp_OK").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1_0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter Members...")) @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Filter Members...").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("excellent"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("excellent").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("FilterSelect_OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("FilterSelect_OK").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1_0BC_HOME"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Expand to Level"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Expand to Level").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Level 04"))	
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Level 04").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1_0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Undo Previous Step"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Undo Previous Step").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1_0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Redo Previous Step"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Redo Previous Step").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1_0BC_HOME"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Go to End"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Go to End").Click
Get_Scenario("Close_IE_Browser")
 @@ hightlight id_;_Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUITable("VarSelect Table")_;_script infofile_;_ZIP::ssf2.xml_;_

