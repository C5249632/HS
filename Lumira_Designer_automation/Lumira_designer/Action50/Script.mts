Environment.Value("document_path")="http://mo-31db59c87.mo.sap.corp:8080/BOE/OpenDocument/opendoc/openDocument.jsp?sIDType=CUID&iDocID=AX_Rspkl9LFLkKimRP8lWWE&APP_TO_LAUNCH=A_ZEN2WDF_SINGLECELL_SELECTION"
Get_Scenario("Execute_on_IE")
wait 9
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_VEND1").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1 : Type: DIMENSION"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_BUY1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_BUY1").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("0BC_VEND1 : 0BC_BUY1 :"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_ORDW"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("0BC_ORDW").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("4HRRB486CE57DGS89PZ5MHPAV"))
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("Pio_Selection1"))
Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebTable("Pio_Selection1").Click
wait 2
Check_Object_Exist(Browser("IE Browser").Page("IE Frame").Frame("openDocChildFrame").WebElement("pio_4HRRB486CE57DGS89PZ5MHPAV"))
Get_Scenario("Close_IE_Browser")

