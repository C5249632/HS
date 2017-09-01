Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AdsTOmhNHH1NlDiDIj0..vk&APP_TO_LAUNCH=A_FILTERBAR_APPLICATION"
Get_Scenario("Execute_on_IE")
wait 9
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Calender day varSelect"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Calender day varSelect").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Calender Day datepicker"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Calender Day datepicker").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("21"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("21").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("OK"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("OK").Click

