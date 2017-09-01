'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''A_ZEN2WDF_PREVENT_SAVEAS_COMMN'''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Lunch the Lumira Designer 
Get_Scenario("Launch_LD")

'Open the document in Local mode
JavaWindow("SAP BusinessObjects").JavaMenu("Tools").JavaMenu("Preferences").Select
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaList("Preferred Startup Mode:"))
JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaList("Preferred Startup Mode:").Select "Local Mode (Legacy)"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaButton("OK").Click
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaWindow("Startup Mode Changed"))
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaWindow("Startup Mode Changed").JavaButton("Restart"))
JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaWindow("Startup Mode Changed").JavaButton("Restart").Click

wait 90

'Import the application “SAP_UI5_COMMONS”
JavaWindow("SAP BusinessObjects Lumira").JavaTab("CTabFolder").CloseTab "Welcome"
wait 5
JavaWindow("SAP BusinessObjects Lumira").JavaMenu("Application").JavaMenu("Open...").Select
wait 5
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Open Application").JavaEdit("Text"))
JavaWindow("SAP BusinessObjects").JavaWindow("Open Application").JavaEdit("Text").Set "A_SAP_UI5_COMMONS"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Open Application").JavaButton("Open"))
JavaWindow("SAP BusinessObjects").JavaWindow("Open Application").JavaButton("Open").Click

wait 9
'The legacy application warning message appears but the application opens successfully without any issue.
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Legacy Application"))
JavaWindow("SAP BusinessObjects").JavaWindow("Legacy Application").Close

wait 20
'Check The properties of the application shows that it is in commons mode.
Call Check_Property_Value("Display","SAPUI5 m Mode","false")
wait 12

'Under Tools, the option migrate to SAP UI5 option is available.

JavaWindow("SAP BusinessObjects").JavaMenu("Tools").JavaMenu("Migrate to SAPUI5 m Mode").Select

'Application migrated the application to SAP UI5 m mode.
Call Check_Property_Value("Display","SAPUI5 m Mode","true")
wait 12


Get_Scenario("Close_LD_After_Changes")

wait 30
'Lunch the Lumira Designer 
systemUtil.Run "C:\Program Files\SAP BusinessObjects Lumira\Lumira Designer\SapLumiraDesigner.exe"
                wait 15
JavaWindow("SAP BusinessObjects Lumira").JavaTab("CTabFolder").CloseTab "Welcome"


'Change the mode to SAP BusinessObjects Lumira Documents 
JavaWindow("SAP BusinessObjects").JavaMenu("Tools").JavaMenu("Preferences").Select
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaList("Preferred Startup Mode:"))
JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaList("Preferred Startup Mode:").Select "SAP BusinessObjects Lumira Documents"
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaButton("OK"))
JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaButton("OK").Click
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaWindow("Startup Mode Changed"))
Check_Object_Exist(JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaWindow("Startup Mode Changed").JavaButton("Restart"))
JavaWindow("SAP BusinessObjects").JavaWindow("Preferences").JavaWindow("Startup Mode Changed").JavaButton("Restart").Click

wait 40

Check_Object_Exist(JavaWindow("SAP").JavaWindow("Login_page"))

JavaWindow("SAP").JavaWindow("Login_page").Close

