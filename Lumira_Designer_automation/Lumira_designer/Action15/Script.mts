Environment.Value("doc_name")="A_DRILL_PATH"
Environment.Value("app_name")="DRILL_PATH"
Environment.Value("document_path")="http://BOESERVER.pgdev.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AT_t7wm2ltxFmkk_Aj2K8hk&APP_TO_LAUNCH=DRILL_PATH"
Get_Scenario("Execute_on_IE")
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("WebTable"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Path..."))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Path...").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DropDown_box"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DropDown_box").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Employee_Level_hierarchy"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Employee_Level_hierarchy").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("OK").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Asia"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Down"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Down").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("China"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Down"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Down").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sanghai"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Up"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Up").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("China"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill By"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill By").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sanghai"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill By"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill By").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Sanghai"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Up"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Up").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Wong"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Down"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill By"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Up"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Drill Up").Click
Get_Scenario("Close_IE_Browser")









