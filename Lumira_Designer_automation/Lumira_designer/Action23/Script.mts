Environment.Value("document_path")="http://BOESERVER.pgdev.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AZaGh2XZOshBuVpH1bEFrNg&APP_TO_LAUNCH=TRIGGER_RECALCULATE_CMENU"
Get_Scenario("Execute_on_IE")
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2005").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2005"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Row"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Row").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Item Locked"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("ASIA_2").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("ASIA_2"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Row"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Row").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Item Locked_2"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Order Weight"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Column"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Column").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Coloumn Locked"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Price"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Column"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Column").Click
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Coloumn Locked_2"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Order Weight"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Unlock Column"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Unlock Column").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Coloumn Unlocked"))
wait 2
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Price"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Swap Axes"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Swap Axes").Click
wait 3
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Unit of Measure"))
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Price"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Undo Previous Step"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Undo Previous Step").Click
wait 3
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Row Unlocked"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2005").Click
Context_Menu(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("2005"))
Check_Text_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Row"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Lock Row").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("Item Locked"))
Get_Scenario("Close_IE_Browser")




