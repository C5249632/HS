Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=Ad2uF8JFTKNJiPDmY.JwUCA&APP_TO_LAUNCH=A_ZEN2WDF_CMENU_RECALCULATE"
Get_Scenario("Execute_on_IE")
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow"),"70,000.000")
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow").Click
wait 2
Sendkey("600")
wait 2
Sendkey("{DOWN}")
wait 2
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow"),"600.000")
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Inputenabled_3rdrow"),"70,000.000")
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Recalculate"))
wait 2
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Recalculate").Click
wait 2
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow"),"600.000")
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Inputenabled_3rdrow"),"600.000")
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Reset"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Reset").Click
wait 2
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow"),"70,000.000")
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow").Click
wait 2
Sendkey("600")
wait 2
Sendkey("{DOWN}")
wait 2
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("InputEnabled_Resultrow"),"600.000")
Call Given_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Inputenabled_3rdrow"),"70,000.000")


