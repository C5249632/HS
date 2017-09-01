Environment.Value("doc_name")="0_CF"
Environment.Value("app_name")="A_0_CF"
Get_Scenario("Launch_LD")
Get_Scenario("Open_Application")
wait 90						'will require more wait time
Call Delete_Component("Technical Components","CONDITIONAL_FORMATTING_SETTINGS")
wait 5
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Activate "A_0_CF"
Sendkey("^z")
JavaWindow("SAP BusinessObjects").JavaTree("Tree").Select "A_0_CF;Technical Components;CONDITIONAL_FORMATTING_SETTINGS"
JavaWindow("SAP BusinessObjects").JavaTree("Tree_1").Activate "Display;Rules"
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



 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf4.xml_;_

 @@ hightlight id_;_450516537_;_script infofile_;_ZIP::ssf1.xml_;_
 @@ hightlight id_;_1917610867_;_script infofile_;_ZIP::ssf2.xml_;_



