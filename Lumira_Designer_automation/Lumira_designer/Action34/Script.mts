Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AQIH.xjp.URPlnDbmYRxqLg&APP_TO_LAUNCH=A_ZEN2WDF_SHAPE"
Get_Scenario("Execute_on_IE")
Check_Object_Doesnt_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Shape"))
Check_Button_Enabled(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_property"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").SAPUIButton("Set_property").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Shape"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Shape").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("The CSS class is: class1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("The Fillcolor is : #8080FF"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("The linecolor is : #80FF00"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("The linewidth is : 20"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("The tooltip is : chemical1"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("The url is : data:image/svg+xm"))
Get_Scenario("Close_IE_Browser")


