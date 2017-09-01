
'Add_cross_tab
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaTree("Tree").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaTree("Tree").OpenContextMenu "NEW_TEST01;Layout"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaMenu("Create").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaMenu("Create").JavaMenu("Table Components").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaMenu("Create").JavaMenu("Table Components").JavaMenu("Crosstab").Select

'Add chart item







'Add data source

JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaTree("Tree").Select "NEW_TEST01;Data Sources"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaTree("Tree").OpenContextMenu "NEW_TEST01;Data Sources"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaMenu("Add Data Source...").Select
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaButton("Browse...").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Connection").JavaButton("Browse Connections...").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Connection_2").JavaTree("Tree").Select "Q93"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Connection_2").JavaButton("OK").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaStaticText("Connection is active(st)").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaButton("Browse..._2").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaTab("TabFolder").Select "Search"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaEdit("Search for:").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaEdit("Search for:").Set "0PIOVC_QRY005"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaButton("Search").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaButton("Search").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaButton("OK").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaEdit("Connection is active").Set "0PIOVC_QRY005"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaButton("OK").Click

'Execute it on web

JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaToolbar("ToolBar").Press "Execute Locally (Ctrl+F11)"

'Web check

'''''''''''''''''''''''''''''''''
JavaWindow("SAP BusinessObjects Lumira").JavaTree("Tree").OpenContextMenu "BI Platform Documents [10.208.197.66];test_01"
JavaWindow("SAP BusinessObjects Lumira").JavaMenu("Create Application...").Select
JavaWindow("SAP BusinessObjects Lumira").JavaWindow("New Application").JavaEdit("Application Name").Set "NEW_TEST01"
JavaWindow("SAP BusinessObjects Lumira").JavaWindow("New Application").JavaButton("Create").Click
add_crosstab
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaTree("Tree").Select "NEW_TEST01;Data Sources"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaTree("Tree").OpenContextMenu "NEW_TEST01;Data Sources"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaMenu("Add Data Source...").Select
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaButton("Browse...").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Connection").JavaButton("Browse Connections...").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Connection_2").JavaTree("Tree").Select "Q93"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Connection_2").JavaButton("OK").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaStaticText("Connection is active(st)").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaButton("Browse..._2").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaTab("TabFolder").Select "Search"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaEdit("Search for:").highlight
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaEdit("Search for:").Set "0PIOVC_QRY005"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaButton("Search").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaWindow("Select Data Source").JavaButton("OK").Click
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaEdit("Connection is active").Set "0PIOVC_QRY005"
JavaWindow("NEW_TEST01 - SAP BusinessObjec").JavaWindow("Add Data Source").JavaButton("OK").Click







