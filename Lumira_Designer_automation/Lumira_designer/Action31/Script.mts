'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''A_ZEN2WDF_UPLOAD_DOWNLOAD_LUM''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Open the document UPLOAD1 in local document
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaTree("Tree_2"))
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "Local Documents;Upload1"
JavaWindow("SAP BusinessObjects").JavaMenu("Open").Select
wait 22

'Open the document UPLOAD2 in local document
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "Local Documents;Upload2"
JavaWindow("SAP BusinessObjects").JavaMenu("Open").Select
wait 22

'Invoke context menu on “Upload1” and select “Upload to BI Platform”
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "Local Documents;Upload1"
JavaWindow("SAP BusinessObjects").JavaMenu("Upload to BI Platform").Select
JavaWindow("SAP BusinessObjects").JavaWindow("Upload Document").JavaEdit("Name:").Set "Upload1"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Upload Document").JavaButton("Create_1"))
JavaWindow("SAP BusinessObjects").JavaWindow("Upload Document").JavaButton("Create_1").Click
wait 20

'Fill the required details and Click on “OK”
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Exchange Data Sources").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Exchange Data Sources").JavaButton("OK").Click

'Now, invoke context menu on “Upload2” and select “Upload to BI Platform”

JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "Local Documents;Upload2"
JavaWindow("SAP BusinessObjects").JavaMenu("Upload to BI Platform").Select
wait 12

'It gives an error pop up
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Upload Not Supported").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Upload Not Supported").JavaButton("OK").Click

wait 20

'Remove Upload 1 from server 
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").Select "BI Platform Documents [10.97.152.171];Upload1"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "BI Platform Documents [10.97.152.171];Upload1"
JavaWindow("SAP BusinessObjects").JavaMenu("Delete from BI Platform").Select
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Confirm Deletion").JavaButton("Delete"))
JavaWindow("SAP BusinessObjects").JavaWindow("Confirm Deletion").JavaButton("Delete").Click

'Check for the same error should occur
JavaWindow("SAP BusinessObjects").JavaTree("Tree_2").OpenContextMenu "Local Documents;Upload2"
JavaWindow("SAP BusinessObjects").JavaMenu("Upload to BI Platform").Select
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Upload Not Supported").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Upload Not Supported").JavaButton("OK").Click

'Close LD
Get_Scenario("Close_LD_Without_Changes")

