Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AYZ7gkKe2GZMtpFqaRi3PPE&APP_TO_LAUNCH=A_ZEN2WDF_CMENU_SELFUNCTIONS"
Get_Scenario("Execute_on_IE")
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION : 0BC_VEND1__0BC_EVAL")) 
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION : 0BC_VEND1__0BC_HOM"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("1"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("_004"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection_Full").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION : 0BC_VEND1__0BC_HOM_2"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION : 0BC_VEND1__0BC_EVAL")) 
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION : 0BC_VEND1__0BC_HOM_3"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_COUNT"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION : 0BC_VEND1__0BC_HOM_3"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("191"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_Selection").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_EVAL"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_SelectionType"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_SelectionType").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION"))
wait 2
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1__0BC_HOME"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_SelectionType"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_SelectionType").Click
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("DIMENSION"))
wait 2
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_COUNT"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_SelectionType"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Get_SelectionType").Click
wait 2
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("MEMBER"))
Get_Scenario("Close_IE_Browser")




