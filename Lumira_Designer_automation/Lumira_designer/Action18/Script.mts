Environment.Value("doc_name")="A_ZEN2WDF_COND_FORMATTING"
Environment.Value("app_name")="A_ZEN2WDF_COND_FORMATTING"
Get_Scenario("Launch_LD")
Get_Scenario("Open_Application")
wait 90						'will require more wait time
Call Delete_Component("Technical Components","CONDITIONAL_FORMATTING_SETTINGS")
wait 5
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "A_ZEN2WDF_COND_FORMATTING"
Sendkey("^z")
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Select "A_ZEN2WDF_COND_FORMATTING;Technical Components;CONDITIONAL_FORMATTING_SETTINGS"
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "Display;Rules"
wait 6
JavaWindow("SAP BusinessObjects").JavaWindow("Conditional Formatting").JavaObject("ZenBrowser").highlight
wait 4
Sendkey("{ENTER}")
wait 4
Sendkey("TESTER")
wait 4
Sendkey("{TAB}")
wait 4
Sendkey("{TAB}")
wait 4
Sendkey("Count")
wait 4
Sendkey("{TAB}")
wait 4
Sendkey("greater than or equal to")
wait 4
Sendkey("{TAB}")
wait 4
Sendkey("5")
wait 4
Sendkey("{TAB}")
wait 4
Sendkey(" ")
wait 4
Sendkey("{TAB 8}")
wait 4
Sendkey(" ")
wait 4
Sendkey("{TAB 10}")
wait 4
Sendkey("{ENTER}")
wait 4
Sendkey("{TAB 6}")
wait 4
Sendkey("{ENTER}")










