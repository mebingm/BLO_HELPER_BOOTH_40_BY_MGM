const rawCSVText = `Serial,Name,English Name,Relative Name,House No,House Name,English House Name,Sex,ID Card,Status
1,ആൻറണി സി ജെ,Antony C J,ജോസഫ്,3/5,ചാമക്കാലായിൽ,Chamakkalayil,പുരുഷൻ,KNB0981530,Active
2,ഡെനിൽ ജോർജ് വിൽസൻ,Denil George Wilson,വിൽസൻ പി ജോർജ്,4/250,പനവേലിൽ പാലയ്ക്കൽ,Panavelil Palackal,പുരുഷൻ,SIR0865808,Active
3,ജിൻസി ജെയ്‌സൺ,Jincy Jaison,ജെയ്‌സൺ മാത്യു,06/108,വളയംകുഴിയിൽ,Valayamkuzhiyil,സ്ത്രീ,SIR0937458,Active
4,അജോയ് ജോർജ്ജ്,Ajoy George,ജോർജ്ജ് വർഗ്ഗീസ്,3/13,കോഴികുന്നത്ത്,Kozhikunnathu,പുരുഷൻ,KNB0936500,Active
5,ആകാശ് ഫിലിപ്പ് ചെറിയാൻ,Akash Philip Cherian,ഫിലിപ്പ് ചെറിയാൻ,4/166,ചീരാക്കുന്നേൽ,Cheerakunnel,പുരുഷൻ,SIR0918482,Active
6,രമണൻ ഇ എസ്,Ramanan E S,ദാമോദരൻ ഇ എസ്,3/40എ,ആദിത്യാ,Adithya,പുരുഷൻ,SIR1158898,Active
7,അഭിജിത് കെ,Abhijith K,അനിൽ കുമാർ എം എസ്,6/45,കിഴേപ്ലാക്കൽ,Kizheplakkal,പുരുഷൻ,SIR1703131,Active
8,ശ്രീലത കെ ആർ,Sreelatha K R,സുരേഷ്‌കുമാർ ജി,3/371,ഐശ്വര്യ,Aishwarya,സ്ത്രീ,KNB0936435,Active
9,ഹനീസ പി കെ,Haneesa P K,ഷാജി പി എ,6/101,പത്തകത്തിയ്ക്കൽ,Pathakathickal,സ്ത്രീ,SIR0855254,Active
10,പൊന്നമ്മ സി ഡി,Ponnamma C D,ശ്രീധരൻ പിള്ള,3/368,ശ്രീഭവനം,Sreebhavanam,സ്ത്രീ,SIR0847970,Active
11,സേതുലക്ഷ്മി എൻ എസ്,Sethulakshmi N S,ശശി എം പി,6/64,നെല്ലിക്കാപതാലിൽ,Nellikkapathalil,സ്ത്രീ,SIR0320960,Active
12,ശ്രീദേവി എസ് നായർ,Sreedevi S Nair,സതീശ് നായർ കെ എസ്,03/368,ശ്രീഭവനം,Sreebhavanam,സ്ത്രീ,KNB0823161,Active
13,ദിവ്യ മോഹനൻ,Divya Mohanan,മോഹനൻ കെ എൻ,6/99,കാഞ്ഞിരത്തുങ്കൽ,Kanjirathunkal,സ്ത്രീ,SIR0847947,Active
14,മിനി മോൾ,Mini Mol,ഗോപകുമാർ,3/325,മഠത്തുവേലിക്കകത്ത്,Madathuvelikkakathu,സ്ത്രീ,SIR0525105,Active
15,ജസ്റ്റിൻ ജേക്കബ്,Justin Jacob,ജേക്കബ് ചാക്കോ,3/326,ചവണിക്കാമണ്ണിൽ,Chavanikkamannil,പുരുഷൻ,SIR0855429,Active
16,അനില മോഹൻ,Anila Mohan,മോഹനൻ പിള്ള എം എൻ,,മാപ്രാംപള്ളിൽ,Maprampallil,സ്ത്രീ,SIR1158955,Active
17,സുവിൻ സി എബ്രഹാം,Suvin C Abraham,എബ്രഹാം തോമസ്,6/25,ചൂട്ടുമണ്ണിൽ,Choottumannil,പുരുഷൻ,SIR0850735,Active
18,സൗദാമിനി അമ്മ,Soudamini Amma,ചന്ദ്രശേഖരപിള്ള,3/1,പേവേലിൽ,Pevelil,സ്ത്രീ,SIR0809665,Active
19,ഇ സി മാത്യു,E C Mathew,ചാക്കോ,04/82,ഏരുമേദആയില് ഹാഊസ,Erumedayil House,പുരുഷൻ,KNB0823344,Active
20,ശ്രീലത പി സി,Sreelatha P C,രാജശേഖരൻപിള്ള,3/1,പേവേലിൽ,Pevelil,സ്ത്രീ,JNW0943001,Active
21,രാജേഷ്കുറുപ്പ് എം ജെ,Rajeshkurup M J,ജനാർദ്ദനൻ പിളള,4/92,പാറേപ്രയാറ്റ്,Pareprayat,പുരുഷൻ,KNB0903955,Active
22,ലാൽജി പി സി,Lalji P C,ചന്ദ്രശേഖരപിള്ള,3/1,പേവേലിൽ,Pevelil,പുരുഷൻ,KNB0828285,Active
23,രതീഷ് കുമാർ,Ratheesh Kumar,കൃഷ്ണപിള്ള,06/01,,,പുരുഷൻ,SIR1158609,Active
24,രാജശ്രീ ആർ,Rajasree R,രാജേഷ് കെ സി,,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,JTS1663327,Active
25,അന്നകുട്ടി,Annakutty,വറുഗീസ് കെ വി,06/2104,ചെമ്മരപ്പള്ളിൽ വടക്കേതിൽ,Chemmarapallil Vadakkethil,സ്ത്രീ,SIR0567024,Active
26,ദാനിയേൽ ജോൺ,Daniel John,ജോൺ,3/1146,തൈക്കൂടത്തിൽ,Thaikkoodathil,പുരുഷൻ,KNB0811786,Active
27,വിജയമ്മ പി ആര്,Vijayamma P R,സുകുമാരൻ നായർ,4/666,പുരയിടത്തിൽ,Purayidathil,സ്ത്രീ,SIR0505602,Active
28,സീമ ജയിംസ്,Seema James,ദാനിയേൽ ജോൺ,3/1146,തൈക്കൂടത്തിൽ,Thaikkoodathil,സ്ത്രീ,FPV1604180,Active
29,മിനി പ്രദീപ്,Mini Pradeep,പ്രദീപ് കുമാർ എൻ,4/177,ഇടപുരയിടം,Idapurayidam,സ്ത്രീ,SIR1158534,Active
30,ശ്രീജാ രാജ്,Sreeja Raj,രാജശേഖരൻപിള്ള പി എൻ,3/1,പേവേലിൽ,Pevelil,സ്ത്രീ,KNB1253046,Active
31,നാരായണപ്രകാശ് എൻ,Narayanaprakash N,നാരായണപണിക്കർ പി കെ,3/2,മംഗലത്ത്,Mangalathu,പുരുഷൻ,SIR0192898,Active
32,അനിതാ പണിക്കർ,Anitha Panicker,ഹരിതകുമാർ,4/185,തടത്തിൽ കിഴക്കേതിൽ,Thadathil Kizhakkethil,സ്ത്രീ,KNB0824938,Active
33,ജോർജ് വറുഗീസ്,George Varghese,നൈനാൻ,3/297,മാവിള,Mavila,പുരുഷൻ,SIR0575811,Active
34,മണിയൻ ചെട്ടിയാർ,Maniyan Chettiyar,മാടസ്വാമി,12/565,കളിക്കൽ ഹൗസ്,Kalickal House,പുരുഷൻ,KCW1271279,Active
35,മറിയാമ്മ വർഗീസ്,Mariyamma Varghese,ജോർജ്,3/297,മാവിള,Mavila,സ്ത്രീ,KNB1093137,Active
36,സുശീലമ്മാൾ,Susheelammal,മണിയൻ ചെചട്ടിയാർ,12/565,കളിക്കൽ ഹൗസ്,Kalickal House,സ്ത്രീ,SIR1057082,Active
37,റജീന,Rajeena,വർഗീസ്,3/297,മാവിള,Mavila,സ്ത്രീ,SIR0575852,Active
38,റിനോയി നൈനാൻ വർഗീസ്,Rinoy Ninan Varghese,ജോർജ് വറുഗീസ്,3/297,മാവിള,Mavila,പുരുഷൻ,SIR0459933,Active
39,അന്നമ്മ,Annamma,ആന്റണി,3/5,ചാമക്കാലായിൽ,Chamakkalayil,സ്ത്രീ,SIR0651513,Active
40,തോമസ് ആന്റണി,Thomas Antony,ആന്റണി സി ജെ,3/428,ചാമക്കാലായിൽ,Chamakkalayil,പുരുഷൻ,SIR1158278,Active
41,ശോശാമ്മ,Sosamma,ചെറിയാൻ,3/7,മാവിള,Mavila,സ്ത്രീ,SIR1157940,Active
42,നിനസൂസൻ ചെറിയാൻ,Ninasusan Cherian,ചെറിയാൻ,3/7,മാവിളവീട്,Mavilaveedu,സ്ത്രീ,KNB0981589,Active
43,ഏലിയാമ്മ,Eliyamma,ജോസഫ്,3/8,ചക്കാലയിൽ,Chakkalayil,സ്ത്രീ,SIR1633957,Active
44,റെജി,Reji,ജോസഫ്,3/8,ചക്കാലയിൽ,Chakkalayil,പുരുഷൻ,SIR1157957,Active
45,ജിതിൻ റെജി ജോസഫ്,Jithin Reji Joseph,റെജി ജോസഫ്,5/8,ചക്കാലയിൽ,Chakkalayil,പുരുഷൻ,KNB0959759,Active
46,കുര്യൻ വർഗീസ്,Kurian Varghese,ലിഗി മാത്യു,01/473,പാറശ്ശേരിൽ ഹൗസ്,Parasseril House,പുരുഷൻ,KNB1153790,Active
47,മിഥുൻ റെജി വർഗീസ്,Mithun Reji Varghese,റെജി ജോസഫ്,3/10,ചക്കാലയിൽ,Chakkalayil,പുരുഷൻ,SIR0125781,Active
48,ബാബു കെ കെ,Babu K K,സരോജനി,4/9,കോയിക്കൽകുന്നുംപുറത്ത്,Koikkalkunnumpurathu,പുരുഷൻ,SIR0301267,Active
49,ലിഗി മാത്യു,Ligi Mathew,കുര്യൻ വർഗീസ്,01/473,പാറശ്ശേരിൽ ഹൗസ്,Parasseril House,സ്ത്രീ,SIR1633981,Active
50,ഓമന കെ എസ്സ്,Omana K S,ബാബു കെ കെ,4/9,കോയിക്കൽകുന്നുംപുറത്ത്,Koikkalkunnumpurathu,സ്ത്രീ,SIR0301259,Active
51,ആതിര പ്രസാദ്,Athira Prasad,പ്രസാദ് പി ആര്,,മോടയിൽ ആതിരഭവൻ,Modayil Athirabhavan,സ്ത്രീ,SIR1636398,Active
52,ആനി മാത്യു,Ani Mathew,അജോയ് ജോർജ്,4/405,കോഴിക്കുന്നത്ത്,Kozhikunnathu,സ്ത്രീ,SIR0931162,Active
53,അനിലാ,Anila,ഹാരിസ് വി സി,3/13,കോഴികുന്നത്ത്,Kozhikunnathu,സ്ത്രീ,KNB0936443,Active
54,സോണാലി സൂസൻ ജോർജ്ജ്,Sonali Susan George,അജോയ് ജോർജ്ജ്,4/405,കോഴിക്കുന്നത്ത്,Kozhikunnathu,സ്ത്രീ,SIR0931766,Active
55,തങ്കമണി,Thankamani,തങ്കപ്പൻ പിള്ള,3/14,വത്സലാഭവനം,Valsalabhavanam,സ്ത്രീ,SIR1158468,Active
56,ബീറ്റാ മോഹൻ,Beeta Mohan,മോഹനൻ ടി കെ,4/225,തോപ്പിൽ,Thoppil,സ്ത്രീ,SIR1649086,Active
57,ഉഷ കുമാരി,Usha Kumari,സോമനാഥൻ പിള്ളൈ,5/467,ഉഷസ്,Ushas,സ്ത്രീ,SIR1652312,Active
58,രാജീവ്,Rajeev,റ്റി എൻ തങ്കപ്പൻ,3/14,വത്സലാഭവനം,Valsalabhavanam,പുരുഷൻ,SIR1158476,Active
59,ജലജമ്മ എൻ എസ്,Jalajamma N S,രാജീവ് വി റ്റി,4/227,സൂര്യ നിവാസ്,Surya Nivas,സ്ത്രീ,KNB1076199,Active
60,അജേഷ് എസ് നായർ,Ajesh S Nair,സോമനാഥൻ പിള്ളൈ,05/467,ഉഷസ്,Ushas,പുരുഷൻ,SIR1652320,Active
61,സുശീലൻ നായർ,Susheelan Nair,ദാമോദരൻ നായർ,,പദ്‌മാവിഹാർ,Padmavihar,പുരുഷൻ,MTV1194000,Active
62,സോമനാഥൻ പിള്ളൈ,Somanathan Pillai,കൃഷ്‌നനാഥൻ പിള്ളൈ,05/467,ഉഷസ്,Ushas,പുരുഷൻ,SIR1652510,Active
63,പത്മാവതി അമ്മ,Padmavathi Amma,സുശീലൻ നായർ,,പദ്‌മവിഹാർ,Padmavihar,സ്ത്രീ,MTV1289461,Active
64,പൂജ എസ് നായർ,Pooja S Nair,സുശീലൻ നായർ പി,3/12,പത്മവിഹാർ,Padmavihar,സ്ത്രീ,MTV1497551,Active
65,ലത അരുൺ,Latha Arun,അരുൺ പിള്ള,,തടത്തിൽ കിഴക്കേതിൽ,Thadathil Kizhakkethil,സ്ത്രീ,SIR1656081,Active
66,വിശാഖ് വി നായർ,Visakh V Nair,വിശ്വനാഥൻനായർ കെ,3/480,കരിയംപുരയ്ക്കൽ,Kariyampurakkal,പുരുഷൻ,SIR1665843,Active
67,ഷേർ‌ലി,Sherly,ജോർജ്,3/304,കോഴികുന്നത്ത്,Kozhikunnathu,സ്ത്രീ,SIR0573592,Active
68,പ്രയ്‌സ്തോമസ്,Praise Thomas,തോമസ് വർഗീസ്,197,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR0192070,Active
69,മാത്യൂസ് മാർ സെറാഫിം,Mathews Mar Seraphim,ചാണ്ടി,,കിഴക്കേചെറുപാലത്തിൽ,Kizhakkacherupalathil,പുരുഷൻ,SIR1670009,Active
70,ആതിര ഏ നായർ,Athira A Nair,അനിൽ കുമാർ എം ജി,03/892,പന്നിയ്ക്കുമണ്ണിൽ,Pannickumannil,സ്ത്രീ,SIR1679786,Active
71,റ്റിന ആനി,Tina Annie,ജോർജ്ജ്,3/304,കോഴിക്കുന്നത്ത്,Kozhikunnathu,സ്ത്രീ,KNB0963397,Active
72,ലിൻസി മാത്യു,Lincy Mathew,ലീലാമ്മ മാത്യു,,കോല്ലഥഓട്ടാഫീല്,Kollathottafil,സ്ത്രീ,SIR1684281,Active
73,അപർണ വിനോദ്,Aparna Vinod,വിനോദ് കുമാർ ടി ദ്,,തേക്കേകുതു ഹാഊസ,Thekkekuthu House,സ്ത്രീ,SIR1685320,Active
74,മന്ന സൂസൻ ജോർജ്,Manna Susan George,ജോർജ്‌കുട്ടി ജോസഫ്,3/17,കോഴികുന്നത്ത് ജ്യോതിവില്ല,Kozhikunnathu Jyothivilla,സ്ത്രീ,KNB1171867,Active
75,വിന്നി മറിയം ജോർജ്,Vinny Mariyam George,ജോർജ്കുട്ടി ജോസഫ്,3/17,കോഴികുന്നത്ത് ജ്യോതിവില്ല,Kozhikunnathu Jyothivilla,സ്ത്രീ,KNB1252725,Active
76,ഡോണൽ ചാക്കോ വിൽസൺ,Donal Chacko Wilson,വിൽസൺ പി ജോർജ്ജ്,,പനവ്ഏലിൽ പാലക്കല് ഹാഊസ,Panavelil Palackal House,പുരുഷൻ,SIR1688506,Active
77,സാറാമ്മ,Saramma,കുര്യൻ,3/24,പുതിയടത്ത്,Puthiyadathu,സ്ത്രീ,SIR1158401,Active
78,ബിൻറാ മറിയം തോമസ്,Binta Mariyam Thomas,തോമസ് പി ടി,,പ്ലാച്ചിറപടിഞ്ഞാറേതില്,Plachirapadinjarethil,സ്ത്രീ,SIR1691112,Active
79,ഉഷ,Usha,കുര്യൻ,3/24,പുതിയടത്ത്,Puthiyadathu,സ്ത്രീ,KNB1075548,Active
80,റിയ മേരി ജോസഫ്,Riya Mary Joseph,ജോസഫ് വറുഗീസ്,04/307,കുളത്തുങ്കൽ വീട്,Kulathunkal Veedu,സ്ത്രീ,SIR1691435,Active
81,മിനി സുരേന്ദ്രൻ,Mini Surendran,സന്തോഷ് കുമാർ,4/31,മാടപ്പാട്ട് പതിരുവേലിൽ,Madappattu Pathiruvelil,സ്ത്രീ,SIR0302299,Active
82,കെ പി പ്രസാദ്,K P Prasad,പൊന്നപ്പൻ പിള്ള,3/32,കുടത്തുങ്കൽ,Kudathunkal,പുരുഷൻ,SIR1158138,Active
83,ഓമന,Omana,പ്രസാദ്,4/472,കൂടത്തുങ്കൽ,Koodathunkal,സ്ത്രീ,SIR0707893,Active
84,പ്രമോദ് കെ പി,Pramod K P,ലഷ്ടിക്കുട്ടിയമ്മ,4/472,കുടത്തുങ്കൽ,Kudathunkal,പുരുഷൻ,KNB0973990,Active
85,ജിനോ കെ തോമസ്,Jino K Thomas,തോമസ് കെ ഉമ്മൻ,,കനിയനഠാര ഹാഊസ,Kaniyanathara House,പുരുഷൻ,XYH1070846,Active
86,രാജിമോൾ ആർ,Rajimol R,പ്രമോദ് കെ പി,5/32,കൂടത്തിങ്കൽ,Koodathinkal,സ്ത്രീ,SIR0493981,Active
87,ഷീജ ഈപ്പൻ,Sheeja Eapen,പി കെ ഈപ്പൻ,03/77-എ,പുളിഞ്ചിമുട്ടിൽ ഹൗസ്,Pulinjimootil House,സ്ത്രീ,KNB1269216,Active
88,പ്രശാന്ത് കെ പി,Prasanth K P,പ്രസാദ് കെ പി,4/472,കൂടത്തിങ്കൽ,Koodathinkal,പുരുഷൻ,SIR0707265,Active
89,അമ്മിണി,Ammini,ചാക്കോ,4/250,പനവേലിൽപാലക്കൽ,Panavelilpalackal,സ്ത്രീ,SIR1714070,Active
90,റേച്ചൽ,Rachel,ചാക്കോ,4/250,പനവേലിൽപാലക്കൽ,Panavelilpalackal,സ്ത്രീ,KNB0963462,Active
91,ഗീതമ്മ സി വി,Geethamma C V,രമണൻ ഇ എസ്,3/40എ,ആദിത്യ,Adithya,സ്ത്രീ,SIR0300798,Active
92,രോഹിത് ഇ രമണൻ,Rohit E Ramanan,രമണൻ ഇ എസ്,3/66എ,ആദിത്യാ,Adithya,പുരുഷൻ,KNB0966499,Active
93,രഞ്ജു ഇ രമണൻ,Ranju E Ramanan,രമണൻ ഇ എസ്,5/40എ,ആദിത്യാ,Adithya,പുരുഷൻ,SIR0417469,Active
94,രഞ്ജീഷ് ഇ രമണൻ,Ranjish E Ramanan,രമണൻ ഇ എസ്,3/420,ആദിത്യാ,Adithya,പുരുഷൻ,SIR0873372,Active
95,മാത്തുകുട്ടി പി ഐ,Mathukutty P I,ഇടിക്കുള ഫിലിപ്പോസ്,4/9,പഴയിടാത്ത്,Pazhayidathu,പുരുഷൻ,SIR0875732,Active
96,റേച്ചൽ മാത്യൂ,Rachel Mathew,മാത്തുക്കുട്ടി പി,3/44,പഴയിടത്ത്,Pazhayidathu,സ്ത്രീ,KNB0825752,Active
97,അമ്മുക്കുട്ടിയമ്മ,Ammukkuttiyamma,ഉണ്ണികൃഷ്ണൻ,3/892,പണിക്കാമണ്ണിൽ,Panickamannil,സ്ത്രീ,SIR0707570,Active
98,ലീലാമണി,Leelamani,ശശിധരൻ പിള്ള,3/892,പണിക്കാമണ്ണിൽ,Panickamannil,സ്ത്രീ,SIR0707596,Active
99,രാജേഷ് കുമാർ,Rajesh Kumar,ശശിധരൻ പിള്ള,3/45,പന്നിക്കമണ്ണിൽ,Pannickamannil,പുരുഷൻ,SIR1158112,Active
100,രാജി,Raji,ശശിധരൻ,3/892,പണിക്കമണ്ണിൽ,Panickamannil,സ്ത്രീ,SIR0127522,Active
101,രാജഗോപാലപിള്ള,Rajagopalapillai,ഭാസ്ക്കരപിള്ള,3/48,കൂടത്തിങ്കൽ,Koodathinkal,പുരുഷൻ,SIR1158120,Active
102,ശ്യാമളകുമാരി,Shyamalakumari,രാജഗോപാൽ,3/48,കൂടത്തിങ്കൽ,Koodathinkal,സ്ത്രീ,SIR0533596,Active
103,അജയകുമാർ കെ ആർ,Ajayakumar K R,രാജഗോപാലപിള്ള കെ,8/67,കൂടത്തിങ്കൽ,Koodathinkal,പുരുഷൻ,SIR0005918,Active
104,സുരേഷ്‌കുമാർ ജി,Sureshkumar G,ഗോപാലപണിക്കർ,3/50ബി,ഐശ്വര്യ,Aishwarya,പുരുഷൻ,SIR0004846,Active
105,സച്ചിൻ എസ്,Sachin S,സുരേഷ് കുമാർ ജി,3/61,ഐശ്വര്യ,Aishwarya,പുരുഷൻ,SIR1158260,Active
106,ആദർശ് എസ് നായർ,Adarsh S Nair,സതീഷ് നായർ കെ എസ്,5/62,ശ്രീഭവനം,Sreebhavanam,പുരുഷൻ,SIR0394007,Active
107,സംഗീത എസ്,Sangeetha S,ശ്രീലത കെ ആർ,3/50,ഐശ്വര്യ,Aishwarya,സ്ത്രീ,SIR0393991,Active
108,മേരിക്കുട്ടി,Marykutty,നൈനാൻ,3/51,മാവിള,Mavila,സ്ത്രീ,SIR0533562,Active
109,രാജൻപിള്ള,Rajanpillai,നാണുപിള്ള,3/48,കുമ്പളത്ത്,Kumbalathu,പുരുഷൻ,SIR0525048,Active
110,ജഗദമ്മ,Jagadamma,രാജൻ പിള്ള,3/48,കുമ്പളത്ത്,Kumbalathu,സ്ത്രീ,KNB0823831,Active
111,സത്യമ്മ കെ എൻ,Sathyamma K N,സോമരാജൻ നായർ,5/131 എ,കുംമ്പളത്ത്,Kumbalathu,സ്ത്രീ,SIR0128520,Active
112,രാജീവ് കെ ആർ,Rajeev K R,രാജൻ പിള്ള കെ എൻ,3/52,കുമ്പളത്ത്,Kumbalathu,പുരുഷൻ,KNB0823047,Active
113,രശ്മി രാമചന്ദ്രൻ,Rashmi Ramachandran,രാജീവ് കെ ആർ,3/48,കുമ്പളത്ത്,Kumbalathu,സ്ത്രീ,JNW1288091,Active
114,ബാലഗോപാലാപിള്ള കെ ആർ,Balagopalapillai K R,രാമചന്ദ്ര പണിക്കർ,3/314,പൗർണ്ണമി,Pournami,പുരുഷൻ,SIR0865873,Active
115,അജിത ബാലഗോപാൽ,Ajitha Balagopal,ബാലഗോപാൽ,3/53,പൌർണ്ണമി,Pournami,സ്ത്രീ,SIR1158351,Active
116,ശ്രീറാം ബി,Sreeram B,അജിത ബാലഗോപാൽ,3/53,പൗർണ്ണമി,Pournami,പുരുഷൻ,SIR0269654,Active
117,ശ്രീനാഥ് ബി,Sreenath B,ബാലഗോപാൽ കെ ആർ,3/49,പൗർണ്ണമി,Pournami,പുരുഷൻ,SIR0348672,Active
118,രാധാകൃഷണൻ വി എസ്സ്,Radhakrishnan V S,പരമേശ്വരൻ നായർ,3/370,ഐശ്വര്യ ഹൗസ്,Aishwarya House,പുരുഷൻ,BQY1574243,Active
119,സുഗതമ്മ കെ ആർ,Sugathamma K R,രാധാകൃഷ്ണൻ വി എസ്,3/370,ഐശ്വര്യ വീട്,Aishwarya Veedu,സ്ത്രീ,ZCB0941500,Active
120,ശ്രീജിത്ത് നായർ,Sreejith Nair,രാധാകൃഷ്ണൻ വി എസ്,3/370,ഐശ്വര്യ വീട്,Aishwarya Veedu,പുരുഷൻ,ZCB0941518,Active
121,സതീശൻ പിള്ള കെ ആർ,Satheesan Pillai K R,രാമചന്ദ്രപണിക്കർ പി ആർ,371,ഐശ്വര്യ,Aishwarya,പുരുഷൻ,KNB1286004,Active
122,കെ സി ചെറിയാൻ,K C Cherian,ചാക്കോ,,കുന്നത്ത്,Kunnathu,പുരുഷൻ,SIR1158153,Active
123,സുസമ്മ,Susamma,ചെറിയാൻ,3/56,കുന്നത്ത്,Kunnathu,സ്ത്രീ,SIR1158161,Active
124,രാജൻ കെ ചെറിയാൻ,Rajan K Cherian,ചെറിയാൻ കെ സി,2/905,കുന്നത്ത് ന്യൂ ഹൗസ്,Kunnathu New House,പുരുഷൻ,NMT0053991,Active
125,ജോളി ചെറിയാൻ,Joly Cherian,രാജൻ കെ ചെറിയാൻ,2/905,കുന്നത്ത് ന്യൂ ഹൗസ്,Kunnathu New House,സ്ത്രീ,NMT0054007,Active
126,ക്രിസ്റ്റി,Christy,ചെറിയാൻ,3/56,കുന്നത്ത്,Kunnathu,പുരുഷൻ,SIR1158187,Active
127,ഷീബാ,Sheeba,ക്രിസ്റ്റി,3/56,കുന്നത്ത്,Kunnathu,സ്ത്രീ,SIR1158203,Active
128,സന്തോഷ്,Santhosh,ചെറിയാൻ,3/56,കുന്നത്ത്,Kunnathu,പുരുഷൻ,FXC2441681,Active
129,ജോർജി ചെറിയാൻ,Georgie Cherian,രാജൻ കെ ചെറിയാൻ,2/905,കുന്നത്ത് ന്യൂ,Kunnathu New,പുരുഷൻ,NMT0054114,Active
130,ജീൻ അന്നാ ചെറിയാൻ,Jean Anna Cherian,രാജൻ കെ ചെറിയാൻ,3/951,കുന്നത്ത് ന്യൂ ഹൗസ്,Kunnathu New House,സ്ത്രീ,SIR1158211,Active
131,ആഷിഷ് ചെറിയാൻ കുന്നത്ത്,Ashish Cherian Kunnathu,സന്തോഷ് സി ചെറിയാൻ,3/346,കുന്നത്ത്,Kunnathu,പുരുഷൻ,SIR0949552,Active
132,ലളിതമ്മ കെ എസ്,Lalithamma K S,ഗോപിനാഥൻ നായർ റ്റി ഇ,5/52,ലളിതാ നിവാസ്,Lalitha Nivas,സ്ത്രീ,SIR0030817,Active
133,ജോൺ കെ എം,John K M,ജോൺ മാത്യു,3/320,ജോസ് വിലാസ്,Jose Vilas,പുരുഷൻ,KNB0823815,Active
134,സൂസൻ ജോൺ,Susan John,ജോൺ,3/58,ജോസ് വിലാസ്,Jose Vilas,സ്ത്രീ,SIR1158013,Active
135,സുജാ ജോർജ്,Suja George,സി റ്റി ജോർജ്,,കൊല്ലാല ജോസ് വിലാസ്,Kollala Jose Vilas,സ്ത്രീ,SIR0575704,Active
136,ഷാലു മാത്യൂസ് ജോൺ,Shalu Mathews John,സുസൻ ജോൺ,3/58,കൊല്ലാല ജോസ് വിലാസ്,Kollala Jose Vilas,പുരുഷൻ,KNB1285519,Active
137,മെറിൻ തെരേസ് ജോൺ,Merin Therese John,ജോൺ കെ എം,3/320,കൊല്ലാല ജോസ് വില്ലാസ്,Kollala Jose Villas,സ്ത്രീ,KNB1285998,Active
138,രൂപക് മാത്യു തോമസ്,Rupak Mathew Thomas,തോമസ് മാത്യു,3/319,കൊല്ലാൽ ജോസ് വിലാസ്,Kollal Jose Vilas,പുരുഷൻ,SIR0876029,Active
139,ശിവരാജൻ ആചാരി,Sivarajan Achari,പരമേശ്വരൻ ആചാരി,3/54,സൗപർണ്ണിക,Sowparnika,പുരുഷൻ,SIR0301648,Active
140,രാഹുൽ എസ്,Rahul S,ശിവരാജൻ പി,5/54എ,സൗപർണ്ണിക,Sowparnika,പുരുഷൻ,KNB1182245,Active
141,ശാന്തമ്മ എൻ നായർ,Shanthamma N Nair,ഉണ്ണികൃഷ്ണൻ നായർ,3/60,പനംപ്ലായിൽ,Pananplayil,സ്ത്രീ,SIR1158344,Active
142,പ്രശാന്ത് യു നായർ,Prashanth U Nair,ഉണ്ണികൃഷ്ണൻ നായർ,3/55,പനംപിലായിൽ,Pananpilayil,പുരുഷൻ,KNB1264852,Active
143,പൊന്നമ്മ,Ponnamma,ശിവരാമൻ നായർ,3/61,കുന്നത്ത്,Kunnathu,സ്ത്രീ,SIR1158179,Active
144,ഗീത ജി നായർ,Geetha G Nair,സുകുമാരൻ നായർ,3/121 എ,ശ്രീ വൈശാഖം,Sree Vaishakham,സ്ത്രീ,SIR0403188,Active
145,വൈശാഖ് എസ് നായർ,Vaishakh S Nair,ഗീത എസ് നായർ,5/121 എ,ശ്രീ വൈശാഖം,Sree Vaishakham,പുരുഷൻ,SIR0393892,Active
146,വൈഷ്ണവി എസ് നായർ,Vaishnavi S Nair,സുകുമാരൻ നായർ കെ,3/121 എ,ശ്രീവൈശാഖം,Sree Vaishakham,സ്ത്രീ,SIR0820258,Active
147,അഭിലാഷ് എസ് നായർ,Abhilash S Nair,സതീഷ് നായർ കെ എസ്,3/368,ശ്രീഭവനം,Sreebhavanam,പുരുഷൻ,SIR0827774,Active
148,ജയശ്രീ ജി പിള്ള,Jayasree G Pillai,മുരളീധരൻ നായർ,10/476,ആഞ്ജനേയം,Anjaneyam,സ്ത്രീ,KNB1037910,Active
149,ഷിജാ വി നായർ,Shija V Nair,മിഥുൻ ലാൽ പി,3/362,പാലമറ്റത്തിൽ,Palamattathil,സ്ത്രീ,SIR0300939,Active
150,ലളിത ബി,Lalitha B,അനിൽകുമാർ ഡി,3/354,വല്യവീട്ടിൽ,Valiyaveettil,സ്ത്രീ,SIR0128371,Active
151,ഗീതാകുമാരി,Geethakumari,മധുസൂദനൻ നായർ,3/64,കവർമഠത്തിൽ,Kavarmadathil,സ്ത്രീ,SIR1158914,Active
152,ശ്രീലക്ഷ്മി പ്രസാദ്,Sreelakshmi Prasad,പ്രസാദ്,3/365,കണ്ടത്തില്ലൂരക്കല്,Kandathillurakkal,സ്ത്രീ,SIR0981316,Active
153,എം മാധവ കൃഷ്ണൻ,M Madhava Krishnan,മധുസുദനൻ നായർ,3/355,കവറുമഠത്തിൽ,Kavarumadathil,പുരുഷൻ,SIR0880757,Active
154,ശ്രീജിത്ത് പ്രസാദ്,Sreejith Prasad,പ്രസാദ്,3/365,കണ്ടത്തില് പുരക്കല്,Kandathil Purakkal,പുരുഷൻ,SIR0981357,Active
155,ജയ,Jaya,സ്റ്റീഫൻ,3/65,മേലേടത്തുബംഗ്ലാവ്,Meledathu Bungalow,സ്ത്രീ,KNB0825885,Active
156,സാൻറി,Santy,സ്റ്റീഫൻ,3/65,മേലേടത്തുബംഗ്ലാവ്,Meledathu Bungalow,പുരുഷൻ,KNB0825877,Active
157,സജനി,Sajani,സ്റ്റിഫൻ,3/65,മേലേടത്തുബംഗ്ലാവ്,Meledathu Bungalow,സ്ത്രീ,KNB1013317,Active
158,ശാന്തമ്മ,Shanthamma,രാധാകൃഷ്ണൻ,3/67,മാത്തിമേലിക്കകത്ത്,Mathimelikkakathu,സ്ത്രീ,KNB1209808,Active
159,രജനി രാധാകൃഷ്ണൻ,Rajani Radhakrishnan,രാധാകൃഷ്ണൻ എം റ്റി,,പുളിക്കൽ ഹൗസ്,Pulickal House,സ്ത്രീ,SIR1158229,Active
160,അമ്മിണിയമ്മ,Amminiyamma,ചന്ദ്രശേഖരപിള്ള,3/325,മഠത്തിവേലിക്കകത്ത്,Madathivelikkakathu,സ്ത്രീ,SIR0533968,Active
161,രത്നമ്മ കെ സി,Rathnamma K C,ചന്ദ്രശേഖരപിള്ള,3/68,മാത്തുവേലിയ്ക്കകത്ത്,Mathuvelikkakathu,സ്ത്രീ,SIR0533539,Active
162,ഗോപകുമാർ,Gopakumar,ചന്ദ്രശേഖരപിള്ള,3/325,മഠത്തിവേലിക്കകത്ത്,Madathivelikkakathu,പുരുഷൻ,SIR0525139,Active
163,ജലജ എസ്,Jalaja S,സുനിൽ കുമാർ കെ എസ്,003/1290,കാടാശ്ശേരിൽ തെക്കുംപ്ലാക്കൽ,Kadasseril Thekkumplakkal,സ്ത്രീ,JPM0884189,Active
164,രമ്യ എസ് നായർ,Ramya S Nair,രത്നമ്മ കെ സി,3/68,മാത്തുവേലിയ്ക്കുകത്ത്,Mathuvelikkakathu,സ്ത്രീ,KNB1209816,Active
165,ഹരികൃഷ്ണ ഗോപൻ,Harikrishna Gopan,ഗോപകുമാർ എം സി,3/325,മടത്തുവേലിക്കകത്ത്,Madathuvelikkakathu,പുരുഷൻ,SIR0981134,Active
166,അമ്മിണി,Ammini,ഭാസ്ക്കരൻ,3/72,നടുവിലേമുറി,Naduvilemuri,സ്ത്രീ,SIR1158328,Active
167,ഉണ്ണികൃഷ്ണൻ നടുവിലേമുറി,Unnikrishnan Naduvilemuri,ഭാസ്ക്കരൻ,3/328,നടുവിലേമുറി,Naduvilemuri,പുരുഷൻ,SIR0573683,Active
168,വിജയകുമാരി,Vijayakumari,ഉണ്ണികൃഷ്ണൻ,3/328,നടുവിലേമുറി,Naduvilemuri,സ്ത്രീ,SIR0573790,Active
169,ദിവ്യാ കൃഷ്ണൻ,Divya Krishnan,ഉണ്ണികൃഷ്ണൻ എൻ ബി,3/328,നടുവിലേമുറിയിൽ,Naduvilemuriyil,സ്ത്രീ,KNB1268648,Active
170,ആര്യാ ഉണ്ണികൃഷ്ണൻ,Arya Unnikrishnan,ഉണ്ണികൃഷ്ണൻ നടുവിലേമുറി,3/328,നടുവിലേമുറി,Naduvilemuri,സ്ത്രീ,SIR0129361,Active
171,ശാന്തമ്മ,Shanthamma,വാസുദേവൻ നായർ,3/73,നടുവിലേമുറിയിൽ,Naduvilemuriyil,സ്ത്രീ,KNB1031988,Active
172,ഉണ്ണികൃഷ്ണൻ,Unnikrishnan,ശാന്തമ്മ,3/73,നടുവിലേമുറിയിൽ,Naduvilemuriyil,പുരുഷൻ,KNB1032952,Active
173,ശ്രീലത കെ കെ,Sreelatha K K,ഉണ്ണികൃഷ്ണൻ വി എസ്,3/73,നടുവിലേമുറിയിൽ,Naduvilemuriyil,സ്ത്രീ,SIR0053488,Active
174,സന്തോഷ് കുമാർ വി എസ്,Santhosh Kumar V S,ശാന്തമ്മ,3/327,നടുവിലേമുറിയിൽ,Naduvilemuriyil,പുരുഷൻ,KNB1033778,Active
175,സുനിൽ റ്റി ചെറിയാൻ,Sunil T Cherian,ചെറിയാൻ,03/330,തേക്കനാൽ ഹൗസ്,Thekkanal House,പുരുഷൻ,SIR1158443,Active
176,ഡെയ്‌സി കെ ജി,Daisy K G,ജോർജ്ജ് കെ സി,3/67,തേക്കനാൽ,Thekkanal,സ്ത്രീ,SIR0244830,Active
177,രത്നമ്മ,Rathnamma,സുകുമാരൻ,3/176,വിപിൻനിവാസ്,Vipin Nivas,സ്ത്രീ,SIR1158484,Active
178,വിപിൻ,Vipin,രത്നമ്മ,3/176,വിപിൻനിവാസ്,Vipin Nivas,പുരുഷൻ,KNB0963108,Active
179,നീതു കുഞ്ഞുമോൻ,Neethu Kunjumon,വിപിൻ എസ് കുമാർ,3/176,വിപിൻ നിവാസ്,Vipin Nivas,സ്ത്രീ,SIR0014753,Active
180,ഏലിയാമ്മ,Eliyamma,ഈപ്പൻ,3/77,പുളിഞ്ചിമൂട്ടിൽ,Pulinjimootil,സ്ത്രീ,SIR1158393,Active
181,മിനി,Mini,ചെറിയാൻ,3/78,തേക്കനാൽ,Thekkanal,സ്ത്രീ,SIR0707414,Active
182,റോസമ്മ,Rosamma,മാത്യു,3/81,താഴത്തുമോടയിൽ,Thazhathumodayil,സ്ത്രീ,SIR1158435,Active
183,തോമസ്,Thomas,മാത്യു,3/81,താഴത്തുമോടയിൽ,Thazhathumodayil,പുരുഷൻ,KNB0879106,Active
184,ചാക്കോ മാത്യു,Chacko Mathew,മാത്യു,3/81,താഴത്തുമോടയിൽ,Thazhathumodayil,പുരുഷൻ,SIR0046144,Active
185,രാധാകൃഷ്ണൻ,Radhakrishnan,കരുണാകരൻ പിള്ള,3/337,മോടിയിൽ,Modiyil,പുരുഷൻ,SIR0533885,Active
186,രമണി പ്രസാദ്,Ramani Prasad,പ്രസാദ്,3/83,മോടയിൽ ആതിരഭവൻ,Modayil Athirabhavan,സ്ത്രീ,SIR0533810,Active
187,പ്രസാദ് കുമാർ,Prasad Kumar,കൃഷ്ണപിള്ള,3/339,മോടയിൽ,Modayil,പുരുഷൻ,KNB1118207,Active
188,മീര,Meera,പ്രസാദ്‌കുമാർ,3/339,മോടയിൽ,Modayil,സ്ത്രീ,KNB1076405,Active
189,കോമളവല്ലിയമ്മ,Komalavalliyamma,ചന്ദ്രശേഖരപിള്ള,3/340,മോടയിൽ,Modayil,സ്ത്രീ,SIR0533778,Active
190,ചന്ദ്രശേഖരപിള്ള,Chandrasekharapillai,കുട്ടൻപിള്ള,3/84എ,മോടയിൽ,Modayil,പുരുഷൻ,SIR1158922,Active
191,റെയ്ച്ചൽ വർഗീസ്,Rachel Varghese,വർഗീസ് സാമുവൽ,08/663,കുരികാട്ടിൽ,Kurikattil,സ്ത്രീ,SIR1740208,Active
192,റെജി വറുഗീസ്,Reji Varghese,കുരുവിള വറുഗീസ്,11/658,പള്ളിക്കൽ,Pallickal,പുരുഷൻ,DVJ1630029,Active
193,റിയ മെറിൻ റെജി,Riya Merin Reji,റെജി വർഗീസ്,,പള്ളിക്കൽ,Pallickal,സ്ത്രീ,SIR1740257,Active
194,റിക്‌സ് ആൻ റെജി,Rics Ann Reji,റജി വറുഗീസ്,,പള്ളിക്കൽ ഹൗസ്,Pallickal House,സ്ത്രീ,SIR1158310,Active
195,ബിബിൻ ചന്ദ്രശേഖരൻ,Bibin Chandrasekharan,ചന്ദ്രശേഖരൻ കെ,3/84 എ,മോടയിൽ,Modayil,പുരുഷൻ,SIR1158294,Active
196,ചന്ദവല്ലിയമ്മ,Chandavalliyamma,ശ്രീകുമാർ,3/86,മോടിയിൽ,Modiyil,സ്ത്രീ,SIR0113340,Active
197,ശ്രീജ എസ് നായർ,Sreeja S Nair,ശ്രീകുമാർ കെ,3/86,മോടയിൽ,Modayil,സ്ത്രീ,SIR1738756,Active
198,ശ്രീകാന്ത് എസ് നായറ്,Sreekanth S Nair,ശ്രീകുമാർ,3/40,മോടയിൽ,Modayil,പുരുഷൻ,SIR0193896,Active
199,രതീശൻ നായർ,Ratheeshan Nair,തങ്കമ്മ,3/88,മോടയിൽ,Modayil,പുരുഷൻ,SIR0412031,Active
200,രാധാമണി,Radhamani,രതീശൻ,3/88,മോടയിൽ,Modayil,സ്ത്രീ,SIR0129155,Active
201,രഞ്ജിഷ് ആർ നായർ,Ranjish R Nair,രതീശൻ നായർ,3/57,മോടയിൽ,Modayil,പുരുഷൻ,SIR1158302,Active
202,രമ്യ ആർ നായർ,Ramya R Nair,രതീശൻ നായർ,3/57,മോടയിൽ,Modayil,സ്ത്രീ,SIR0129098,Active
203,സൌദാമിനിയമ്മ,Saudaminiyamma,നാരായണപിള്ള,3/129,മാപ്രാംപള്ളിൽ,Maprampallil,സ്ത്രീ,SIR1158252,Active
204,മോഹനൻപിള്ള,Mohananpillai,നാരായണപിള്ള,3/130എ,മാമ്പ്രാംപള്ളിൽ,Mambrampallil,പുരുഷൻ,SIR1158948,Active
205,ചിത്രാ മോഹൻ,Chithra Mohan,മോഹനൻപിള്ള എം എൻ,3/118 എ,മാപ്രാംപള്ളിൽ,Maprampallil,സ്ത്രീ,SIR0411306,Active
206,സുധ,Sudha,ശംഭുദേവൻ,3/177,ഐരടത്തില്ലം,Airadathillam,സ്ത്രീ,KNB0879353,Active
207,ആത്മറാം റ്റി പി,Athmaram T P,പുരുഷോത്തമൻ നമ്പൂതിരി,4/133,ഐരിടത്ത് ഇല്ലം,Airidathu Illam,പുരുഷൻ,HZQ1097609,Active
208,ശ്രീജ,Sreeja,ആത്മാറാം റ്റി പി,4/133,ഐരിടത്ത് ഇല്ലം,Airidathu Illam,സ്ത്രീ,SIR0651448,Active
209,അരവിന്ദാക്ഷൻ നമ്പൂതിരി,Aravindakshan Namboothiri,നാരയണര്,3/179,ഐരടത്തില്ലം,Airadathillam,പുരുഷൻ,SIR1157973,Active
210,സുമംഗല,Sumangala,അരവിന്ദാക്ഷൻ,3/179,ഐരടത്തില്ലം,Airadathillam,സ്ത്രീ,SIR1157981,Active
211,സുദീപ് അരവിന്ദ്,Sudeep Aravind,അരവിന്ദാക്ഷൻ നമ്പൂതിരി,5/160,ഐരടത്തില്ലം,Airadathillam,പുരുഷൻ,SIR0125013,Active
212,ഗിരീഷ് ആർ,Gireesh R,രാജമ്മ കെ ആർ,4/137,നള്ളാമുറിയിൽ,Nallamuriyil,പുരുഷൻ,KNB0882654,Active
213,ശാരിക എസ്,Sharika S,ഗിരീഷ് ആർ,5/160എ,നള്ളാമുറിയിൽ,Nallamuriyil,സ്ത്രീ,XEM0091355,Active
214,സുലോചന,Sulochana,വിശ്വനാഥൻ,3/180,അമ്പാടിയിൽ,Ambadiyil,സ്ത്രീ,SIR1157916,Active
215,ബാലചന്ദ്രൻ നായർ എൻ പി,Balachandran Nair N P,സുഭദ്രാമ്മ,5/158 എ,പൗവ്വത്തിൽ നീരാഞ്ജനം,Pouvathil Neeranjanam,പുരുഷൻ,SIR0418129,Active
216,വത്സല,Valsala,ബാലചന്ദ്രൻ നായർ എൻ പി,5/158 എ,പൗവ്വത്തിൽ നീരാഞ്ജനം,Pouvathil Neeranjanam,സ്ത്രീ,SIR0418137,Active
217,മധുസൂദനൻ നായർ,Madhusoodanan Nair,വിശ്വനാഥൻ,3/180,അമ്പാടിയിൽ,Ambadiyil,പുരുഷൻ,SIR1157924,Active
218,ഗോപകുമാർ,Gopakumar,വിശ്വനാഥൻ നായർ,3/180,അമ്പാടിയിൽ,Ambadiyil,പുരുഷൻ,SIR1157932,Active
219,അനന്തകൃഷ്ണൻ,Ananthakrishnan,വിശ്വനാഥൻനായർ,3/180,അമ്പാടിയിൽ,Ambadiyil,പുരുഷൻ,KNB0905042,Active
220,ശ്രീകാന്ത്,Sreekanth,വിശ്വനാഥൻനായർ,3/180,അമ്പാടിയിൽ,Ambadiyil,പുരുഷൻ,KNB1078039,Active
221,സുമതിക്കുട്ടിയമ്മ,Sumathikkuttiyamma,മുരളീധരൻ നായർ,3/181,മങ്ങാട്ട്,Mangattu,സ്ത്രീ,SIR1158237,Active
222,ഗംഗാ ദേവി എം,Ganga Devi M,സുമതിക്കുട്ടിയമ്മ,4/145,മങ്ങാട്ട്,Mangattu,സ്ത്രീ,KBZ1438761,Active
223,മേരി,Mary,മാത്യു,4/155,കളത്തുങ്കൽ,Kalathunkal,സ്ത്രീ,SIR0535328,Active
224,റോണി എം തോമസ്,Roni M Thomas,തോമസ് മാത്യു,4/155,കളത്തുങ്കൽ,Kalathunkal,പുരുഷൻ,SIR0045674,Active
225,റോബിൻ ജെ തോമസ്,Robin J Thomas,തോമസ് മാത്യു,3/235,കളത്തുങ്കൽ,Kalathunkal,പുരുഷൻ,SIR0524884,Active
226,മോഹനകുമാർ ആർ,Mohanakumar R,രാമകൃഷ്ണപിള്ള,3/231,പ്ലാന്തോട്ടത്തിൽ,Planthottathil,പുരുഷൻ,SIR0303412,Active
227,ഉഷകുമാരി സി നായർ,Ushakumari C Nair,മോഹനകുമാർ,3/369,പ്ലാന്തോട്ടത്തിൽ,Planthottathil,സ്ത്രീ,SIR0302315,Active
228,അരുൺ മോഹൻ,Arun Mohan,മോഹനകുമാർ ആർ,4/231,പ്ലാന്തോട്ടത്തിൽ,Planthottathil,പുരുഷൻ,KNB1215821,Active
229,അഞ്ജലി മോഹൻ,Anjali Mohan,മോഹനകുമാർ ആർ,4/231,പ്ലാന്തോട്ടത്തിൽ,Planthottathil,സ്ത്രീ,SIR0252585,Active
230,പങ്കജാക്ഷൻ നായർ പി ആർ,Pankajakshan Nair P R,രാഘവൻ പിള,5/331,ചന്തു ഭവൻ,Chandu Bhavan,പുരുഷൻ,SIR0301705,Active
231,വിജയ പി നായർ,Vijaya P Nair,പങ്കജാക്ഷൻ നായർ പി ആർ,4/232,ചന്തു ഭവൻ,Chandu Bhavan,സ്ത്രീ,SIR0069906,Active
232,രാഹുൽ പി നായർ,Rahul P Nair,വിജയ പി നായർ,4/232,ചന്തു ഭവൻ,Chandu Bhavan,പുരുഷൻ,SIR0445205,Active
233,രേഷ്മ പി നായർ,Reshma P Nair,പങ്കജാക്ഷൻ നായർ,4/232,ചന്ദു ഭവനം,Chandu Bhavanam,സ്ത്രീ,SIR0936047,Active
234,വിജയമ്മ,Vijayamma,സത്യരാജ്,4/97,കുന്നേൽ,Kunnel,സ്ത്രീ,KNB0824037,Active
235,മനു എസ് നായർ,Manu S Nair,വിജയമ്മ പി കെ,4/97,കുന്നേൽ,Kunnel,പുരുഷൻ,KNB1216076,Active
236,രാധാമണി,Radhamani,ലക്ഷ്മിക്കുട്ടിയമ്മ,4/230,പത്മവിലാസം,Padmavilasam,സ്ത്രീ,SIR0573865,Active
237,സന്തോഷ് കുമാർ എസ്,Santhosh Kumar S,ശശാങ്കൻ നായർ,4/230,പത്മവിലാസം,Padmavilasam,പുരുഷൻ,KNB1130590,Active
238,പേര് ലഭ്യമല്ല,Name Missing,സജ്ഞയൻ,4/234,പെരളശേരിൽ,Peralasseril,സ്ത്രീ,SIR0576256,Active
239,മത്തായി,Mathai,തോമസ്,4/235,ഇടത്തുണ്ടിയിൽ,Idathundiyil,പുരുഷൻ,KNB0904847,Active
240,അമ്മിണി,Ammini,മത്തായി,3/376,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR1158989,Active
241,ജോളി,Joly,മാത്യു,3/376,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR0576280,Active
242,തോമസ്,Thomas,തോമസ്,5/302എ,ഇടത്തുണ്ടിയിൽ,Idathundiyil,പുരുഷൻ,SIR0575191,Active
243,സുസമ്മ,Susamma,തോമസ്,5/302എ,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR0575217,Active
244,എലിസബത്ത് വി ജെ,Elizabeth V J,ഷാജൻ മാത്യൂസ്,3/429,ചീരാക്കുന്നേൽ,Cheerakunnel,സ്ത്രീ,SIR0193979,Active
245,ജോസ് കെ മാത്യൂ,Jose K Mathew,ലീലാമ്മ,3/317,കൊല്ലാത്തോട്ടത്തിൽ,Kollathottathil,പുരുഷൻ,KNB1198662,Active
246,വിജയാമ,Vijayamma,ശങ്കരനാരായണനാചാരി,6/149,വല്ല്യവീട്ടിൽ,Valiyaveettil,സ്ത്രീ,SIR0733444,Active
247,ശിവൻകുട്ടി ഡി,Sivankutty D,കേശവൻകുട്ടി,3/82,ഈട്ടിക്കുട്ടത്തിൽ,Eettikkuttathil,പുരുഷൻ,SIR0443515,Active
248,ശാന്തമ്മ വി ആർ,Santhamma V R,ശിവൻകുട്ടി ഡി,3/82സി,ഈട്ടിക്കുട്ടത്തിൽ,Eettikkuttathil,സ്ത്രീ,SIR0453613,Active
249,ലാലി ഏബ്രഹാം,Laly Abraham,ബിജു സി മാത്യു,4/104,വല്യവീട്ടിൽ വീട്,Valiyaveettil Veedu,സ്ത്രീ,SIR0678201,Active
250,ഉഷ വി എസ്,Usha V S,ശങ്കരനാരായണൻ,3/417,വല്ല്യവീട്ടിൽ,Valiyaveettil,സ്ത്രീ,KNB0903484,Active
251,ഗണേഷ് വി എസ്,Ganesh V S,ശങ്കര നാരായണൻ,3/417,വല്ല്യവിട്ടിൽ,Valiyaveettil,പുരുഷൻ,SIR0302752,Active
252,സനൽ എസ്,Sanal S,സദാനന്ദൻ,13/17,ഈട്ടികുട്ടത്തിൽ,Eettikuttathil,പുരുഷൻ,SIR0126201,Active
253,കമലാക്ഷിയമ്മ,Kamalakshiyamma,കുഞ്ഞൻ പിള്ള,11/304,ജ്യോതിസ്,Jyothis,സ്ത്രീ,SIR0949362,Active
254,രാധാകൃഷ്ണൻ പി കെ,Radhakrishnan P K,കമലാക്ഷിയമ്മ,5/423,ജ്യോതിസ്,Jyothis,പുരുഷൻ,SIR0792614,Active
255,ജയശ്രീ ആർ നായർ,Jayasree R Nair,രാധാക്യഷ്ണൻ നായർ,11/314,ജ്യോതിസ്സ്,Jyothis,സ്ത്രീ,SIR0302661,Active
256,അഖിൽ ആർ,Akhil R,രാധാക്യഷ്ണൻ നായർ വി കെ,10/423,ജ്യോതിസ്,Jyothis,പുരുഷൻ,SIR0359703,Active
257,അഞ്ജലി രാധാകൃഷ്ണൻ,Anjali Radhakrishnan,രാധാകൃഷ്ണൻ നായർ പി,5/423,ജ്യോതിസ്,Jyothis,സ്ത്രീ,SIR0793125,Active
258,ശോശാമ്മ വർഗീസ്,Sosamma Varghese,വർഗീസ്,10/441,അഞ്ചലാട്ട്,Anchalattu,സ്ത്രീ,JNW0851279,Active
259,ജയരാമൻ പിള,Jayaraman Pillai,ഷൺമുഖൻ പിളള,4/560,സ്വപ്നഭവൻ,Swapnabhavan,പുരുഷൻ,SIR0300921,Active
260,സുലോചന,Sulochana,ജയരാമൻ,4/560,സ്വപ്നാഭവൻ,Swapnabhavan,സ്ത്രീ,SIR0300897,Active
261,സ്വപ്ന ജെ നായർ,Swapna J Nair,നിഖിൽ ആർ,5/361,സ്വപ്നാ ഭവൻ,Swapna Bhavan,സ്ത്രീ,SIR1743152,Active
262,തോമസ് തോമസ്,Thomas Thomas,തോമസ് വി റ്റി,3/350,മുഴിക്കര വീട്,Muzhikkara Veedu,പുരുഷൻ,SIR0128322,Active
263,ജിൻസന് തോമസ്,Jinson Thomas,തോമസ് തോമസ്,,മൂഴിക്കര,Moozhikkara,പുരുഷൻ,KNB1077387,Active
264,സരോജം,Sarojam,കൃഷ്ണൻകുട്ടി,4/87,സരോഭവനം,Sarobhavanam,സ്ത്രീ,KNB0824755,Active
265,മുരളീധരൻ നായർ,Muraleedharan Nair,പുരുഷോത്തമൻ നായർ,5/296,തറയത്ത്,Tharayathu,പുരുഷൻ,KNB1077379,Active
266,ശാരദ എം നായർ,Sarada M Nair,മുരളീധരൻ നായർ,3/296,തറയത്ത്,Tharayathu,സ്ത്രീ,SIR0779769,Active
267,ശാലിനി എം നായർ,Shalini M Nair,മുരളീധരൻ നായർ,5/296,തറയത്ത്,Tharayathu,സ്ത്രീ,KNB1281203,Active
268,രാഹുൽ മുരളി നായർ,Rahul Murali Nair,മുരളീധരൻ നായർ,6/296,തറയത്ത്,Tharayathu,പുരുഷൻ,KNB1284751,Active
269,ശാന്തമ്മ,Santhamma,രവീന്ദ്രൻ നായർ,5/297,വടക്കേതറയത്ത്,Vadakketharayathu,സ്ത്രീ,SIR0510750,Active
270,സൂരജ് പി എസ്,Sooraj P S,സതീഷ് ചന്ദ്രൻ നായർ എൻ,5/594,വടക്കേതറയത്ത്,Vadakketharayathu,പുരുഷൻ,SIR0510776,Active
271,ലത എസ്,Latha S,രവീന്ദ്രൻ നായർ,5/297,വടക്കേതറയത്ത്,Vadakketharayathu,സ്ത്രീ,SIR0510826,Active
272,നന്ദു കൃഷ്ണൻ റ്റി എസ്,Nandu Krishnan T S,സുമേഷ് പി എസ്,5/594,വടക്കേതറയത്ത്,Vadakketharayathu,പുരുഷൻ,SIR0921775,Active
273,സുധാംബിക,Sudhambika,സദാശിവൻ നായർ,5/298,വടക്കേതറയത്ത്,Vadakketharayathu,സ്ത്രീ,SIR0785519,Active
274,വീണ സി,Veena C,സജിത് ടി എസ്,5/298,വടക്കേതറയത്ത്,Vadakketharayathu,സ്ത്രീ,SIR0510891,Active
275,സജിത്ത് റ്റി എസ്,Sajith T S,സദാശിവൻ നായർ കെ,5/298,വടക്കേതറയത്ത്,Vadakketharayathu,പുരുഷൻ,SIR0505529,Active
276,ശ്രീജിത്ത് എംകെ,Sreejith M K,സദാശിവൻ നായർ കെ,5/298,വടക്കേതറയത്ത്,Vadakketharayathu,പുരുഷൻ,SIR0127456,Active
277,ഹമീദു റാവുത്തർ,Hameedu Ravuthar,ഹസ്സൻ റാവുത്തർ,4/596,ഷാനവാസ് മൻസിൽ,Shanavas Manzil,പുരുഷൻ,SIR1158765,Active
278,നബീസാബീവി,Nabeesabivi,ഹമിദു റാവുത്തർ,4/91,ഷാനവാസ്‌മൻസിൽ,Shanavasmanzil,സ്ത്രീ,SIR0300806,Active
279,ഷാനവാസ് ഹമീദ്,Shanavas Hameed,ഹമീദ് എൻ എച്ച്,5/300,ഷാനവാസ് മൻസിൽ,Shanavas Manzil,പുരുഷൻ,KNB1153766,Active
280,അൽസമി ബീഗം,Alsami Beegum,ഷാനവാസ് ഹമീദ്,5/300,ഷാനവാസ് മൻസിൽ,Shanavas Manzil,സ്ത്രീ,FPV1559673,Active
281,സുരേഷ് ബാബു,Suresh Babu,ജനാർദ്ദനൻ നായർ,4/92,പാറേപ്രയാറ്റ്,Pareprayat,പുരുഷൻ,SIR1158708,Active
282,സരസമ്മ,Sarasamma,രാമചന്ദ്രൻ,5/302,വടക്കേക്കുറ്റ്,Vadakkekuttu,സ്ത്രീ,SIR0505594,Active
283,ശ്രീജേഷ്,Sreejesh,രാമചന്ദ്രൻ റ്റി ആർ,4/598,വടക്കേകൂറ്റ്,Vadakkekuttu,പുരുഷൻ,SIR0505321,Active
284,സജിത ഗോപിനാഥ്,Sajitha Gopinath,ശ്രീജേഷ് ആർ ചന്ദ്രൻ,4/598,വടക്കേക്കൂറ്റ്,Vadakkekuttu,സ്ത്രീ,FLT1697622,Active
285,സുരേഷ് വി റ്റി,Suresh V T,കേശവൻ തങ്കപ്പൻ,6/16,വടക്കേക്കുറ്റ്,Vadakkekuttu,പുരുഷൻ,KNB1264175,Active
286,വിനോ കുമാരി,Vino Kumari,സുരേഷ് വി റ്റി,6/16,വടക്കേക്കുറ്റ്,Vadakkekuttu,സ്ത്രീ,SIR0031245,Active
287,സുരേഷ് കുമാർ വി റ്റി,Suresh Kumar V T,തങ്കപ്പൻ,4/599,വടക്കേക്കുറ്റ്,Vadakkekuttu,പുരുഷൻ,KNB1182278,Active
288,ബീനാമോൾ വി സി,Beenamol V C,സുരേഷ് കുമാർ വി,4/599,വടക്കേക്കുറ്റ്,Vadakkekuttu,സ്ത്രീ,KMJ1080530,Active
289,അനന്ദു വി എസ്,Anandu V S,സുരേഷ് വി റ്റി,6/12,വടക്കേക്കുറ്റ്,Vadakkekuttu,പുരുഷൻ,SIR0925461,Active
290,ശ്രീധരൻ വി കെ,Sreedharan V K,കേശവൻ കെ കെ,5/509,സായി ഭവൻ ഉഴത്തിൽ,Sai Bhavan Uzhathil,പുരുഷൻ,SIR0866368,Active
291,സുശീല ശ്രീധരൻ,Susheela Sreedharan,ശ്രീധരൻ വി കെ,5/509,സായി ഭവൻ ഉഴത്തിൽ,Sai Bhavan Uzhathil,സ്ത്രീ,SIR0866376,Active
292,സുഗതൻ,Sugathan,കരുണാകരൻ,4/95,സുഗത വിലാസം,Sugatha Vilasam,പുരുഷൻ,SIR1158781,Active
293,മായ,Maya,സുഗതൻ,4/95,സുഗത വിലാസം,Sugatha Vilasam,സ്ത്രീ,KNB1077817,Active
294,കരുണാകരൻ വി കെ,Karunakaran V K,കൃഷ്ണൻ,5/306,കരവുതറ,Karavuthara,പുരുഷൻ,SIR1158559,Active
295,രമണി,Ramani,കരുണാകരൻ വി കെ,5/306,കരവുതറ,Karavuthara,സ്ത്രീ,SIR0565366,Active
296,പ്രകാശ്,Prakash,കരുണാകരൻ,4/96,കരവുതറ,Karavuthara,പുരുഷൻ,SIR1158872,Active
297,പ്രശാന്ത്,Prasanth,കരുണാകരൻ,4/96,കരവുതറ,Karavuthara,പുരുഷൻ,KNB0833764,Active
298,പ്രദീപ്,Pradeep,കരുണാകരൻ,4/96,വടക്കേക്കൂറ്റ്,Vadakkekuttu,പുരുഷൻ,SIR0522953,Active
299,റെജീന എൻ എ,Rejeena N A,പ്രശാന്ത് കെ കെ,5/306,കരവുതറ,Karavuthara,സ്ത്രീ,KNB0974287,Active
300,സൂര്യ പ്രഭ എൽ,Surya Prabha L,രവീന്ദ്രനാഥ പണിക്കർ,5/602,കാക്കോത്തു മണ്ണിൽ,Kakkothumannil,സ്ത്രീ,SIR0510669,Active
301,പ്രസന്നകുമാരിയമ്മ പി പി,Prasannakumariyamma P P,മന്മഥൻ നായർ പി,5/602 ബി,ലക്ഷ്മ്‌മി നിവാസ്,Lekshmi Nivas,സ്ത്രീ,BLD1344746,Active
302,സ്മ‌ിത എം നായർ,Smitha M Nair,മന്മദൻ നായർ പി ജി,5/602 ബി,ലക്ഷ്മി നിവാസ്,Lekshmi Nivas,സ്ത്രീ,BLD1537224,Active
303,മനു രവീന്ദ്രൻ കെ ആർ,Manu Raveendran K R,രവീന്ദ്രനാഥപണിക്കർ,5/602,കാക്കോത്തു മണ്ണിൽ,Kakkothumannil,പുരുഷൻ,KNB1216662,Active
304,രേഖ എസ് നായർ,Rekha S Nair,മനു രവിന്ദ്രൻ കെ ആർ,4/97,കാക്കോത്തു മണ്ണിൽ,Kakkothumannil,സ്ത്രീ,UAH0202440,Active
305,ദാസപ്പൻ നായർ,Dasappan Nair,നാരായണപിള്ള,5/363,കരവുത്തറ,Karavuthara,പുരുഷൻ,SIR0523019,Active
306,അമ്മിണിയമ്മ,Amminiyamma,ദാസപ്പൻ നായർ,5/363,കുരവുത്തറ,Kuravuthara,സ്ത്രീ,SIR0522979,Active
307,ദീപാ ജി,Deepa G,ദാസപ്പൻ നായർ,5/363,കരവുതറ,Karavuthara,സ്ത്രീ,KNB1013390,Active
308,ശാന്തകുമാരി,Shanthakumari,രാജശേഖരൻ നായർ,5/310,പാറേൽ പ്രയാറ്റ്,Parel Prayat,സ്ത്രീ,SIR0511030,Active
309,മണി,Mani,കവിദാസൻ,1/114,ഹരിലാൽ ഭവൻ,Harilal Bhavan,സ്ത്രീ,SIR0510867,Active
310,കവിദാസൻ,Kavidasan,ഭാസ്കരൻ,1/114,ഹരിലാൽ ഭവനം,Harilal Bhavanam,പുരുഷൻ,KNB1016781,Active
311,രാജ്‌കുമാർ പി ആർ,Rajkumar P R,രാജശേഖരൻപിളള,5/310,പാറേൽ പ്രയാറ്റ് വീട്,Parel Prayat Veedu,പുരുഷൻ,KNB1168277,Active
312,വിജയകുമാർ,Vijayakumar,ഗോപാലൻ നായർ കെ,4/101,പാറേൽ പ്രയാറ്റ്,Parel Prayat,പുരുഷൻ,SIR0505438,Active
313,സുലോചന,Sulochana,വിജയകുമാർ കെ,4/101,പാറേൽപ്രയാറ്റ്,Parelprayat,സ്ത്രീ,SIR0505420,Active
314,മനീഷ് വിജയൻ എസ്,Manish Vijayan S,വിജയകുമാർ കെ ജി,4/101,പാറേൽപ്രയാറ്റ്,Parelprayat,പുരുഷൻ,KNB0904359,Active
315,ശ്രീജ എസ് നായർ,Sreeja S Nair,മനീഷ് വിജയൻ എസ്,6/2,പാറേൽപ്രയാറ്റ്,Parelprayat,സ്ത്രീ,JTS2018505,Active
316,ധന്യാ വിജയൻ പി,Dhanya Vijayan P,വിജയകുമാർ കെ ജി,4/101,പാറേപ്രയാറ്റ്,Pareprayat,സ്ത്രീ,KNB1284892,Active
317,അഷറഫ്,Ashraf,കൃഷ്ണപിള്ള,4/102,കവളിമാനാൽ,Kavalimanal,സ്ത്രീ,SIR1158591,Active
318,സാലി പി എച്ച്,Sali P H,ഹസ്സൻ റാവുത്തർ,6/608,പാറയിൽ തുണ്ടിപുരയിടം,Parayil Thundipurayidam,പുരുഷൻ,SIR0510982,Active
319,സജീദ എ ഐ,Sajeeda A I,സാലി പി എച്ച്,5/596 എ,നെല്ലിമല,Nellimala,സ്ത്രീ,SIR0456095,Active
320,ലൂബിന അഷറഫ്,Lubina Ashraf,അഷറഫ് അലി റാവുത്തർ,6/608,നെല്ലിമല,Nellimala,സ്ത്രീ,KNB1078179,Active
321,തസ്തി അഷറഫ്,Thasthi Ashraf,അഷറഫ്,6/608,പാറയിൽ തുണ്ടുപുരയിടം,Parayil Thundupurayidam,സ്ത്രീ,SIR0299271,Active
322,സമീർ സലിം,Sameer Salim,സലിം,1/150,നെല്ലിമല,Nellimala,പുരുഷൻ,SIR0422857,Active
323,ആലിയാ സാലി,Aaliya Sali,സാലി പി എച്ച്,5/596 എ,നെല്ലിമല,Nellimala,സ്ത്രീ,SIR0510941,Active
324,ആമിനാബീവി,Aminabeevi,കാസിം,6/750,പാറയിൽ തുണ്ടിപുരയിടം,Parayil Thundipurayidam,സ്ത്രീ,SIR0785527,Active
325,സാദത്ത്,Sadath,കാസിം,6/750,പാറയിൽ തുണ്ടിപുരയിടം,Parayil Thundipurayidam,പുരുഷൻ,SIR0952382,Active
326,സുഹറ ബീവി,Suhara Beevi,സാദത്ത്,6/750,പാറയിൽ തുണ്ടുപുരയിടം,Parayil Thundupurayidam,സ്ത്രീ,SIR0567057,Active
327,കുട്ടൻ,Kuttan,ദൈവത്താൻ,5/611,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0567065,Active
328,ജാനകി,Janaki,കുട്ടൻ,4/611,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0567081,Active
329,മണി കെ,Mani K,കുട്ടൻ,6/281,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,KNB0973933,Active
330,മനീഷാ മണി,Maneesha Mani,മണി കെ,4/611,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0567214,Active
331,മനീഷ് മണി,Maneesh Mani,മണി കെ,6/287,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,KNB1101575,Active
332,പങ്കജാക്ഷി,Pankajakshi,ഗോപി,6/49,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0494666,Active
333,അജികുമാർ വി ജി,Ajikumar V G,ഗോപി കെ എസ്,6/49,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0936724,Active
334,ദീപാമോൾ എം ആർ,Deepamol M R,അജികുമാർ,6/49,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0567255,Active
335,ഡെയ്‌സി,Daisy,മനോജ്,6/47,മുരുപ്പേൽ,Muruppel,സ്ത്രീ,SIR0523043,Active
336,അംജുഷാ,Amjusha,ഡെയ്‌സി,,മുരുപ്പേല്,Muruppel,സ്ത്രീ,SIR0331496,Active
337,മഞ്ജുഷ മനോജ്,Manjusha Manoj,മനോജ് കെ,4/616,മുരുപ്പേൽ,Muruppel,സ്ത്രീ,KNB0969675,Active
338,സജു കെ കെ,Saju K K,കുട്ടപ്പൻ കെ കെ,6/66,കഴനിയിൽ,Kazhaniyil,പുരുഷൻ,KNB1077338,Active
339,രാജേഷ് കുമാർ,Rajesh Kumar,രാമകൃഷ്ണൻ,6/73,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR1754803,Active
340,രാജി ആർ,Raji R,രാജേഷ് കുമാർ,6/73,തടത്തിൽ,Thadathil,സ്ത്രീ,KNB1076785,Active
341,രജനി റ്റി ആർ,Rajani T R,സജു കെ കെ,6/66,കഴനിയിൽ,Kazhaniyil,സ്ത്രീ,SIR0494690,Active
342,രതീഷ് റ്റി ആർ,Ratheesh T R,രാമകൃഷ്ണൻ,4/113,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0519058,Active
343,സ്വാതി കൃഷ്ണ,Swathi Krishna,സജു കെ കെ,6/66,കഴനിയിൽ,Kazhaniyil,സ്ത്രീ,JNW1039833,Active
344,സന്ദീപ് കൃഷ്ണൻ,Sandeep Krishnan,സജു കെ കെ,6/96,കഴനിയിൽ,Kazhaniyil,പുരുഷൻ,KNB1077619,Active
345,രാജൻ വി കെ,Rajan V K,കൊച്ചുകുഞ്ഞ്,6/69,മലങ്കോട്ടയ്ക്കൽ തടത്തേൽ,Malankottaykkal Thadathel,പുരുഷൻ,SIR0949867,Active
346,പുഷ്പമ്മ,Pushpamma,രാജൻ,6/69,തടത്തേൽ,Thadathel,സ്ത്രീ,SIR0522946,Active
347,വിജയമ്മ,Vijayamma,തങ്കപ്പൻ സി ജി,6/72,ചിറക്കരമേപ്രത്ത്,Chirakkarameprathu,സ്ത്രീ,SIR0827790,Active
348,ഇന്ദു സി റ്റി,Indu C T,തങ്കപ്പൻ,6/318,ചിരക്കരമേപ്രത്ത്,Chirakkarameprathu,സ്ത്രീ,SIR0560979,Active
349,അജിത,Ajitha,സനിൽകുമാർ റ്റി എസ്,6/71,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR0519090,Active
350,സുധീഷ് റ്റി എസ്,Sudheesh T S,സനിൽകുമാർ,6/71,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR0302208,Active
351,ലീലാമണി,Leelamani,കൊച്ചുകുഞ്ഞ്,6/59,നമ്പരയ്ക്കൽ,Nambaraykkal,സ്ത്രീ,KNB0997551,Active
352,അജിത,Ajitha,കൊച്ചുകുഞ്ഞ്,4/117,നമ്പരയ്ക്കൽ,Nambaraykkal,സ്ത്രീ,SIR0955542,Active
353,ബിന്ദു,Bindu,അജികുമാർ,6/59,നമ്പരക്കൽ,Nambarakkal,സ്ത്രീ,KNB1098532,Active
354,അജികുമാർ,Ajikumar,കൊച്ചുകുഞ്ഞ്,6/59,നമ്പരക്കൽ,Nambarakkal,പുരുഷൻ,SIR0536912,Active
355,സുരേന്ദ്രൻ നായർ,Surendran Nair,ഗോവിന്ദപിള്ള,4/118,പൂവനയിൽ,Poovanayil,പുരുഷൻ,KNB1098524,Active
356,ഗീത,Geetha,സുരേന്ദ്രൻ നായർ,4/118,പൂവനയിൽ,Poovanayil,സ്ത്രീ,SIR1158724,Active
357,നീതു പി സുരേന്ദ്രൻ,Neethu P Surendran,സുരേന്ദ്രൻ നായർ സി,4/118,പൂവനയിൽ,Poovanayil,സ്ത്രീ,SIR0045609,Active
358,സ്നേഹലത എം,Snehalatha M,ജോയി,5/528,കാട്ടാമല മലങ്കോട്ടക്കൽ,Kattamala Malankottakkal,സ്ത്രീ,KNB0936419,Active
359,അനന്തകുമാർ,Ananthakumar,തങ്കമണി,6/528,കാട്ടാമല മലങ്കോട്ടക്കൽ,Kattamala Malankottakkal,പുരുഷൻ,SIR1158716,Active
360,അഭിലാഷ് കുമാർ ആർ,Abhilash Kumar R,സ്നേഹലത എം,6/528,കാട്ടാമല മലങ്കോട്ടക്കൽ,Kattamala Malankottakkal,പുരുഷൻ,SIR0505610,Active
361,രാധാകൃഷ്ണൻ,Radhakrishnan,മൂർത്തിങ്ങൾ,4/165,കാട്ടാമലമലങ്കോട്ടയ്ക്കൽ,Kattamalamalankottaykkal,പുരുഷൻ,KNB0904557,Active
362,സുശീല,Susheela,രാധാകൃഷ്ണൻ,4/165,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR0505545,Active
363,ശാന്തി കൃഷ്ണ,Shanthi Krishna,രാധാകൃഷ്ണൻ,4/165,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR0347567,Active
364,രഞ്ജിത കൃഷ്ണൻ,Ranjitha Krishnan,സുശീല രാധാകൃഷ്ണൻ,4/165,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR0430744,Active
365,തങ്കമ്മ,Thankamma,കുട്ടൻ,6/64,നെല്ലിക്കാപതാലിൽ,Nellikkapathalil,സ്ത്രീ,SIR0522987,Active
366,തങ്കരാജ്,Thankaraj,രായപ്പൻ,6/62,നെല്ലിക്കപ്പതാലിൽ,Nellikkappathalil,പുരുഷൻ,SIR0522896,Active
367,രാജ,Raja,തങ്കരാജ്,6/62,നെല്ലിക്കാപതാലിൽ,Nellikkapathalil,സ്ത്രീ,KNB0825687,Active
368,ശശി എം പി,Shashi M P,പൊടിയൻ,6/64,നെല്ലിക്കപതാലിൽ,Nellikkapathalil,പുരുഷൻ,SIR0523035,Active
369,ഓമന,Omana,ശശി എം പി,6/64,നെല്ലിക്കാപതാലിൽ,Nellikkapathalil,സ്ത്രീ,SIR0522995,Active
370,ശരത് ടി എൻ,Sarath T N,തങ്കരാജ് ആർ,6/62,നെല്ലിക്കപ്പതാലിൽ,Nellikkappathalil,പുരുഷൻ,SIR0929802,Active
371,വിശാഖ് എൻ എസ്,Visakh N S,ശശി എം പി,6/64,നെല്ലിക്കാപതാലിൽ,Nellikkapathalil,പുരുഷൻ,SIR0981126,Active
372,അരുൺ,Arun,തങ്കപ്പൻ റ്റി,6/63,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0567115,Active
373,പൊന്നമ്മ,Ponnamma,അരുൺ,6/63,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0567271,Active
374,അനിത പി,Anitha P,അരുൺ റ്റി,6/63,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,KNB1313956,Active
375,അജീഷ് കുമാർ പി,Ajeesh Kumar P,അരുൺ റ്റി,6/63,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0273680,Active
376,രാധാമണി,Radhamani,കുഞ്ഞൂഞ്ഞ്,4/12ബി,മലങ്കോട്ടൽ,Malankottal,സ്ത്രീ,SIR1158930,Active
377,നിധിൻ കുമാർ റ്റി എം,Nidhin Kumar T M,തങ്കമ്മ കെ കെ,6/61,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0678243,Active
378,പൊന്നപ്പൻ,Ponnappan,കേശവൻ,6/60,നെല്ലിക്കപതാലിൽ,Nellikkapathalil,പുരുഷൻ,KNB0973248,Active
379,തങ്കമ്മ,Thankamma,പൊന്നപ്പൻ,6/60,നെല്ലിക്കപതാലിൽ,Nellikkapathalil,സ്ത്രീ,KNB0825695,Active
380,ശാന്തമ്മ,Shanthamma,രാമചന്ദ്രൻ എൻ പി,5/626,നെല്ലിക്കപ്പതാലിൽ,Nellikkappathalil,സ്ത്രീ,SIR0505370,Active
381,പ്രകാശ്,Prakash,ദേവൻ,6/627,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0505339,Active
382,അഖില പി എം,Akhila P M,പ്രകാശ്,6/627,മലംകോട്ടയ്ക്കൽ,Malamkottaykkal,സ്ത്രീ,SIR0567305,Active
383,എബ്രഹാം തോമസ്,Abraham Thomas,തോമസ് എം സി,6/34,വെട്ടശ്ശേരി മലയിൽ,Vettasserimalayil,പുരുഷൻ,SIR0379982,Active
384,അന്നമ്മ,Annamma,എബ്രഹാം,6/34,വെട്ടശ്ശേരി മലയിൽ,Vettasserimalayil,സ്ത്രീ,SIR0567362,Active
385,ശോശാമ്മ ഏബ്രഹാം,Sosamma Abraham,മാത്യു വർഗീസ്,5/34,വെട്ടശ്ശേരിമലയിൽ,Vettasserimalayil,സ്ത്രീ,SIR0505404,Active
386,ശ്രീധരനാശാരി,Sreedharanashari,പത്മനാഭൻ,4/631,കേഴപ്ലാക്കൽ,Kezhaplakkal,പുരുഷൻ,SIR0505396,Active
387,തങ്കമ്മ,Thankamma,ശ്രീധരനാശാരി,6/48,കേഴപ്ലാക്കൽ,Kezhaplakkal,സ്ത്രീ,SIR0949842,Active
388,സനിൽകുമാർ,Sanilkumar,ശ്രീധരനാശാരി,6/46,കേഴപ്ളാക്കൽ,Kezhaplakkal,പുരുഷൻ,SIR0565507,Active
389,പ്രശാന്തി,Prasanthi,സനിൽകുമാർ,6/46,കേഴപ്ലാക്കൽ,Kezhaplakkal,സ്ത്രീ,FLT1096148,Active
390,അനിൽകുമാർ,Anilkumar,ശ്രീധരനാശാരി,4/130,കേഴപ്ളാക്കൽ,Kezhaplakkal,പുരുഷൻ,SIR1158617,Active
391,സുജാത,Sujatha,അനിൽകുമാർ എം എസ്,4/631,കേഴപ്ലാക്കൽ,Kezhaplakkal,സ്ത്രീ,KNB1078096,Active
392,അരുൺ കെ അനിൽ,Arun K Anil,അനിൽ കുമാർ എം എസ്,6/45,കേഴപ്ലാക്കൽ,Kezhaplakkal,പുരുഷൻ,SIR1739499,Active
393,വത്സമ്മ ജോൺസൺ,Valsamma Johnson,ജോൺസൺ,6/27,തൊണ്ടിടതടത്തിൽ,Thondidathadathil,സ്ത്രീ,SIR0511881,Active
394,രാജു,Raju,നാരായണൻ,4/132,കൊച്ചുപ്ളാക്കൽ,Kochuplakkal,പുരുഷൻ,KNB1314582,Active
395,ശ്യാമള,Shyamala,രാജു,5/632,കൊച്ചുപ്ളാക്കൽ,Kochuplakkal,സ്ത്രീ,SIR0775197,Active
396,സുരേന്ദ്രൻ എം വി,Surendran M V,വാസു എ കെ,5/50,മേലേൽ,Melel,പുരുഷൻ,SIR1158625,Active
397,ജിനിൽകുമാർ,Jinilkumar,ബാലൻ റ്റി പി,6/491,ലാവണ്യാലയം,Lavanyalayam,പുരുഷൻ,SIR0063099,Active
398,റെജികുമാരി കെ ആർ,Rejikumari K R,ശ്യാമള രാജു,4/632,കൊച്ചുപ്ളാക്കൽ,Kochuplakkal,സ്ത്രീ,LKR1474949,Active
399,സുനു എം എസ്സ്,Sunu M S,ഉഷ എ കെ,5/50,മേലേൽ,Melel,പുരുഷൻ,SIR0253310,Active
400,സുമി എം എസ്,Sumi M S,സുരേന്ദ്രൻ എം വി,5/50,മേലേൽ,Melel,സ്ത്രീ,SIR0422873,Active
401,ലക്ഷ്മ‌ി,Lekshmi,ശിവനന്ദൻ കെ,6/29,ചോവൻമുറിയിൽ,Chovanmuriyil,സ്ത്രീ,TFV0192575,Active
402,ബിജു,Biju,മാത്യൂ,6/364,തേവലപ്പുറത്ത്,Thevalappurathu,പുരുഷൻ,SIR0511105,Active
403,ജയമ്മ,Jayamma,ബിജു മാത്യു,6/30,തേവലപ്പുറത്ത്,Thevalappurathu,സ്ത്രീ,KNB1285543,Active
404,റോബിൻ ബി മാത്യു,Robin B Mathew,ബിജു മാത്യു,6/30,തേവലപ്പുറത്ത്,Thevalappurathu,പുരുഷൻ,SIR0840033,Active
405,ചെറിയാൻ,Cherian,തോമസ്,6/24,ചൂട്ടുമണ്ണിൽ,Choottumannil,പുരുഷൻ,SIR0511196,Active
406,അന്നമ്മ,Annamma,ചെറിയാൻ,6/24,ചൂട്ടുമണ്ണിൽ,Choottumannil,സ്ത്രീ,SIR0511170,Active
407,ജോംസി ചെറിയാൻ,Jomsi Cherian,ചെറിയാൻ തോമസ്,6/24,ചുട്ടുമണ്ണിൽ,Choottumannil,പുരുഷൻ,SIR0129429,Active
408,അന്നമ്മ,Annamma,ഏബ്രഹാം തോമസ്,6/54,ചൂട്ടുമണ്ണിൽ,Choottumannil,സ്ത്രീ,SIR0511212,Active
409,ഈപ്പൻ എം പി,Eapen M P,ഔസോപ്പ് ഫിലിപ്പോസ്,8/383എ,മഠത്തും മുറിയിൽ,Madathum Muriyil,പുരുഷൻ,SIR0678235,Active
410,സിസിലി,Cicily,ജോസ്,5/392,മഠത്തുംമുറിയിൽ,Madathummuriyil,സ്ത്രീ,KNB0991455,Active
411,ലിജോ ഈപ്പൻ,Lijo Eapen,ജോസ് ഈപ്പൻ,3/392,മാത്തുംമുറിയിൽ,Mathummuriyil,പുരുഷൻ,SIR0392050,Active
412,സുധാ ദേവി,Sudha Devi,ജോഷ്വ,6/41 എ,മനോജ് നിവാസ്,Manoj Nivas,സ്ത്രീ,KNB1119858,Active
413,വിനോദ്‌കുമാർ,Vinodkumar,ചന്ദ്രശേഖരൻ,4/139,മനോജ് നിവാസ്,Manoj Nivas,പുരുഷൻ,SIR1158682,Active
414,രാഹുൽ ജോഷ്വ,Rahul Joshua,സുധാ ദേവി,4/637,മനോജ് നിവാസ്,Manoj Nivas,പുരുഷൻ,SIR0510875,Active
415,പൊന്നമ്മ,Ponnamma,ശങ്കരപ്പിള്ള,6/35,മനോജ് നിവാസ്,Manoj Nivas,സ്ത്രീ,HZQ1302355,Active
416,പത്മകുമാരി പി കെ,Padmakumari P K,മനോജ്‌കുമാർ,6/35,മനോജ്‌നിവാസ്,Manoj Nivas,സ്ത്രീ,KNB0825281,Active
417,അനീഷ് രാജ് പി എസ്സ്,Aneesh Raj P S,സതീഷ്‌ചന്ദ്രൻ നായർ,6/35,മനോജ്‌നിവാസ്,Manoj Nivas,പുരുഷൻ,SIR0783217,Active
418,മനുകുമാർ എം സി,Manukumar M C,മനോജ് കുമാർ എം സി,6/636,ഇടപ്പുരയിടത്തിൽ മേലേതിൽ,Idappurayidathil Melethil,പുരുഷൻ,SIR0128736,Active
419,അനുകുമാർ എം സി,Anukumar M C,പത്മകുമാരി,6/35,മനോജ് നിവാസ്,Manoj Nivas,പുരുഷൻ,SIR0348060,Active
420,സാലിക്കുട്ടി തോമസ്,Salikutty Thomas,ജോസ് കെ സി,6/37,കിഴക്കേചെറുപാലത്തിൽ,Kizhakkacherupalathil,സ്ത്രീ,SIR0053108,Active
421,ജിനു ജോസ്,Jinu Jose,സാലിക്കുട്ടി തോമസ്,5/638,കിഴക്കേചെറുപാലത്തിൽ,Kizhakkacherupalathil,സ്ത്രീ,SIR0266544,Active
422,ശോശാമ്മ,Sosamma,തോമസ്,5/290,ചരുവിൽ,Charuvil,സ്ത്രീ,SIR0511246,Active
423,മറിയാമ്മ സജി,Mariyamma Saji,സജി,3/589,നെല്ലിക്കപതാലിൽ ചരുവിൽ,Nellikkapathalil Charuvil,സ്ത്രീ,KNB1154277,Active
424,ശോഭന പി എൻ,Shobhana P N,വിശ്വനാഥൻ എം,6/38,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,KNB1076975,Active
425,സന്തോഷ്കുമാർ,Santhoshkumar,കൊച്ചുകുട്ടി,6/39,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0519066,Active
426,രാജപ്പൻ,Rajappan,ദൈവത്താൻകൊച്ചുകൂട്ടി,4/145,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,KNB0824904,Active
427,സരസമ്മ,Sarasamma,രാജപ്പൻ,4/145,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,KNB0825984,Active
428,ശ്രീകുമാർ സി കെ,Sreekumar C K,രാജപ്പൻ സി കെ,4/643,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0494674,Active
429,ശ്രീദേവി ആർ,Sreedevi R,രാജപ്പൻ സി കെ,4/643,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR0417477,Active
430,മോഹനൻ,Mohanan,കുട്ടൻദൈവത്താൻ,6/41,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,KNB0825927,Active
431,മനു മോഹനൻ,Manu Mohanan,മോഹനൻ എം കെ,6/41,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0430751,Active
432,കുഞ്ഞുകുഞ്ഞുകുട്ടി,Kunjukunjukutty,അഴകൻ,4/147,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0519009,Active
433,അമ്മിണി,Ammini,കുഞ്ഞുകുഞ്ഞു,4/147,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0518985,Active
434,സിന്ധു റാണി എം എ,Sindhu Rani M A,മനോജ്,5/645,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0188623,Active
435,സുരേഷ്കുമാർ എം കെ,Sureshkumar M K,കുഞ്ഞൂഞ്ഞ്,6/147,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,KNB0905000,Active
436,നിജ കെ കെ,Nija K K,സുരേഷ്‌കുമാർ എം,5/645,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,MZG1529627,Active
437,ഇന്ദുലേഖ എം കെ,Indulekha M K,കുഞ്ഞ്കുഞ്ഞ്,6/42,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR0112177,Active
438,സതീഷ്,Satheesh,കൊച്ചുകുട്ടി ദൈവത്താൻ,4/148,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,KNB0904995,Active
439,വിജയമ്മ,Vijayamma,ചെല്ലപ്പൻ,4/148എ,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR1159011,Active
440,ശ്രീജിത്ത് സി കെ,Sreejith C K,ചെല്ലപ്പൻ സി കെ,4/646,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0348417,Active
441,ചിന്നുമോൾ സി കെ,Chinnumol C K,ചെല്ലപ്പൻ സി കെ,4/148എ,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR0322560,Active
442,പൊന്നമ്മ,Ponnamma,അലക്സാണ്ടർ,6/43,ചുനക്കര തെക്കേതിൽ,Chunakkara Thekkethil,സ്ത്രീ,SIR0566893,Active
443,എം എ മത്തായി,M A Mathai,കുഞ്ഞുപാപ്പി,4/151,ഈന്തനോലിക്കൽ,Eenthanolikkal,പുരുഷൻ,SIR1158500,Active
444,ബാബു,Babu,മത്തായി,4/151,ഈന്തനോലിക്കൽ,Eenthanolikkal,പുരുഷൻ,SIR1158526,Active
445,ലിസി,Lissy,ബാബു,4/151,ഈന്തനോലിക്കൽ,Eenthanolikkal,സ്ത്രീ,KNB1076694,Active
446,തങ്കപ്പൻ,Thankappan,കുഞ്ഞുഞ്ഞ് ഒ കെ,8/650,ഓലിക്കൽ,Olikkal,പുരുഷൻ,SIR0522961,Active
447,ശ്യാമള,Shyamala,തങ്കപ്പൻ,8/650,ഓലിക്കൽ,Olikkal,സ്ത്രീ,SIR0522938,Active
448,അഭിലാഷ് റ്റി എം,Abhilash T M,തങ്കപ്പൻ ഒ കെ,8/650,ഓലിക്കൽ,Olikkal,പുരുഷൻ,KNB1210384,Active
449,രാജമ്മ എം റ്റി,Rajamma M T,പാപ്പി,4/153,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR0325829,Active
450,ഷൈലജ പി,Shylaja P,ബിജു വി കെ,6/46,മലങ്കോട്ടയ്ക്കൽ വീട്,Malankottaykkal Veedu,സ്ത്രീ,KNB0825935,Active
451,രാജേഷ്,Rajesh,ചെല്ലപ്പൻ,5/,കാടാമല,Kadamala,പുരുഷൻ,KNB0904243,Active
452,തങ്കമണി,Thankamani,പൊന്നപ്പൻ,4/153 എ,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR1159029,Active
453,രതീഷ് പി എം,Ratheesh P M,പൊന്നപ്പൻ സി കെ,5/25,മുരുപ്പേൽ,Muruppel,പുരുഷൻ,SIR0097907,Active
454,ശാരദ,Sarada,പൊടിയൻ,4/156,കാട്ടാമല,Kattamala,സ്ത്രീ,SIR0792630,Active
455,സന്ധ്യ എം ബി,Sandhya M B,ബേബി,6/54,മലംങ്കോട്ടയ്ക്കൽ,Malamkottaykkal,സ്ത്രീ,SIR1158666,Active
456,നളിനാക്ഷി,Nalinakshi,ശിവദാസൻ,4/157,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,TFV1999986,Active
457,അനിൽകുമാർ എൻ എസ്,Anilkumar N S,ശിവദാസൻ,5/73,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,KNB0967240,Active
458,സുനിൽകുമാർ കെ എസ്,Sunilkumar K S,ശ്രീധരൻ,003/1290,കാടാശ്ശേരിൽ തെക്കുംപ്ലാക്കൽ,Kadasseril Thekkumplakkal,പുരുഷൻ,SIR1158575,Active
459,അനിഷ്‌കുമാർ എം എസ്സ്,Anishkumar M S,ശിവദാസൻ,4/157,മലങ്കോട്ടക്കൽ,Malankottakkal,പുരുഷൻ,SIR0303404,Active
460,സതീശ് കുമാർ ടി എസ്,Satheesh Kumar T S,ശിവദാസ് വി കെ,5/655,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0422840,Active
461,മറിയാമ്മ തോമസ്,Mariyamma Thomas,സാബു തോമസ്,4/158,പാറക്കത്തോട്ടത്തിൽ,Parakkathottathil,സ്ത്രീ,KNB1075332,Active
462,തോമസ് ദേവസ്യാ,Thomas Devasya,ദേവസ്യ,6/11,പാറക്കതോട്ടത്തിൽ,Parakkathottathil,പുരുഷൻ,SIR0518944,Active
463,ഏലിശ്വ എ പി,Elishwa A P,ജോസഫ് ദേവസ്യ,4/656,പാറക്കത്തോട്ടത്തിൽ,Parakkathottathil,സ്ത്രീ,SIR0283143,Active
464,ജോസഫ് ദേവസ്യ,Joseph Devasya,ദേവസ്യ പി റ്റി,6/56,പാറക്കത്തോട്ടത്തിൽ,Parakkathottathil,പുരുഷൻ,KNB1075340,Active
465,ജോസ് സെബാസ്റ്റ്യൻ,Jose Sebastian,അന്നമ്മ,4/656,പാറയ് തോട്ടത്തിൽ,Paray Thottathil,പുരുഷൻ,SIR0283408,Active
466,തമ്പി പി കെ,Thampi P K,ശ്രീധരൻ,5/621എ,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0457382,Active
467,റെജിമോൾ,Rejimol,തന്‌പി പി കെ,6/15,മലങ്കോട്ടയ്ക്കല്,Malankottaykkal,സ്ത്രീ,KNB0970087,Active
468,ശ്രീജിത്ത് പി തമ്പി,Sreejith P Thampi,തമ്പി പി കെ,5/621എ,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0450155,Active
469,ശ്രീഹരി തമ്പി,Sreehari Thampi,തമ്പി പി കെ,5/15,മലങ്കോട്ടായ്ക്കൽ,Malankottaykkal,പുരുഷൻ,SIR0879080,Active
470,അജിത്‌കുമാർ,Ajithkumar,ശിവശങ്കരൻ നായർ,4/161,രത്നഭവൻ,Rathnabhavan,പുരുഷൻ,SIR1158740,Active
471,വി ജി അശോക്‌കുമാർ,V G Ashokkumar,ഗംഗാധരൻ,6/4,ശാന്തിഭവൻ,Santhibhavan,പുരുഷൻ,SIR0567347,Active
472,അഭിലാഷ് എസ്,Abhilash S,അശോക് കുമാർ,6/4,ശാന്തി ഭവൻ,Santhi Bhavan,പുരുഷൻ,SIR0080127,Active
473,വിജയമ്മ വി എൽ,Vijayamma V L,രാഘവൻ,6/5,വടക്കേക്കൂറ്റ്,Vadakkekuttu,സ്ത്രീ,SIR0567313,Active
474,ശോഭന,Shobhana,ശശിധരൻ,6/6,വടക്കേക്കുറ്റ്,Vadakkekuttu,സ്ത്രീ,SIR0510719,Active
475,അനീഷ് എസ്,Aneesh S,ശശിധരൻ വി കെ,6/6,വടക്കേക്കൂറ്റ്,Vadakkekuttu,പുരുഷൻ,KNB1216027,Active
476,വിജയൻ വി കെ,Vijayan V K,കൃഷ്ണൻ,6/7,വടക്കേക്കുറ്റ്,Vadakkekuttu,പുരുഷൻ,SIR0505628,Active
477,ഓമന,Omana,വിജയൻ,6/7,വടക്കേക്കൂറ്റ്,Vadakkekuttu,സ്ത്രീ,SIR0505651,Active
478,വിധീഷ്,Vidheesh,വിജയൻ,6/7,വടക്കേക്കൂറ്റ്,Vadakkekuttu,പുരുഷൻ,KNB0904110,Active
479,തങ്കമ്മ,Thankamma,ദിവാകരൻ,6/8,തെക്കേക്കൂറ്റ്,Thekkekuttu,സ്ത്രീ,SIR1158856,Active
480,വിനോദ്കുമാർ,Vinodkumar,ദിവാകരൻ,4/166,തെക്കേക്കുറ്റ്,Thekkekuttu,പുരുഷൻ,DVJ1117159,Active
481,ചന്ദ്രപ്രഭ കെ ജി,Chandraprabha K G,വിനോദ് കുമാർ റ്റി,4/663,തെക്കേക്കുറ്റ്,Thekkekuttu,സ്ത്രീ,SIR0467258,Active
482,അക്ഷയ വിനോദ്,Akshaya Vinod,വിനോദ് കുമാർ റ്റി ഡി,4/663,തെക്കേക്കുറ്റ്,Thekkekuttu,സ്ത്രീ,SIR0511741,Active
483,തോമസ്,Thomas,ഗിവർഗീസ് ചാക്കോ,6/10,പുത്തൻപറമ്പിൽ,Puthenparambil,പുരുഷൻ,KNB1249309,Active
484,അന്നമ്മ,Annamma,തോമസ്,6/10,പൂത്തൻപറമ്പിൽ,Poothenparambil,സ്ത്രീ,SIR0053256,Active
485,ജെയിംസ് പി തോമസ്,James P Thomas,തോമസ് പി സി,4/265,പുത്തൻപറമ്പിൽ,Puthenparambil,പുരുഷൻ,SIR0537019,Active
486,ആശസൂസൻ തോമസ്,Ashasusan Thomas,തോമസ്,4/168,പുത്തൻപറമ്പിൽ,Puthenparambil,സ്ത്രീ,KNB0826057,Active
487,ഭവാനിയമ്മ,Bhavaniyamma,നാരായണപിള്ള,6/9,പുരയിടത്തിൽ പടിഞ്ഞാറേതിൽ,Purayidathil Padinjarethil,സ്ത്രീ,SIR0529743,Active
488,വിനയരാജ് പി എസ്,Vinayaraj P S,സുകുമാരൻ നായർ,4/666,പുരയിടത്തിൽ,Purayidathil,പുരുഷൻ,SIR0439513,Active
489,രാമചന്ദ്ര പണിയ്ക്കൂർ എ ആർ,Ramachandra Panicker A R,രാഘവൻ നായർ പി ഇ,6/17,കാക്കോത്ത് മണ്ണിൽ,Kakkoth Mannil,പുരുഷൻ,KNB1077270,Active
490,ഓമന,Omana,രാമചന്ദ്ര പണിക്കർ എ ആർ,6/17,കാക്കോത്തുമണ്ണിൽ,Kakkothumannil,സ്ത്രീ,SIR0539007,Active
491,മുരളീധരൻ നായർ,Muraleedharan Nair,കൃഷ്ണപിള്ള,6/18,അഞ്ചുതെങ്ങിൽ,Anjuthengil,പുരുഷൻ,SIR0538983,Active
492,ചന്ദ്രിക,Chandrika,മുരളീധരൻ നായർ,6/18,അഞ്ചുതെങ്ങിൽ,Anjuthengil,സ്ത്രീ,KNB1281138,Active
493,മനീഷ് എ എം,Maneesh A M,മുരളീധരപണിക്കർ,6/18,അഞ്ചുതെങ്ങിൽ,Anjuthengil,പുരുഷൻ,KNB1075878,Active
494,ഹരീഷ് കൃഷ്ണൻ,Hareesh Krishnan,മുരളീധരൻ നായർ,6/18,അഞ്ചുതെങ്ങിൽ,Anjuthengil,പുരുഷൻ,KNB1270933,Active
495,രമ്യാ ചന്ദ്രൻ,Ramya Chandran,മനീഷ് എ എം,6/18,അഞ്ചുതെങ്ങിൽ,Anjuthengil,സ്ത്രീ,SIR0567099,Active
496,സാറാമ്മ,Saramma,ഏബ്രാഹാം,6/172,പുത്തൻപറമ്പിൽ,Puthenparambil,സ്ത്രീ,KNB0905091,Active
497,ജേക്കബ്,Jacob,ഏബ്രാഹാം,6/172,പുത്തൻപറമ്പിൽ,Puthenparambil,പുരുഷൻ,SIR0505503,Active
498,പുരുഷോത്തമൻ,Purushothaman,കേശവൻ,4/671,ഉഴത്തിൽ,Uzhathil,പുരുഷൻ,KNB0826594,Active
499,രതീഷ് കുമാർ കെ സി,Ratheesh Kumar K C,ചന്ദ്രശേഖരൻ,5/6711 എ,സുരഭി നിവാസ്,Surabhi Nivas,പുരുഷൻ,SIR1723121,Active
500,സുജ,Suja,രാധാകൃഷണൻ നായർ,6/14,ഉഴത്തിൽ,Uzhathil,സ്ത്രീ,KNB1033315,Active
501,വിഷ്ണു രാധാകൃഷ്ണൻ,Vishnu Radhakrishnan,രാധാകൃഷ്ണൻ, ,ഉഴത്തിൽ,Uzhathil,പുരുഷൻ,SIR1723303,Active
502,വിനയമോൾ ആർ,Vinayamol R,സുജ കെ പി, ,ഉഴത്തിൽ,Uzhathil,സ്ത്രീ,KNB1098607,Active
503,രാജമ്മ,Rajamma,ശെൽവരാജ്,4/175,അഞ്ചുതെങ്ങിൽ,Anjuthengil,സ്ത്രീ,KNB0824813,Active
504,ശെൽവരാജ്,Selvaraj,രാജമ്മ,4/175,അഞ്ചുതെങ്ങിൽ,Anjuthengil,പുരുഷൻ,SIR0957720,Active
505,രാജില രാജ്,Rajila Raj,രാജു എം സെൽവരാജ്,6/20,അഞ്ചുതെങ്ങിൽ,Anjuthengil,സ്ത്രീ,SIR0128744,Active
506,രഞ്ജിത്ത് രാജ്,Ranjith Raj,ശെൽവരാജ് എം,5/77,അഞ്ചുതെങ്ങിൽ,Anjuthengil,പുരുഷൻ,KNB1316157,Active
507,രാജീവ് രാജ് ആർ,Rajeev Raj R,രാജു എം,6/33,അഞ്ചുതെങ്ങിൽ,Anjuthengil,പുരുഷൻ,SIR0536946,Active
508,ജോൺ,John,മാത്തൻ,6/21,ചരുവിൽ,Charuvil,പുരുഷൻ,SIR0537324,Active
509,ലീലാമ്മ,Leelamma,ജോൺ,6/21,ചരുവിൽ,Charuvil,സ്ത്രീ,SIR0125880,Active
510,ജോജി ജോൺ,Joji John,ജോൺ,4/34,ചരുവിൽ,Charuvil,പുരുഷൻ,SIR0895110,Active
511,ജോൺ മാത്യു സി,John Mathew C,ജോൺ,4/176,ചരിവിൽ,Charivil,പുരുഷൻ,SIR0348813,Active
512,ബ്ലസ്സി ജോൺ മാത്യൂ,Blessy John Mathew,ജോൺ മാത്യു സി,5/34,ചരിവിൽ,Charivil,സ്ത്രീ,KNB1277573,Active
513,പൊന്നമ്മ,Ponnamma,നാരായണപണിക്കർ,4/177,ഇടവുപുരയിടം,Idavupurayidam,സ്ത്രീ,SIR1158542,Active
514,പ്രദീപ് കുമാർ എൻ,Pradeep Kumar N,നാരായണ പണിക്കർ എ,5/392 ബി,ഇടപ്പുരയിടം,Idappurayidam,പുരുഷൻ,SIR0565523,Active
515,അർജുൻ പ്രദീപ്,Arjun Pradeep,മിനി പ്രദീപ്,5/392,ഇടപ്പുരയിടം,Idappurayidam,പുരുഷൻ,SIR0467043,Active
516,സന്ദീപ് എസ് നായർ,Sandeep S Nair,ശശിധരൻ നായർ,5/293,ശശിസദനം,Sashisadanam,പുരുഷൻ,KNB1169077,Active
517,ലക്ഷ്മികുട്ടിയമ്മ,Lekshmikuttiyamma,ശശിധരൻ നായർ,5/293,ശശിസദനം,Sashisadanam,സ്ത്രീ,SIR0194894,Active
518,അഞ്ജു ക്യഷ്ണൻ കെ എസ്,Anju Krishnan K S,ക്യഷ്‌ണൻകുട്ടി കെ കെ,4/675എ,സരോഭവൻ,Sarobhavan,സ്ത്രീ,KNB1077239,Active
519,ശശിധരൻ നായർ,Sashidharan Nair,ഗൗരിക്കുട്ടിയമ്മ,5/191,പുതുപറമ്പിൽ,Puthuparambil,പുരുഷൻ,SIR0922591,Active
520,മുരളീധരൻ നായർ എൻ പി,Muraleedharan Nair N P,പുരുഷോത്തമൻ നായർ,5/292,പുതുപ്പറമ്പിൽ,Puthupparambil,പുരുഷൻ,SIR0506220,Active
521,ഗീതാ എസ്. നായർ,Geetha S. Nair,ശശിധരൻ നായർ,5/291,പുതുപറമ്പിൽ,Puthuparambil,സ്ത്രീ,KNB1077254,Active
522,ചന്ദ്രകവല്ലിയമ്മ,Chandrakavalliyamma,മുരളീധരൻ നായർ,5/292,പുതുപറമ്പിൽ,Puthuparambil,സ്ത്രീ,KNB1077221,Active
523,വൽസലാ,Valsala,ഉദയകുമാർ,3/240,കൊട്ടാരത്തിൽ,Kottarathil,സ്ത്രീ,KMJ1182054,Active
524,ഷൈലജ റ്റി എസ്,Shylaja T S,ബാബു ഗോവിന്ദൻ,4/241,പുലിപ്രമഠം,Pulipramadam,സ്ത്രീ,SIR0518894,Active
525,ശോശാമേ,Sosamme,മത്തായി,6/26,ചൂട്ടുമണ്ണിൽ വീട്,Choottumannil Veedu,സ്ത്രീ,KNB1216811,Active
526,രഞ്ചു മത്തായി,Ranju Mathai,മത്തായി,6/26,ചൂട്ടുമണ്ണിൽ,Choottumannil,പുരുഷൻ,XKE0438309,Active
527,ജീന വർഗ്ഗീസ്,Jeena Varghese,രഞ്ചു മത്തായി,6/26,ചുട്ടുമണ്ണിൽ,Choottumannil,സ്ത്രീ,SIR1158690,Active
528,സുരേഷ്‌കുമാർ,Sureshkumar,കുട്ടൻ പിള്ള,4/184,പടിഞ്ഞാറെ ഒറ്റപ്ളാക്കൽ,Padinjare Ottaplakkal,പുരുഷൻ,SIR0921932,Active
529,സുശീല കുമാരി,Susheela Kumari,സുരേഷ് കുമാർ, ,പടിഞ്ഞാറേഒറ്റപ്ലാക്കൽ,Padinjareottaplakkal,സ്ത്രീ,SIR0921924,Active
530,സൂരജ്‌കുമാർ എസ്,Soorajkumar S,സുരേഷ് കുമാർ കെ, ,പടിഞ്ഞാറേഒറ്റപ്ലാക്കൽ,Padinjareottaplakkal,പുരുഷൻ,SIR1158849,Active
531,പത്മാവതിയമ്മ,Padmavathiyamma,കൊച്ചുനാരായണപണിക്കർ,4/185,തടത്തിൽ കിഴക്കതിൽ,Thadathil Kizhakkathil,സ്ത്രീ,KNB0963363,Active
532,ഹരിതകുമാർ,Harithakumar,ഹരികൃഷ്ണൻ നായർ,4/185,തടത്തിൽ കിഴക്കേതിൽ,Thadathil Kizhakkethil,പുരുഷൻ,SIR0567370,Active
533,ഓമന,Omana,കുട്ടപ്പപണിക്കർ,6/110,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR1158799,Active
534,തങ്കമ്മ,Thankamma,പരമേശ്വരപണിക്കർ,4/187,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR1158815,Active
535,രഘുനാഥൻ,Raghunathan,പരമേശ്വരപണിക്കർ,4/187,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR1158831,Active
536,രാജലക്ഷ്മ‌ി,Rajalekshmi,രഘുനാഥൻ,4/187,തടത്തിൽ,Thadathil,സ്ത്രീ,KNB1207984,Active
537,അനു ആർ നായർ,Anu R Nair,രഘുനാഥൻ നായർ റ്റി,4/187,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR0303354,Active
538,പത്മാവതിയമ്മ,Padmavathiyamma,പ്രഭാകരൻ,6/104,വരിക്കപ്ളാമ്മൂട്ടിൽ,Varikkaplamoottil,സ്ത്രീ,HHY1230077,Active
539,സുജിതാ വിജയൻ,Sujitha Vijayan,സുനിൽകുമാർ വി,5/683,വരിക്കപ്ലാമൂട്ടിൽ,Varikkaplamoottil,സ്ത്രീ,KNB0934950,Active
540,സരോജിനി,Sarojini,ഹരികൃഷ്ണൻ,4/191,ചെറുകിടമണ്ണിൽദേവിവിലാസം,Cherukidamannildevivilasam,സ്ത്രീ,KNB0824151,Active
541,സുജിതാ വിജയൻ,Sujitha Vijayan,സുനിൽകുമാർ വി,5/683,വരിക്കപ്ലാമൂട്ടിൽ,Varikkaplamoottil,സ്ത്രീ,KNB0934950,Active
542,സരോജിനി,Sarojini,ഹരികൃഷ്ണൻ,4/191,ചെറുകിടമണ്ണിൽദേവിവിലാസം,Cherukidamannildevivilasam,സ്ത്രീ,KNB0824151,Active
543,സുമതി ഗോപാലൻ,Sumathi Gopalan,കൃഷ്ണൻ,6/97,വരമ്പനാംക്കുഴി,Varambanamkuzhi,സ്ത്രീ,SIR0109330,Active
544,സന്തോഷ്,Santhosh,ഗോപാലകൃഷ്ണൻ,4/192,വരമ്പനാംകുഴി,Varambanamkuzhi,പുരുഷൻ,KNB0963488,Active
545,തങ്കമണി,Thankamani,പുരുഷോത്തമൻ,6/98,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR0766527,Active
546,മഞ്ജുമോൾ കെ എസ്,Manjumol K S,പ്രദീപ് കുമാർ റ്റി,6/98,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR0126284,Active
547,പ്രദീപ് കുമാർ,Pradeep Kumar,പുരുഷോത്തമൻ,6/98,തടത്തിൽ,Thadathil,പുരുഷൻ,HHY1230077,Active
548,അബ്ദുൾ റാവുത്തർ,Abdul Ravuthar,കനി റാവുത്തർ,4/194,തടത്തിൽ,Thadathil,പുരുഷൻ,KNB1052380,Active
549,ചന്ദ്രമതി എം റ്റി,Chandramathi M T,മണി റ്റി. എസ്,5/689,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR0519074,Active
550,ഗോപാലകൃഷ്ണൻ,Gopalakrishnan,മണി റ്റി. എസ്,5/689,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR1158807,Active
551,അഞ്ജലി,Anjali,പ്രദീപ്,6/106,തടത്തിൽ,Thadathil,സ്ത്രീ,KNB1013135,Active
552,ആമിനാബീവി,Aminabeevi,അബ്ദുൾ റഹിമാൻ,4/196,പത്തകുത്തിക്കൽ,Pathakuthikkal,സ്ത്രീ,KNB0999920,Active
553,തുളസി കുമാരി,Thulasi Kumari,മോഹൻകുമാർ,0/99,കാഞ്ഞിരത്തുങ്കൽ,Kanjirathunkal,സ്ത്രീ,TFV0426064,Active
554,വിഷ്ണു മോഹൻകുമാർ,Vishnu Mohankumar,മോഹനകുമാർ,6/99,കാഞ്ഞിരത്തിങ്കൽ,Kanjirathinkal,പുരുഷൻ,SIR0681049,Active
555,ഓമന,Omana,ഗോപിനാഥൻ നായർ,6/106,തടത്തിൽ പടിഞ്ഞാറതിൽ,Thadathil Padinjarathil,സ്ത്രീ,SIR0519330,Active
556,രേഖ നായർ,Rekha Nair,നകുമാർ,3/692,തടത്തിൽ പടിഞ്ഞാറേതിൽ,Thadathil Padinjarethil,സ്ത്രീ,SIR0417493,Active
557,അനിൽകുമാർ,Anilkumar,പ്രഭാകരൻ,6/107,തച്ചുകുളത്തു തടത്തിൽ,Thachukulathu Thadathil,പുരുഷൻ,SIR0506261,Active
558,പൊന്നമ്മ,Ponnamma,അനികുമാർ,5/693,തച്ചുകുളത്തു തടത്തിൽ,Thachukulathu Thadathil,സ്ത്രീ,SIR0506154,Active
559,അർച്ചനാ ദേവി അനിൽ,Archana Devi Anil,അനിൽകുമാർ വി പി,6/107,തച്ചുകുളത്ത് തടത്തിൽ,Thachukulathu Thadathil,സ്ത്രീ,KNB1314392,Active
560,ബിനോജ് ലാൽ ടി എ,Binoj Lal T A,അച്യുതൻ,6/105,തച്ചുകുളത്തായതടത്തിൽ,Thachukulathayathadathil,പുരുഷൻ,SIR0505982,Active
561,ദേവകി,Devaki,അച്ചുതൻ,6/105,തച്ചുകുളത്തായതടത്തിൽ,Thachukulathayathadathil,സ്ത്രീ,KNB1240704,Active
562,പത്മകുമാരിയമ്മ,Padmakumariyamma,രാമചന്ദൻ നായർ,6/398,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR0567404,Active
563,അഭിലാഷ്,Abhilash,രാമപ്രന്ദൻ നായർ പി,6/398,തടത്തിൽ,Thadathil,പുരുഷൻ,SIR0331603,Active
564,തുളസിദാസ്,Thulasidas,രാമൻ പിള്ള,4/203,കൃഷ്ണ നിലയം,Krishna Nilayam,പുരുഷൻ,KNB0824193,Active
565,അഖില റ്റി ദാസ്,Akhila T Das,തുളസീദാസ് ആർ,6/76,കൃഷ്ണ നിലയം,Krishna Nilayam,സ്ത്രീ,SIR0347914,Active
566,അമല റ്റി ദാസ്,Amala T Das,തുളസിദാസ് ആർ,6/76,കൃഷ്ണ നിലയം,Krishna Nilayam,സ്ത്രീ,SIR0681064,Active
567,പത്മ വി കുമാർ,Padma V Kumar,വിജയകുമാർ,4/204,ചൈതന്യ,Chaithanya,സ്ത്രീ,SIR1158492,Active
568,വിവേക് വി കുമാർ,Vivek V Kumar,വിജയകുമാർ ആർ,4/698,ചൈതന്യ,Chaithanya,പുരുഷൻ,SIR0299693,Active
569,വിജയലക്ഷ്‌മിയമ്മ പി കെ,Vijayalekshmiyamma P K,മുരളീധരൻ നായർ പി എൻ,5/700,പാടിമണ്ണിൽ,Padimannil,സ്ത്രീ,SIR0483040,Active
570,സുനിൽ എം നായർ പി,Sunil M Nair P,മുരളീധരൻ നായർ പി,6/115,പാടിമണ്ണിൽ,Padimannil,പുരുഷൻ,SIR0483057,Active
571,കുമാരി എസ് വിദ്യ,Kumari S Vidhya,സുനിൽ എം നായർ,6/115,പാടിമണ്ണിൽ,Padimannil,സ്ത്രീ,KNB1013010,Active
572,അരുൺ കുമാർ ജി,Arun Kumar G,ഗോപിനാഥൻ നായർ,4/206,പാടിമണ്ണിൽ,Padimannil,പുരുഷൻ,KNB1028166,Active
573,അന്നമ്മ,Annamma,ജോൺ,4/213,ഇടത്തറമണ്ണിൽ,Idatharamannil,സ്ത്രീ,KNB1097120,Active
574,പൊന്നമ്മ വി എൻ,Ponnamma V N,ഗോപാലകൃഷ്ണപിള്ള,4/208,മണികണ്ഠ്റെ വിലാസം,Manikandare Vilasam,സ്ത്രീ,SIR1158674,Active
575,ആർദ്ര പി,Ardra P,ഉഷ പി ചന്ദ്രൻ,4/208,മണികണ്ഠ വിലാസം,Manikanda Vilasam,സ്ത്രീ,SIR0681163,Active
576,വർഗീസ് പി സി,Varghese P C,ചാണ്ടി,4/30,പുളിക്കൽ,Pulickal,പുരുഷൻ,KNB1209055,Active
577,ലീലാമ്മ,Leelamma,വർഗീസ്,4/210,പുളിക്കൽ,Pulickal,സ്ത്രീ,SIR0417691,Active
578,റിവിൻ ചാണ്ടി,Rivin Chandy,വർഗീസ് പി സി,6/210,പുളിയ്ക്കൽ,Pulickal,പുരുഷൻ,SIR0417709,Active
579,ആനി സാറാ മാത്യു,Annie Sara Mathew,മാത്തുക്കുട്ടി സി കെ,5/704,പുളിക്കൽ,Pulickal,സ്ത്രീ,SIR0681031,Active
580,ചെറിയാൻ എം എ,Cherian M A,ഏലിയാസ്,5/87,മാവുങ്കൽ,Mavunkal,പുരുഷൻ,KNB1037803,Active
581,രഞ്ചു എം ചെറിയാൻ,Ranju M Cherian,ചെറിയാൻ എം എ,5/87,മാവുങ്കൽ,Mavunkal,പുരുഷൻ,SIR0313478,Active
582,മറിയാമ്മ,Mariyamma,ജോൺ,4/377,ഇടത്തറമണ്ണിൽ,Idatharamannil,സ്ത്രീ,KNB0825273,Active
583,ഏലിക്കുട്ടി എം വി,Elikutty M V,ചെറിയാൻ,5/81,മാവുങ്കൽ,Mavunkal,സ്ത്രീ,KNB1284546,Active
584,ആഷിഷ് ജോൺ,Ashish John,മറിയാമ്മ ജോൺ,3/263,ഇടത്തറമണ്ണിൽ,Idatharamannil,പുരുഷൻ,KNB1271667,Active
585,അന്നമ്മ കെ എം,Annamma K M,മാത്യു കെ എം,4/87,കോലമല,Kolamala,സ്ത്രീ,SIR0385328,Active
586,മാത്യു കെ എം,Mathew K M,മാത്തൻ മത്തായി,4/87,കോലമല വീട്,Kolamala Veedu,പുരുഷൻ,SIR0417634,Active
587,അനിഷ് മാത്യു,Anish Mathew,മാത്യു,4/214,കോലമല കിഴക്കേതിൽ,Kolamala Kizhakkethil,പുരുഷൻ,KNB1031020,Active
588,അജീഷ് മാത്യു,Ajeesh Mathew,മാത്യു കെ എം,4/214,കോലമല,Kolamala,പുരുഷൻ,SIR0005603,Active
589,ചാണ്ടി നൈനാൻ,Chandy Ninan,ചാണ്ടി,4/80,പുളിക്കൽ,Pulickal,പുരുഷൻ,SIR0658468,Active
590,ജോജോ ചാണ്ടി,Jojo Chandy,പാണ്ടി നൈനാൻ,5/,പുളിക്കൽ വീട്,Pulickal Veedu,പുരുഷൻ,KNB0904961,Active
591,ജോജി ചാണ്ടി,Joji Chandy,ചാണ്ടി,4/80,പുളിക്കൽ,Pulickal,പുരുഷൻ,KNB1177245,Active
592,മറിയാമ്മ സാം,Mariyamma Sam,ജോജി ചാണ്ടി,4/80,പുളിക്കൽ,Pulickal,സ്ത്രീ,SIR0982637,Active
593,പ്രസന്നകുമാരൻ നായർ,Prasannakumaran Nair,ദാമോദരൻ പിള്ള,4/165,വീമ്പുന്താനത്ത് മണ്ണിൽ,Veembunthanathu Mannil,പുരുഷൻ,KNB0825190,Active
594,ഉഷാകുമാരി പി എൻ,Ushakumari P N,പ്രസന്നകുമാരൻ,4/165,വീമ്പുന്താനത്ത് മണ്ണിൽ,Veembunthanathu Mannil,സ്ത്രീ,KNB0825208,Active
595,അനന്ദു പ്രസാദ് വി പി,Anandu Prasad V P,പ്രസന്നകുമാരൻ നായർ,4/165,വിമ്പുന്താനത്ത് മണ്ണിൽ,Vimbunthanathu Mannil,പുരുഷൻ,SIR0300467,Active
596,അരവിന്ദ് പ്രസാദ് വി പി,Aravind Prasad V P,പ്രസന്ന കുമാരൻ നായർ,4/165,വീമ്പുംതാനത്തു മണ്ണിൽ,Veembumthanathu Mannil,പുരുഷൻ,SIR0775171,Active
597,സുരേഷ് കുമാർ,Suresh Kumar,ദാമോദരൻ പിള്ള,4/226,വീമ്പുന്താനത്ത്,Veembunthanathu,പുരുഷൻ,KNB0825679,Active
598,ശ്യാമള കുമാരി,Shyamala Kumari,സുരേഷ് കുമാർ,4/226,വീമ്പുന്താനത്ത്,Veembunthanathu,സ്ത്രീ,KNB0825216,Active
599,വീണ എസ് നായർ,Veena S Nair,സുരേഷ് കുമാർ പി ഡി,4/226,വീമ്പുന്താനത്ത് മണ്ണിൽ,Veembunthanathu Mannil,സ്ത്രീ,SIR0556407,Active
600,സ്മൃ‌തി സുസൻ സുമോദ്,Smrithi Susan Sumod,സുമോദ് ചാക്കോ ചെറിയാൻ,4/952,കുന്നത്ത്,Kunnathu,സ്ത്രീ,AWE2002384,Active
601,മീനുമോൾ എം സി,Meenumol M C,പത്മകുമാരി പി കെ,6/442,മനോജ് നിവാസ്,Manoj Nivas,സ്ത്രീ,SIR1001460,Active
602,സുമോദ് ചാക്കോ ചെറിയാൻ,Sumod Chacko Cherian,ചെറിയാൻ കെ സി,4/952,കുന്നത്ത്,Kunnathu,പുരുഷൻ,DGC1412253,Active
603,ദേവഹർഷ് ആൻ,Devaharsh Ann,രാഗം)ന്ദ്രൻ നായർ വി ജി,11/430,സുദേവരം,Sudevaram,സ്ത്രീ,SIR1003839,Active
604,രാഹുൽ എം ആർ,Rahul M R,രാജൻ,6/46,മലംകോട്ടയ്ക്കൽ,Malamkottaykkal,പുരുഷൻ,SIR1005149,Active
605,അഖില സാബു,Akhila Sabu,സാബു സെബാസ്റ്റിൻ,11/131,പനവേലിൽകുന്നിൽ,Panavelilkunnil,സ്ത്രീ,SIR1018902,Active
606,ഐപ്പ് ശോഭ മെറിൻ,Eipe Shobha Merin,സുമോദ് ചാക്കോ ചെറിയാൻ,3/925,കുന്നത്ത്,Kunnathu,സ്ത്രീ,DGC1412246,Active
607,സുനിത ജോൺസൻ,Sunitha Johnson,ജോൺസൻ,6/27,തോണ്ടിടതടത്തിൽ,Thondidathadathil,സ്ത്രീ,SIR1035252,Active
608,സുരാജോൻ ആർ,Surajon R,രതീഷ് കുമാർ കെ സി,6/15,സുരഭി നിവാസ്,Surabhi Nivas,പുരുഷൻ,SIR1006055,Active
609,പ്രമീള ജീ കെ,Prameela G K,രതീഷ് പി എം,6/52,മലങ്കോട്ടക്കല്,Malankottakkal,സ്ത്രീ,SIR1035294,Active
610,ശ്രീകുമാർ കെ ജി,Sreekumar K G,ഗോപാലൻ നായർ,11/547,കൊട്ടാരത്തിൽ,Kottarathil,പുരുഷൻ,SIR1048800,Active
611,ദിവ്യ പി ക,Divya P K,അജയ് കുമാർ,4/505,കൂടത്തുങ്കൽ,Koodathunkal,സ്ത്രീ,SIR1048842,Active
612,ജിൻസി തോമസ്,Jincy Thomas,മറിയാമ്മ തോമസ്,6/11,പാറയ്ക്കൽ,Paraykkal,സ്ത്രീ,SIR1066398,Active
613,അനുഷ സുസൻ സജി,Anusha Susan Saji,മറിയാമ്മ,24/33,ചരുവിൽ,Charuvil,സ്ത്രീ,SIR1071182,Active
614,വിഷ്ണു എസ് കുമാർ,Vishnu S Kumar,സനിൽ കുമാർ പി എസ്.,6/32,കേഴപ്ലാക്കൽ,Kezhaplakkal,പുരുഷൻ,SIR1070432,Active
615,എസ് മുരളികൃഷ്ണ,S Muralikrishna,സുനിൽ എം നായർ പി,6/115,പാടിമണ്ണില്,Padimannil,പുരുഷൻ,SIR0995035,Active
616,വിവേക് എസ് കുമാർ,Vivek S Kumar,സനിൽ കുമാർ പി എസ്,6/32,കേഴപ്ലാക്കൽ,Kezhaplakkal,പുരുഷൻ,SIR1071554,Active
617,ആദിത്യ അജി,Adithya Aji,ദീപ അജികുമാർ,6/40,മലങ്കോട്ടയ്ക്കൽ,Malankottaykkal,സ്ത്രീ,SIR1070473,Active
618,കിരൺ ജിയോ തോമസ്,Kiran Jio Thomas,സുജ തോമസ്,3/319,കൊല്ലാൽ,Kollal,പുരുഷൻ,SIR1068956,Active
619,മീനാക്ഷി സി മധു,Meenakshi C Madhu,ഗീതാകുമാരി സി ആർ,11/365,സുഭാനന്ദ ഭവനം,Subhananda Bhavanam,സ്ത്രീ,SIR1604842,Active
620,സൂരജ് പി സന്തോഷ്,Sooraj P Santhosh,സന്തോഷ് പി കെ,4/86,പുളിയ്ക്കൽ കുന്നേൽ,Pulickal Kunnel,പുരുഷൻ,SIR1599794,Active
621,മധുസൂദനൻ നായർ,Madhusoodanan Nair,ശിവരാമപണിക്കർ,3/64,കവറുമാത്തിൽ,Kavarumathil,പുരുഷൻ,SIR1158906,Active
622,രാജമ്മ വി കെ,Rajamma V K,ശിവരാജൻ,03/352,സൗപർണിക,Sowparnika,സ്ത്രീ,KNB1013192,Active
623,മായ മണി,Maya Mani,മണി,287,മലങ്കോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR1608470,Active
624,കെ എസ് സതീഷ് നായർ,K S Satheesh Nair,പൊന്നമ്മ സി ഡി,3/368,ശ്രീഭവനം,Sreebhavanam,പുരുഷൻ,SIR1616051,Active
625,ആൽബിൻ പി ററി,Albin P T,തങ്കച്ചൻ പി സി,,പനചികൽ,Panachikal,പുരുഷൻ,SIR1616630,Active
626,ജയശ്രീ പി എസ്,Jayasree P S,ദിനേഷ് പി,,പുത്തൻ പുരയ്ക്കൽ,Puthen Puraykkal,സ്ത്രീ,SIR1622091,Active
627,യദു മോഹൻ,Yedu Mohan,മോഹനൻ പി ജീ,,പാനവേലികുന്നേൽ,Panavelikunnel,പുരുഷൻ,SIR1622166,Active
628,സുകുമാരൻ നായർ എക്സ്,Sukumaran Nair X,ഗീത ജീ നായർ,418,,,പുരുഷൻ,SIR1623339,Active
629,ആരതി അജി,Aarathi Aji,അജികുമാർ വി ജീ,,മലൻകോട്ടക്കൽ,Malankottakkal,സ്ത്രീ,SIR1624238,Active
630,അന്നമ്മാചാക്കോ,Annammachacko,ചാക്കോനൈനാൻ,1071,,,സ്ത്രീ,SIR1730845,Active
631,സജി പി തോമസ്,Saji P Thomas,തോമസ് പി എം,,നെല്ലിക്കപത്ഹാലിൽ,Nellikkapathalil,പുരുഷൻ,SIR1633528,Active
632,സൂസമ്മ തോമസ്,Susamma Thomas,തോമസ് മാത്യു,003/94,ഇടത്തുണ്ടിയിൽ ഹൗസ്,Idathundiyil House,സ്ത്രീ,MLB2142305,Active
633,വർഗീസ് സാമുവൽ,Varghese Samuel,കെ സി സാമുവൽ,08/663,കുരികാട്ടിൽ,Kurikattil,പുരുഷൻ,SIR1740182,Active
634,ബെറ്റ്സി.പി.എബ്രഹാം,Betsy P Abraham,ഇട്ടിയവര എബ്രഹാം,9/3,പുളിഞ്ചിമൂട്ടിൽ,Pulinjimootil,സ്ത്രീ,KNB0878728,Active
635,ജെറിൻ പി ജോൺ,Jerin P John,ജോൺ പി ജെ,,പുളിഞ്ചിമൂട്ടിൽ ഹൗസ്,Pulinjimootil House,പുരുഷൻ,SIR0984021,Active
636,ജോസഫ് ചെറിയാൻ,Joseph Cherian,ചെറിയാൻ ശാമുവൽ,11/400,,,പുരുഷൻ,SIR0422881,Active
637,പുഷ്പ,Pushpa,മോഹനൻ,9/36എ,പാലത്തിട്ട,Palathitta,സ്ത്രീ,SIR1159920,Active
638,കൃഷ്ണകുമാരി എൽ,Krishnakumari L,അനിൽകുമാർ,9/53,മന്നത്ത്,Mannathu,സ്ത്രീ,SIR1159946,Active
639,മിനി പി രവി,Mini P Ravi,രവിധരൻ പിള്ള,11/401,പുൽപ്പാമന്ദത്ത്,Pulptamandathu,സ്ത്രീ,SIR0680801,Active
640,അജീഷ് കുമാർ സി ആർ,Ajeesh Kumar C R,രവീന്ദ്ര പണിക്കർ,10/107,ചാറുവേലിൽ,Charuvelil,പുരുഷൻ,KNB1284454,Active
641,ജോബിൻ എം മാത്യു,Jobin M Mathew,മാത്യു മാത്യു,1/393,ആലുങ്കൽ,Alunkal,പുരുഷൻ,KNB1269851,Active
642,സരസമ്മ,Sarasamma,രാജപ്പൻ,9/118,പനവേലിക്കുന്ന്,Panavelikkunnu,സ്ത്രീ,SIR1637529,Active
643,സഭാരാജ് സി കെ,Sabharaj C K,എം ആര് കൃഷ്ണൻകുട്ടി,9/120,ചാലുങ്കൽ,Chalunkal,പുരുഷൻ,SIR1159110,Active
644,ആശിഷ് കുമാർ ഡി,Ashish Kumar D,മറിയാമ്മ തോമസ്,,തേക്കനാൽ,Thekkanal,പുരുഷൻ,SIR1159607,Active
645,സന്തോഷ് കുമാർ ഐ വി,Santhosh Kumar I V,ഐ കെ വാസുദേവൻ പിള്ള,489,ഐക്കര ഹൗസ്,Ikkara House,പുരുഷൻ,SIR1638030,Active
646,നിഷ ബീഗം പി യു,Nisha Beegum P U,നിസാം അബ്ദുൾ റഹ്മാൻ,,കാനത്തിൽ,Kanathil,സ്ത്രീ,YTW0857094,Active
647,മത്തായി പ്ളാമൂട്ടിൽ മത്തായി,Mathai Plamoottil Mathai,ആലീസ് മത്തായി,,പ്ളാമൂട്ടിൽ ഹൗസ്,Plamoottil House,പുരുഷൻ,SIR1655059,Active
648,ജിതിൻ പി ജോൺ,Jithin P John,ജോൺ പി ജെ,,പുളിഞ്ചിമുട്ടിൽ വീട്,Pulinjimootil Veedu,പുരുഷൻ,SIR1655067,Active
649,ആലീസ് മത്തായി,Alice Mathai,മത്തായി പ്ളാമൂട്ടിൽ മത്തായി,,പ്ളാമൂട്ടിൽ ഹൗസ്,Plamoottil House,സ്ത്രീ,SIR1664440,Active
650,സി എം കൃഷ്ണ പ്രസാദ്,C M Krishna Prasad,സി ക് മോനച്ചൻ,,ചാലഉനഗല് ഹാഊസ,Chalaunagal House,പുരുഷൻ,SIR1695436,Active
651,ബിജിൻ പി തോമസ്,Bijin P Thomas,തോമസ് പി ടി,,പ്ലാച്ചിറപടിഞ്ഞാറേതില്,Plachirapadinjarethil,പുരുഷൻ,SIR1708643,Active
652,സരസ്വതിയമ്മ,Saraswathiyamma,വാസുദേവൻ പിള്ള,/ 13എ,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR1159037,Active
653,ഗൗരി എം കെ,Gouri M K,കുമാരൻ,4/ 86,പുളിക്കക്കുന്നേൽ,Pulikkakkunnel,സ്ത്രീ,SIR0658252,Active
654,വിനീത് കുമാർ എൻ പി,Vineeth Kumar N P,പൊന്നപ്പൻ കെ കെ,/ 60,നെല്ലിക്കാപ്പതാലിൽ,Nellikkappathalil,പുരുഷൻ,SIR0845131,Active
655,അജിത് റ്റി എൻ,Ajith T N,തങ്കരാജൻ,/ 62,നെല്ലിക്കപ്പതാലിൽ,Nellikkappathalil,പുരുഷൻ,SIR0844936,Active
656,ശ്രീകാന്ത് കെ യൂ,Sreekanth K U,ഉണ്ണികൃഷ്ണൻ കെ ജി,9/584എ,കുമ്പളത്ത്,Kumbalathu,പുരുഷൻ,SIR0192468,Active
657,വസന്ത കുമാരി,Vasantha Kumari,മോഹൻ പിള്ള കെ,11/421,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR0866509,Active
658,സുശീലൻ നായർ കെ ജി,Susheelan Nair K G,ഗോപാല പിള,11/555,,,പുരുഷൻ,SIR0949719,Active
659,സുമകുമാരി പി എസ്,Sumakumari P S,സുശീലൻ നായർ,11/555,,,സ്ത്രീ,SIR0949727,Active
660,സുനിത മൈക്കിൾ,Sunitha Michael,മൈക്കിൾ പി വി,11/249,പായിക്കാട്ട്,Payikkattu,സ്ത്രീ,SIR1159805,Active
661,ഷാജി,Shaji,വർഗീസ്,9/2,പുലിക്കലും പുറത്ത്,Pulikkalum Purathu,പുരുഷൻ,SIR1159649,Active
662,പൂജ നായർ,Pooja Nair,മോഹൻ പിള്ള,11/421,കോയിക്കൽ കുന്നുംപറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR0866475,Active
663,അലൻ ജോർജ് മൈക്കിൾ,Alan George Michael,സുനിത മൈക്കിൾ,11/249,പായിക്കാട്ട്,Payikkattu,പുരുഷൻ,SIR0495085,Active
664,തങ്കമ്മ,Thankamma,ഏബ്രഹാം,9/3,പുളിഞ്ചിമൂട്ടിൽ,Pulinjimootil,സ്ത്രീ,SIR1159672,Active
665,എബി ഏബ്രഹാം,Ebi Abraham,ഏബ്രഹാം പി ഐ,9/3,പുളിഞ്ചിമുട്ടിൽ,Pulinjimootil,പുരുഷൻ,KNB1248525,Active
666,അനിൽ പി,Anil P,ഏബ്രഹാം,9/3,പുളിഞ്ചിമുട്ടിൽ,Pulinjimootil,പുരുഷൻ,KNB0878603,Active
667,സോണിയ ജോസഫ്,Sonia Joseph,എബി ഏബ്രഹാം,9/3,പുളിഞ്ചിമൂട്ടിൽ,Pulinjimootil,സ്ത്രീ,KNB1248533,Active
668,അമീലിയ തങ്കം എബ്ര ഹാം,Amelia Thankam Abraham,എബി എബ്രഹാം,627,പുളിഞ്ചിമുട്ടിൽ,Pulinjimootil,സ്ത്രീ,SIR1730142,Active
669,തോമസ്,Thomas,തോമസ്,11/418,തേക്കനാൽ,Thekkanal,പുരുഷൻ,SIR0044719,Active
670,മറിയാമ്മ തോമസ്,Mariyamma Thomas,തോമസ് തോമസ്,11/418,തേക്കനാൽ,Thekkanal,സ്ത്രീ,SIR0567438,Active
671,തങ്കമണി,Thankamani,ദാമോദരൻ പിള്ള,9/5,കോയിക്കൽകുന്നുപുറത്ത്,Koikkalkunnupurathu,സ്ത്രീ,SIR1159375,Active
672,സജീവൻ നായർ ഡി,Sajeevan Nair D,ദാമോദരൻ പിള്ള,6/5,കോയിക്കൽകുന്നുപുറത്ത്,Koikkalkunnupurathu,പുരുഷൻ,SIR0188680,Active
673,സുദദേവൻനായർ,Sudadevan Nair,ദാമോദരൻപിള്ള,9/5,കോയിക്കൽകുന്നുപുറത്ത്,Koikkalkunnupurathu,പുരുഷൻ,KNB0825729,Active
674,സൗമ്യ നായർ,Soumya Nair,സുദദേവൻനായർ,11/420,കോയിക്കൽകുന്നു പുറത്ത്,Koikkalkunnu Purathu,സ്ത്രീ,SIR0457374,Active
675,സരോജനിയമ്മ,Sarojiniyamma,കെ കെ കൃഷ്ണപിള്ള,9/5 എ,ശാന്തിഭവനം വേങ്ങമുട്ടിൽ,Shanthibhavanam Vengamuttil,സ്ത്രീ,SIR1159698,Active
676,മോഹനൻ പിള്ള കെ ജി,Mohanan Pillai K G,ഗോപാലപിള്ള കെ കെ,9/7,കോയിക്കൽ കുന്നുപുറത്ത് വീട്,Koikkal Kunnupurathu Veedu,പുരുഷൻ,KNB1215540,Active
677,ക്രിസ്റ്റഫർ,Christopher,റ്റി ജി ജോർജ്,9/8,കോയിക്കൽകുന്നുപുറത്ത്,Koikkalkunnupurathu,പുരുഷൻ,SIR1159391,Active
678,തങ്കമ്മ,Thankamma,ക്രിസ്റ്റഫർ,9/8,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR0053413,Active
679,മഞ്ജു,Manju,ക്രിസ്റ്റഫർ റ്റി ജി,9/8,കോയിക്കൽ കുന്നുപുറത്ത്,Koikkal Kunnupurathu,സ്ത്രീ,KNB1232727,Active
680,മായ ക്രിസ്റ്റഫർ,Maya Christopher,തങ്കമ്മ,10/121,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR1159326,Active
681,ലളിത,Lalitha,ശശി,9/9,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR1159102,Active
682,ദിവ്യാ സി എസ്,Divya C S,ശശി റ്റി കെ,10/10,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,KNB1320126,Active
683,ദീപാ ശശി,Deepa Sasi,റ്റി കെ ശശി,9/148,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR0301127,Active
684,നാണു,Nanu,പൊടിയൻ,9/10,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,പുരുഷൻ,SIR1159300,Active
685,സുമതി,Sumathi,നാണു,9/10,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR1159318,Active
686,വിജയൻ കെ ഇ,Vijayan K E,ഈശ്വരൻ കെ ഐ,10/14,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,പുരുഷൻ,SIR1159359,Active
687,സുജ,Suja,ഈശ്വരൻ അയ്യപ്പൻ,9/11,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,പുരുഷൻ,KNB0995886,Active
688,പ്രമോദ്,Pramod,ഈശ്വരൻ അയ്യർ,9/11,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,പുരുഷൻ,SIR1159342,Active
689,വാസുദേവൻ പിള്ള,Vasudevan Pillai,നാണു പിള്ള,9/13എ,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,പുരുഷൻ,SIR1159292,Active
690,സന്തോഷ്,Santhosh,വാസുദേവൻ പിള്ള,9/13എ,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,പുരുഷൻ,SIR1159474,Active
691,സാലി,Saly,തോമസ്,9/16,മാടക്കൽമേപ്രത്ത്,Madakkalmeprathu,സ്ത്രീ,KNB1283738,Active
692,സിബി തോമസ്,Siby Thomas,തോമസ് ബേബി,9/22,മാടക്ക മേപ്രത്ത്,Madakka Meprathu,പുരുഷൻ,SIR1159334,Active
693,അന്നമ്മ,Annamma,ജോൺ,9/18,പുളിഞ്ചിമുട്ടിൽ,Pulinjimootil,സ്ത്രീ,SIR1159664,Active
694,ജോൺ പി ജെ,John P J,ജോൺ പി ഐ,11/486,പുളിഞ്ചിമൂട്ടിൽ,Pulinjimootil,പുരുഷൻ,SIR0769547,Active
695,ജോസഫ് പി ജെ,Joseph P J,ജോൺ പി ഐ,11/296,പുളിഞ്ചിമുട്ടിൽ,Pulinjimootil,പുരുഷൻ,KNB1208529,Active
696,ജെസ്സി വറുഗീസ്,Jessy Varghese,ജോൺ പി ജെ,11/486,പുളിഞ്ചിമുട്ടില്,Pulinjimootil,സ്ത്രീ,SIR0986836,Active
697,റ്റെസ്സി കെ വർഗീസ്,Tessy K Varghese,ജോസഫ് പി ജെ,11/296,പുളിഞ്ചിമൂട്ടിൽ,Pulinjimootil,സ്ത്രീ,BRG1521673,Active
698,ലിജു റെജി,Liju Reji,റെജി വറുഗീസ്,11/658,പള്ളിക്കൽ ഹൗസ്,Pallickal House,സ്ത്രീ,SIR1736529,Active
699,വിനീതാ ജേക്കബ്,Vineetha Jacob,തോമസ് പി വറുഗീസ്,11/107,പള്ളിക്കൽ,Pallickal,സ്ത്രീ,HZQ1202084,Active
700,സുജാ മേരി തോമസ്,Suja Mary Thomas,ജോസഫ് ചെറിയാൻ,11/400,പള്ളിക്കൽ,Pallickal,സ്ത്രീ,DVJ1047752,Active
701,സുജിത്ത് സാം ജോസഫ്,Sujith Sam Joseph,ജോസഫ് ചെറിയാൻ,11/400,പള്ളിക്കൽ,Pallickal,പുരുഷൻ,SIR0981456,Active
702,പി പി ജേക്കബ്,P P Jacob,ഫിലിപ്പ്,9/22,പള്ളിക്കൽ,Pallickal,പുരുഷൻ,KNB0878645,Active
703,അന്നമ്മ വർഗീസ്,Annamma Varghese,ജേക്കബ് പി പി,9/22,പള്ളിക്കൽ,Pallickal,സ്ത്രീ,SIR0194589,Active
704,അജോ പി ജേക്കബ്,Ajo P Jacob,ജേക്കബ്,9/31,പള്ളിക്കൽ,Pallickal,പുരുഷൻ,KNB1185800,Active
705,ശോഭ,Shobha,മുരളീധരൻ,9/23,മന്നത്ത്,Mannathu,സ്ത്രീ,SIR1159219,Active
706,ഗീതമ്മ,Geethamma,ചന്ദ്രൻ,9/24,കോയിക്ക കുന്നുംപുറത്ത്,Koikka Kunnumpurathu,സ്ത്രീ,SIR1159284,Active
707,മേരിക്കുട്ടി,Marykutty,ദേവസ്യാ,9/25,ഇലഞ്ഞിപ്പറമ്പിൽ,Ilanjipparambil,സ്ത്രീ,SIR0356816,Active
708,തോമസ്കുട്ടി ഇ ഡി,Thomaskutty E D,സെബാസ്റ്റ്യൻ ഇ ഡി,1/136,ഇലഞ്ഞിപ്പറമ്പിൽ,Ilanjipparambil,പുരുഷൻ,SIR1159615,Active
709,ജാൻസി സെവാസ്റ്റ്യൻ,Jancy Sebastian,തോമസ്കുട്ടി ഇ ഡി,9/25,ഇലഞ്ഞിപ്പറമ്പിൽ,Ilanjipparambil,സ്ത്രീ,SIR1159516,Active
710,എമിൽ തോമസ്,Emil Thomas,തോമസ് കുട്ടി ഇ ഡി,1/136,ഇലഞ്ചിപറമ്പിൽ,Ilanchiparambil,പുരുഷൻ,KNB1216969,Active
711,അജയ് തോമസ്,Ajay Thomas,തോമസ് കുട്ടി ഇ ഡി,1/136,ഇലഞ്ഞിപ്പറമ്പിൽ,Ilanjipparambil,പുരുഷൻ,SIR0066126,Active
712,ബിജു ജോർജ്ജ്,Biju George,ജോർജ്ജ് മാത്യു,10/10,വെളുത്തേടത്തു വീട്,Veluthedathu Veedu,സ്ത്രീ,SIR0378570,Active
713,ഗോപാലകൃഷ്ണപിള്ള,Gopalakrishnapillai,പരമേശ്വരപിള്ള,9/27,പിച്ചനാട്ട്,Pichanattu,പുരുഷൻ,SIR0443317,Active
714,വിജയമ്മ,Vijayamma,ഗോപാലകൃഷ്ണപിള്ള,9/27,പിച്ചനാട്ട്,Pichanattu,സ്ത്രീ,SIR1159813,Active
715,ഗീതാലക്ഷ്‌മി എ കെ,Geethalekshmi A K,മധുസൂദനൻ നായർ എം വി,11/506,പിച്ചനാട്ട്,Pichanattu,സ്ത്രീ,FLT1139591,Active
716,കോമളവല്ലി,Komalavalli,സുരേന്ദ്രൻ പിള്ള,9/28,മന്നാരപടവത്ത്,Mannarapadavathu,സ്ത്രീ,SIR1159821,Active
717,സുനിതാദേവി റ്റി എസ്,Sunithadevi T S,സുരേന്ദ്രൻ പിള്ള,10/40,മണ്ണാരപടവത്ത്,Mannarapadavathu,സ്ത്രീ,KNB1232669,Active
718,അശ്വതി റ്റി കെ,Aswathy T K,ശിവപ്രസാദ് എസ്,9/30,പിച്ചനാട്ട്,Pichanattu,സ്ത്രീ,SIR0981068,Active
719,സരസ്വതിയമ്മ,Saraswathiyamma,ഗോപാലപിള്ള നായർ,11/38,ചെറുവള്ളിൽ,Cheruvallil,സ്ത്രീ,SIR1159839,Active
720,പൊന്നമ്മ,Ponnamma,കൃഷ്ണപിള്ള,9/31,ഐക്കര ശാന്തിഭവൻ,Ikkara Shanthibhavan,സ്ത്രീ,SIR1159847,Active
721,ശ്രീദേവിയമ്മ സി ജി,Sreedeviyamma C G,ഭാർഗവൻ പിള്ള,11/310,ഐക്കര,Ikkara,സ്ത്രീ,SIR0827733,Active
722,ഗോപാലകൃഷ്ണപിള്ള,Gopalakrishnapillai,കൃഷ്ണപിള്ള,9/31,ഐക്രശാന്തിഭവൻ,Ikrashanthibhavan,പുരുഷൻ,KNB0825596,Active
723,പ്രദീപ് കുമാർ ജി,Pradeep Kumar G,ഗോപാലകൃഷ്ണ പിള്ള കെ കെ,10/45,ഐക്കര ശാന്തിഭവനം,Ikkara Shanthibhavanam,പുരുഷൻ,KNB1271949,Active
724,പ്രവീൺകുമാർ ജി,Praveenkumar G,ഗോപാലകൃഷ്ണപിള്ള,10/45,ഐക്കര,Ikkara,പുരുഷൻ,SIR0396689,Active
725,കനകമ്മ,Kanakamma,വാസുദേവൻ പിള്ള,9/33,മഠത്തിൽ,Madathil,സ്ത്രീ,SIR1159862,Active
726,സോമശേഖരൻ പിള്ള,Somasekharan Pillai,വാസുദേവൻ പിള്ള,9/33,മഠത്തിൽ,Madathil,പുരുഷൻ,SIR1159870,Active
727,ഉണ്ണികൃഷ്ണൻ നായർ,Unnikrishnan Nair,വാസുപിള്ള,9/33എ,മാത്തിൽ,Mathil,പുരുഷൻ,KNB0904979,Active
728,രാജിമോൾ ടി ആർ,Rajimol T R,സന്തോഷ് കുമാർ ഐ വി,9/42,ഐക്കര,Ikkara,സ്ത്രീ,FPV1491174,Active
729,നിതിൻ ചാക്കോ ജോർജ്,Nithin Chacko George,ഏലിയാമ്മ ജോർജ്,9/587,താഴത്തു മോടയിൽ,Thazhathu Modayil,പുരുഷൻ,SIR0680785,Active
730,ഗീത,Geetha,മോഹൻ,9/35ബി,നെടുംങ്ങാട്ട്,Nedumngattu,സ്ത്രീ,SIR1159904,Active
731,ഇന്ദിരാമ്മ,Indiramma,വിശ്വനാഥൻ നായർ,9/36,പാലത്തിട്ട,Palathitta,സ്ത്രീ,SIR0901454,Active
732,ധനലക്ഷ്‌മി കെ,Dhanalekshmi K,ശ്രീകുമാർ കെ ജി,11/547,കൊട്ടാരത്തിൽ പടിഞ്ഞാറേതിൽ,Kottarathil Padinjarethil,സ്ത്രീ,SIR0072397,Active
733,മോഹനൻ,Mohanan,കൃഷ്ണപിള്ള,9/36എ,പാലത്തിട്ട,Palathitta,പുരുഷൻ,SIR1159912,Active
734,അമ്മിണിയമ്മ,Amminiyamma,രഘുനാഥൻ പിള്ള,9/38ബി,മന്നത്ത്,Mannathu,സ്ത്രീ,SIR1159508,Active
735,സുമംഗലാദേവി,Sumangaladevi,സുരേന്ദ്രൻ നായർ,9/38,ചെറുവള്ളിൽ,Cheruvallil,സ്ത്രീ,SIR1159938,Active
736,സുബ്രമണി എസ്,Subramani S,പെരിയസ്വാമി,10/37 എ,മന്നത്ത്,Mannathu,പുരുഷൻ,KNB1322593,Active
737,രാജശേഖരൻ പിള്ള സി ആർ,Rajasekharan Pillai C R,രാമചന്ദ്രൻ പിള്ള,11/318,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,SIR1159177,Active
738,സെൽവി എം,Selvi M,സുബ്രമണി പി,10/37എ,മന്നത്ത്,Mannathu,സ്ത്രീ,KNB1232685,Active
739,വിജയകുമാർ,Vijayakumar,രാമചന്ദ്രൻ പിള്ള,9/38എ,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,SIR0430769,Active
740,പൊന്നമ്മ റ്റി ആർ,Ponnamma T R,വിജയകുമാർ,9/38എ,ചെറുവള്ളിൽ,Cheruvallil,സ്ത്രീ,KNB1321751,Active
741,സുരേഷ് എസ്,Suresh S,സെൽവി,10/37എ,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,SIR1159185,Active
742,സതിഷ് കുമാർ എസ്,Satheesh Kumar S,സെൽവി എം,6/37എ,മന്നത്ത്,Mannathu,പുരുഷൻ,SIR0303008,Active
743,അജിത്ത് വി നായർ,Ajith V Nair,വിജയകുമാർ സി ആർ,9/583,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,SIR0303065,Active
744,സനിൽകുമാർ എം ആർ,Sanilkumar M R,അമ്മിണിയ,10/59,മന്നത്ത്,Mannathu,പുരുഷൻ,SIR0072405,Active
745,ഷീല കെ ജി,Sheela K G,സനിൽകുമാർ എം ആർ,11/321,മന്നത്ത് താഴെ,Mannathu Thazhe,സ്ത്രീ,SIR0785501,Active
746,ലളിതാ വിജയൻ,Lalitha Vijayan,വിജയകുമാർ പി,10/254,പുതുപ്പറമ്പിൽ,Puthupparambil,സ്ത്രീ,SIR0235549,Active
747,നന്ദു രാജ്,Nandu Raj,ദിവാകരൻ രാജേന്ദ്രൻ,5/422,അയിരുത്തറ,Ayiruthara,പുരുഷൻ,SIR0494617,Active
748,പ്രസന്നകുമാരി,Prasannakumari,സോമശേഖരൻ,9/39,ചെറുവള്ളിൽ,Cheruvallil,സ്ത്രീ,SIR0237875,Active
749,ശിവപ്രസാദ് എസ്,Sivaprasad S,സോമൻ,9/38,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,SIR1159193,Active
750,ഏലിയാമ്മ,Eliyamma,ചാക്കോ,9/42,ഇലഞ്ഞിപ്പറമ്പിൽ,Ilanjipparambil,സ്ത്രീ,SIR0302976,Active
751,മോഹനൻ പിള്ള,Mohanan Pillai,കൃഷ്ണപിള്ള,9/43,ഐക്കര,Ikkara,പുരുഷൻ,SIR1159201,Active
752,ഉഷ,Usha,മോഹനൻ,9/43,ഐക്കര,Ikkara,സ്ത്രീ,SIR1159235,Active
753,മായാ മോഹൻ,Maya Mohan,മോഹനൻ പിള്ള,10/437,ഐക്കര,Ikkara,സ്ത്രീ,SIR0151282,Active
754,ഓമനയമ്മ,Omanayamma,വാസുദേവൻ പിള്ള,9746,ചെറുവള്ളിൽ,Cheruvallil,സ്ത്രീ,SIR1159151,Active
755,അഭിലാഷ്‌കുമാർ,Abhilashkumar,വാസുദേവപിള്ള,9/46,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,KNB0825240,Active
756,അജീഷ് കുമാർ സി വി,Ajeesh Kumar C V,വാസുദേവൻ പിള്ള,9/65,ചെറുവള്ളിൽ,Cheruvallil,പുരുഷൻ,KNB1269521,Active
757,ഏലിക്കുട്ടി,Elikutty,ഇടിക്കുള,9/49,പനച്ചിക്കൽ,Panachikkal,സ്ത്രീ,SIR1159540,Active
758,ഷീല ഇടിക്കുള,Sheela Idikkula,ജോർജ്ജ്,11/47,പനച്ചിയ്ക്കൽ,Panachikkal,സ്ത്രീ,KNB0935510,Active
759,അഖില മറിയം ജോർജ്ജ്,Akhila Mariyam George,ജോർജ്ജ് തോമസ്,6/47,പനച്ചിക്കൽ,Panachikkal,സ്ത്രീ,SIR0348987,Active
760,മാത്യു പനച്ചിക്കൽ ഇടിക്കുള,Mathew Panachikkal Idikkula,ഇടിക്കുള,9/50,പനച്ചിക്കൽ,Panachikkal,പുരുഷൻ,SIR1159557,Active
761,ലൈസാമ്മ,Laisamma,മാത്യു,9/50,പനച്ചിക്കൽ,Panachikkal,സ്ത്രീ,KNB1264092,Active
762,ഷെറിൻ മാത്യു,Sherin Mathew,മാത്യു പി ഐ,10/48,പനച്ചിക്കൽ,Panachikkal,സ്ത്രീ,KNB1319557,Active
763,വിബിൻ മാത്യു,Vibin Mathew,മാത്യു പി ഐ,9/66,പനച്ചിക്കൽ,Panachikkal,പുരുഷൻ,SIR0272450,Active
764,മറിയാമ്മ,Mariyamma,പോത്തൻ,9/51,പനച്ചിക്കൽ പുത്തൻ,Panachikkal Puthen,സ്ത്രീ,SIR1159565,Active
765,ഫിലിപ്പ് ഏബ്രഹാം പി,Philip Abraham P,പോത്തൻ പി എം,9/51,പനച്ചിക്കൽ,Panachikkal,പുരുഷൻ,SIR1159573,Active
766,പ്രെയ്‌സ് മറിയം ഏബ്രഹാം,Praise Mariyam Abraham,ഫിലിപ്പ് ഏബ്രഹാം പി,11/273,പനച്ചിക്കൽ,Panachikkal,സ്ത്രീ,SIR0981100,Active
767,രവിധരൻപിള്ള എം ആർ,Ravidharanpillai M R,രാഘവൻ പിള്ള,9/88,മന്ദത്ത്,Mandathu,പുരുഷൻ,SIR0483073,Active
768,ഹരീഷ് ആർ പിള്ള,Hareesh R Pillai,രവിധരൻ പിള്ള എം ആർ,11/309,മന്നത്ത്,Mannathu,പുരുഷൻ,SIR0466631,Active
769,ചാക്കോ,Chacko,മാത്യു,9/55,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,പുരുഷൻ,KNB0933929,Active
770,ഷൈല,Shyla,ചാക്കോ,9/55,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR1159771,Active
771,റിച്ചു റ്റി ചാക്കോ,Richu T Chacko,ചാക്കോ റ്റി എം,9/55,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,പുരുഷൻ,SIR0303271,Active
772,ശിൽപ മെറിൻ ചാക്കോ,Shilpa Merin Chacko,ചാക്കോ റ്റി എം,11/272,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR0761650,Active
773,സോഫിയാമ്മ മാത്യു,Sophiyamma Mathew,മാത്യു ഈശോ ടി,9/56,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,KNB0935098,Active
774,റീന,Reena,യുഗേഷ് കുമാർ റ്റി,9/56,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR0617431,Active
775,റിജോ മാത്യൂ ഈശോ,Rijo Mathew Easo,സോഫിയാമ്മ മാത്യു,9/72,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,പുരുഷൻ,SIR0082065,Active
776,അൻജു മറിയം ഏബ്രഹാം,Anju Mariyam Abraham,റിജോ മാത്യു ഈശോ,10/340,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR0880914,Active
777,ഉമ്മൻ റ്റി എം,Oommen T M,മാത്തൻ,9/59,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,പുരുഷൻ,SIR1159730,Active
778,ഏലിയാമ്മ,Eliyamma,ഉമ്മൻ,9/59,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR1159763,Active
779,നെബു ടി ഉമ്മൻ,Nebu T Oommen,ഉമ്മൻ,9/73,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,പുരുഷൻ,KNB1182914,Active
780,ശാന്തമ്മ,Shanthamma,അച്ചുതൻ പിള്ള,11/308,മന്ദത്ത് ഹൗസ്,Mandathu House,സ്ത്രീ,SIR1159490,Active
781,പ്രകാശ്.എ.പിള്ള,Prakash.A.Pillai,അച്യുതൻപിള്ള,11/308,മന്ദത്ത് ഹൗസ്,Mandathu House,പുരുഷൻ,KNB0936294,Active
782,പ്രദീഷ് എ പിള്ള,Pradeesh A Pillai,ശാന്തമ്മ,9/61,മന്നത്ത്,Mannathu,പുരുഷൻ,KNB1252915,Active
783,ഉണ്ണിക്യഷ്ണൻ പി എം,Unnikrishnan P M,മോഹനകുമാർ,11/55,പാലത്തിട്ട,Palathitta,പുരുഷൻ,SIR0678276,Active
784,പി വി ചാക്കോ,P V Chacko,കുരുവിള വറുഗീസ്,6/19,പള്ളിക്കൽ ഹൌസ്,Pallickal House,പുരുഷൻ,KNB1029164,Active
785,ഓമന,Omana,ചാക്കോ,9/19,പള്ളിക്കൽ,Pallickal,സ്ത്രീ,SIR1159532,Active
786,റിനോ പി ചാക്കോ,Rino P Chacko,ഓമന ചാക്കോ,9/83,പള്ളിക്കൽ,Pallickal,പുരുഷൻ,SIR0348912,Active
787,റിജോ പി ചാക്കോ,Rijo P Chacko,ചാക്കോ പി വി,9/83,പള്ളിയ്ക്കൽ,Pallickal,പുരുഷൻ,SIR0495077,Active
788,റിറ്റോ പി ചാക്കോ,Ritto P Chacko,ചാക്കോ പി വി,11/305,പള്ളിക്കൽ,Pallickal,പുരുഷൻ,SIR0837567,Active
789,അന്നമ്മ തോമസ്,Annamma Thomas,തോമസ് കെ എൻ,11/303,കാരയ്ക്കാട്ടു പീടികയിൽ,Karakkattu Peedikayil,സ്ത്രീ,SIR0779777,Active
790,ബീന,Beena,തോമസ്,9/63,കാരക്കാട്ടുപീടികയിൽ,Karakkattupeedikayil,സ്ത്രീ,SIR1159250,Active
791,നോബിൾ തോമസ്,Noble Thomas,അന്നമ്മ തോമസ്,11/63,കാരക്കാട്ട് പീടികയിൽ,Karakkattu Peedikayil,പുരുഷൻ,KNB1028133,Active
792,രാമൻ രാമകൃഷ്ണ പിള്ള,Raman Ramakrishna Pillai,രാമകൃഷ്ണൻ,11/301,ശിവകാർത്തിക നിലയം,Sivakarthika Nilayam,പുരുഷൻ,SIR0837583,Active
793,ലളിതമ്മ,Lalithamma,രാമൻ പിള്ള,11/301,ശിവകാർത്തിക നിലയം,Sivakarthika Nilayam,സ്ത്രീ,SIR1159086,Active
794,തങ്കമണി,Thankamani,സോമൻ പിള്ള,9/66,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR0837575,Active
795,ഓമന എം പി,Omana M P,രാജൻപിള്ള സി ജി,11/63,ശ്രീനന്ദനം,Sreenandanam,സ്ത്രീ,SIR0817171,Active
796,രജനി ആർ പിള,Rajani R Pilla,രാജൻപിള്ള സി ജി,6/63 എ,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR0096883,Active
797,വിജില മാത്യു,Vijila Mathew,ജോൺ മാത്യു,9/68,വട്ടശേരിൽ,Vattaseril,സ്ത്രീ,SIR1159789,Active
798,സിജോമാത്യു,Sijomathew,വിജിലമാത്യു,9/68,വട്ടശേരിൽ,Vattaseril,പുരുഷൻ,KNB0825828,Active
799,ലക്ഷ്മ്‌മി,Lekshmi,രവീന്ദ്രൻ,9/71,പുൽപ്പാമന്ദത്ത്,Pulpamandathu,സ്ത്രീ,SIR1159680,Active
800,സുകുമാരൻ പി ഇ,Sukumaran P E,ഈശ്വരൻ,11/471,പുൽപ്പാമന്ദത്ത്,Pulpamandathu,പുരുഷൻ,SIR0909325,Active
801,പ്രസന്നകുമാരി ഇ കെ,Prasannakumari E K,സുകുമാരൻ പി ഇ,11/471,പുൽപ്പാമന്ദത്ത്,Pulpamandathu,സ്ത്രീ,SIR0909176,Active
802,മറിയാമ്മ,Mariyamma,വർഗീസ് കെ വി,11/402,കുന്നേത്തറ,Kunnethara,സ്ത്രീ,SIR0505461,Active
803,തോമസ് കെ കെ,Thomas K K,കുര്യൻ തോമസ്,11/594,കുംബ്ലോലിൽ,Kumblolil,പുരുഷൻ,SIR0952341,Active
804,അന്നമ്മ വർഗീസ്,Annamma Varghese,തോമസ് കെ കെ,11/594,കുംബ്ലോലിൽ,Kumblolil,സ്ത്രീ,TFV0487165,Active
805,അരുൺ കെ തോമസ്,Arun K Thomas,തോമസ് കെ കെ,11/594,കുംബ്ലോലിൽ,Kumblolil,പുരുഷൻ,KNB1289339,Active
806,ജൂബി മെറിൻ ജോർജ്,Jubi Merin George,അരുൺ കെ തോമസ്,11/594,കുംബ്ലോലിൽ,Kumblolil,സ്ത്രീ,IOZ1057769,Active
807,നിമ്മി മറിയം വർഗീസ്,Nimmy Mariyam Varghese,വർഗീസ് വി കെ,9/72,കുന്നേതറ,Kunnethara,സ്ത്രീ,SIR0422865,Active
808,ഏലിയാമ്മ,Eliyamma,ചെറിയാൻ,9/74,കുന്നേത്ര,Kunnethra,സ്ത്രീ,SIR1159441,Active
809,വർഗ്ഗീസ്ചെറിയാൻ,Varghesecherian,ഏലിയാമ്മ ചെറിയാൻ,9/74,കുന്നേത്ര,Kunnethra,പുരുഷൻ,KNB0825539,Active
810,റ്റി എം മാത്തൻ,T M Mathan,റ്റി ഇ മാത്തൻ,9/75,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,പുരുഷൻ,SIR1159748,Active
811,ഏലിയാമ്മ,Eliyamma,മാത്തൻ,9/75,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR1159755,Active
812,ബിൻസി മെറിൻ മാത്യൂ,Bincy Merin Mathew,മാത്തൻ റ്റി എം,9/69,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,KNB1273135,Active
813,ബെറ്റ്സി അനിറ്റ് മാത്യൂ,Betsy Anit Mathew,മാത്തൻ റ്റി എം,9/69,തൈക്കൂട്ടത്തിൽ,Thaikkoottathil,സ്ത്രീ,SIR0301655,Active
814,ശോഭന,Shobhana,രവീന്ദ്രപണിക്കർ,9/77,ചാറുവേലിൽ,Charuvelil,സ്ത്രീ,SIR1027788,Active
815,അഭിലാഷ്‌കുമാർ,Abhilashkumar,രവിന്ദ്രപണിക്കർ,6/,ചാരുവേലിൽ,Charuvelil,പുരുഷൻ,SIR1159045,Active
816,അനീഷ് കുമാർ സി ആർ,Aneesh Kumar C R,രവീന്ദ്രപണിക്കർ,9/91,ചാറുവേലിൽ,Charuvelil,പുരുഷൻ,KNB1153261,Active
817,സി എം ജോൺ,C M John,മാത്യു,9/78,ചക്കാലയിൽ,Chakkalayil,പുരുഷൻ,KNB0880567,Active
818,റേച്ചൽ,Rachel,ജോൺ,9/78,ചക്കാലയിൽ,Chakkalayil,സ്ത്രീ,SIR1159060,Active
819,സി എം മത്തായി,C M Mathai,മാത്യു,9/79,ചക്കാലയിൽ,Chakkalayil,പുരുഷൻ,SIR1159052,Active
820,അജി.സി.മാത്യു,Aji.C.Mathew,മത്തായി,9/79,ചക്കാലയിൽ,Chakkalayil,പുരുഷൻ,KNB0902841,Active
821,ലീലാമ്മ,Leelamma,മാത്യു,11/337,കൊച്ചുപാലയ്ക്കൽ,Kochupalakkal,സ്ത്രീ,SIR0833475,Active
822,മാത്യു,Mathew,ജേക്കബ്,9/83,കൊച്ചുപാലക്കൽ,Kochupalakkal,പുരുഷൻ,SIR1159268,Active
823,മേബിൾ തങ്കം മാത്യു,Mable Thankam Mathew,മാത്യു ജേക്കബ്,9/83,കൊച്ചുപാലക്കൽ,Kochupalakkal,സ്ത്രീ,KNB1269489,Active
824,സോഫി എൽസാ മാത്യു,Sophy Elsa Mathew,മാത്യു ജേക്കബ്,10/121,കൊച്ചുപാലക്കൽ,Kochupalakkal,സ്ത്രീ,SIR0128009,Active
825,ജേക്കബ് ചെറിയാൻ,Jacob Cherian,ചെറിയാൻ എം എം,11/394,മഠത്തുംകുന്നേൽ ഗിൽഗാൽ,Madathumkunnel Gilgal,പുരുഷൻ,SIR0785535,Active
826,കെരൻ സാറ ജേക്കബ്,Keren Sara Jacob,ജേക്കബ് ചെറിയാൻ,11/394,മഠത്തുംകുന്നേൽ ഗിൽഗാൽ,Madathumkunnel Gilgal,സ്ത്രീ,SIR0752048,Active
827,കെസിയ എൽസാ ജേക്കബ്,Kezia Elsa Jacob,ജേക്കബ് ചെറിയാൻ,11/394,മാത്തുംകുന്നേൽ ഗിൽഗാൽ,Mathumkunnel Gilgal,സ്ത്രീ,SIR0752030,Active
828,വർക്കി റ്റി എം,Varkey T M,മാത്യു റ്റി വി,9/92,തടത്തിൽ,Thadathil,പുരുഷൻ,KNB0934174,Active
829,ആഷ്ലി വർക്കി,Ashly Varkey,വർക്കി റ്റി എം,6/105,തടത്തിൽ,Thadathil,സ്ത്രീ,SIR0452656,Active
830,മാത്യുമാത്യു,Mathewmathew,മാത്യൂ,9/185,ആലുങ്കൽ,Alunkal,പുരുഷൻ,SIR0680645,Active
831,മറിയാമ്മ,Mariyamma,മാത്യു,5/185,ആലുങ്കൽ,Alunkal,സ്ത്രീ,SIR0680678,Active
832,ജോഷി എം മാത്യു,Joshi M Mathew,മാത്യു മാത്യു,4/276,ആലുങ്കൽ,Alunkal,പുരുഷൻ,SIR0879205,Active
833,വർഗീസ് ജോർജ്ജ് പി,Varghese George P,ജോർജ്,11/404,പ്രമാടിക്കുഴിയിൽ,Pramadikkuzhiyil,പുരുഷൻ,SIR0098418,Active
834,റ്റിജുമോൻ എം ജി,Tijumon M G,മോഹൻ ജി,14/425,ഗ്രേസ് വില്ല,Grace Villa,പുരുഷൻ,KNB1190008,Active
835,ലിജി സാറാ തോമസ്,Liji Sara Thomas,ജോർജ് തോമസ് പി ജോർജ്,ഗ്രെയ്‌സ് വിലാ,Grace Villa,സ്ത്രീ,SIR0389312,Active
836,ലിബി ആനി തോമസ്,Liby Annie Thomas,റ്റിജുമോൻ മോഹൻ,10/440,പയറ്റുകാലായിൽ,Payattukalayil,സ്ത്രീ,KNB1202134,Active
837,സാറാമ്മ റ്റി റ്റി,Saramma T T,ചെറിയാൻ,9/94,മഠത്തുംകുന്നേൽ,Madathumkunnel,സ്ത്രീ,SIR0680827,Active
838,കുഞ്ഞമ്മ,Kunjamma,മാത്യുസ്,11/328,മാത്തും കുന്നേൽ,Mathum Kunnel,സ്ത്രീ,SIR0680926,Active
839,ബിനി കെ നൈനാൻ,Bini K Ninan,ജേക്കബ് ചെറിയാൻ,11/394,മാത്തുംകുന്നേൽ ഗിൽഗാൽ,Mathumkunnel Gilgal,സ്ത്രീ,KNB1154731,Active
840,മേരി,Mary,ചാക്കോ,9/95 എ,കുന്നാമണ്ണിൽ,Kunnamannil,സ്ത്രീ,SIR1159433,Active
841,ഫിലിപ്പ് കെ എ,Philip K A,ഏബ്രഹാം കെ റ്റി,0/11,വില്ലോത്ത്പറമ്പിൽ,Villothuparambil,പുരുഷൻ,SIR0814657,Active
842,വർഗീസ് മാത്തൻ,Varghese Mathan,മാത്തൻ വർഗീസ്,9/95,പാലയ്ക്കൽ,Palackal,പുരുഷൻ,KNB0825612,Active
843,മേരി മാത്യു,Mary Mathew,ഫിലിപ്പ് കെ എ,11/395,വില്ലോത്തുപറമ്പിൽ,Villothuparambil,സ്ത്രീ,SIR0814640,Active
844,സാലി,Saly,വർഗീസ് മാത്തൻ,9/95,പാലയ്ക്കൽ,Palackal,സ്ത്രീ,KNB0825620,Active
845,ലിമ അന്ന ഫിലിപ്പ്,Lima Anna Philip,ഫിലിപ്പ് കെ എ,11/395,വില്ലോത്തുപറമ്പിൽ,Villothuparambil,സ്ത്രീ,SIR0814665,Active
846,റിക്കി വറുഗീസ് ഫിലിപ്പ്,Ricky Varghese Philip,ഫിലിപ്പ് കെ എ,11/395,വില്ലോത്തുപറമ്പിൽ,Villothuparambil,പുരുഷൻ,KNB1029891,Active
847,രാജേന്ദ്രൻ സി.കെ.,Rajendran C.K.,കുട്ടപ്പൻ,9/,ചാലുങ്കൽ,Chalunkal,പുരുഷൻ,SIR0302547,Active
848,വിഷ്ണുരാജ്,Vishnuraj,രാജേന്ദ്രൻ സി.കെ.,6/88,ചാലുങ്കൽ,Chalunkal,പുരുഷൻ,KNB0825844,Active
849,രമണി,Ramani,സുകുമാരൻ,6/93,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR0505347,Active
850,പ്രകാശ്,Prakash,രമണി,6/93,ചാലുങ്കൽ,Chalunkal,പുരുഷൻ,SIR0505362,Active
851,അമ്പിളി,Ambili,പ്രകാശ്,6/93,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,KNB1205160,Active
852,പ്രസാദ്,Prasad,രമണി,10/96സി,ചാലുങ്കൽ,Chalunkal,പുരുഷൻ,SIR0505354,Active
853,രജനി,Rajani,പ്രസാദ് സി എസ്,10/96സി,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR0814624,Active
854,പ്രവീണ സി പി,Praveena C P,പ്രസാദ് സി എസ്,11/147,ചാലുങ്കൽ,Chalunkal,സ്ത്രീ,SIR0833749,Active
855,കുര്യൻ ഇ എ,Kurian E A,ഏബ്രഹാം,9/94,ഇടത്തുണ്ടിയിൽ,Idathundiyil,പുരുഷൻ,SIR0505388,Active
856,വത്സമ്മ,Valsamma,സണ്ണി,11/325,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR0518928,Active
857,സ്നേഹ കുര്യൻ,Sneha Kurian,കുര്യൻ ഇ എ,9/94,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR0467126,Active
858,ജോസഫ് ഇ എ,Joseph E A,അവിരാ എബ്രഹാം,9/903,ഇടത്തുണ്ടിയിൽ,Idathundiyil,പുരുഷൻ,SIR0494088,Active
859,തങ്കപ്പൻ,Thankappan,കൃഷ്ണനാശാരി,11/326,കാട്ടിൽ,Kattil,പുരുഷൻ,SIR0680652,Active
860,മേരിക്കുട്ടി,Marykutty,ജോസഫ് ഇ എ,9/903,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR0494062,Active
861,എബ്രഹാം ജോസഫ്,Abraham Joseph,ജോസഫ് ഇ എ,9/903,ഇടത്തുണ്ടിയിൽ,Idathundiyil,പുരുഷൻ,KNB0825513,Active
862,നോയല് ജോസഫ്,Noel Joseph,അബ്രഹാം ജോസഫ്,324,ഇടത്തുണ്ടിയിൽ വീട്,Idathundiyil Veedu,പുരുഷൻ,SIR1729821,Active
863,ഷേർലിമോൾ സി,Sherlymol C,ഏബ്രഹാം ജോസഫ്,11/324,ഇടത്തുണ്ടിയിൽ,Idathundiyil,സ്ത്രീ,SIR0837906,Active
864,രഞ്ചു കെ തങ്കപ്പൻ,Ranju K Thankappan,തങ്കപ്പൻ,11/326,കാട്ടിൽ,Kattil,പുരുഷൻ,KNB1153287,Active
865,അന്നമ്മ വർഗീസ്,Annamma Varghese,വർഗീസ് ജോർജ്ജ്,11/249,പാലയ്ക്കൽ,Palackal,സ്ത്രീ,SIR0814103,Active
866,ബിനിത ചിന്നു വർഗീസ്,Binitha Chinnu Varghese,അന്നമ്മ വർഗീസ്,9/119,പാലയ്ക്കൽ,Palackal,സ്ത്രീ,SIR1018878,Active
867,മിനി വി ഡി,Mini V D,വറുഗീസ് വി കെ,9/72,കുന്നേത്തറ,Kunnethara,സ്ത്രീ,SIR1018860,Active
868,വറുഗീസ് വി കെ,Varghese V K,വർഗീസ് കെ വി,9/72,കുന്നേത്തറ,Kunnethara,പുരുഷൻ,KNB1271493,Active
869,അലെൻ തോമസ് ജോർജ്,Alen Thomas George,ജോർജ് തോമസ്,11/269,പനച്ചിക്കല്,Panachikkal,പുരുഷൻ,SIR1021203,Active
870,ആകാശ് പ്രകാശ്,Akash Prakash,പ്രകാശ് സി എസ്,11/502,ചാലുങ്കൽ,Chalunkal,പുരുഷൻ,SIR1021625,Active
871,ചൈതന്യ സന്തോഷ്,Chaithanya Santhosh,സന്തോഷ് കുമാർ,11/415,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR1035286,Active
872,നിഴൽ ഈപ്പൻ ഫിലിപ്പ്,Nizhal Eapen Philip,ഫിലിപ്പ് തോമസ്,11/538,പഴൂർ,Pazhoor,പുരുഷൻ,SIR1039718,Active
873,ജോജി വറുഗീസ്,Joji Varghese,വറുഗീസ് പി കെ,04/184,പാലമറ്റം,Palamattam,പുരുഷൻ,SIR1041482,Active
874,മധുസൂദനൻ നായർ,Madhusoodanan Nair,വാസുദേവൻ പിള്ള,11/506,പിച്ചനാട്ട്,Pichanattu,പുരുഷൻ,SIR1048818,Active
875,അനിലകുമാരി എം കെ,Anilakumari M K,ശശിധരൻ പിള്ള,11/584,വൈക്കത്ത്,Vaikkathu,സ്ത്രീ,SIR1048826,Active
876,വി ജീ എസ് പിള്ളൈ,V G S Pillai,ഗോപാല പിള്ള,11/584,വൈക്കത്ത്,Vaikkathu,പുരുഷൻ,SIR1048834,Active
877,സന്തോഷ് കുര്യൻ,Santhosh Kurian,കുര്യൻ ഇ എ,11/325,ഇടത്തുണ്ടിയില്,Idathundiyil,പുരുഷൻ,SIR1055698,Active
878,ജിനുമോള് ഫ്രാൻസിസ്,Jinumol Francis,വർഗ്ഗീസ് ചെറിയാൻ,8/403,കുന്നേത്ര,Kunnethra,സ്ത്രീ,DVJ1597830,Active
879,നിത്യ ത്രേസിയാ വർഗീസ്,Nithya Thresia Varghese,വി കെ വർഗീസ്,9/72,കുന്നത്തറ,Kunnathara,സ്ത്രീ,SIR1069871,Active
880,തോമസ് മാത്യു,Thomas Mathew,ജോൺ മാത്യു,3/319,കൊല്ലാൽ,Kollal,പുരുഷൻ,SIR1068980,Active
881,ജിജിൻ മാത്യു വർഗീസ്,Jijin Mathew Varghese,വർഗീസ് പി എം,9/95,പാലയ്ക്കൽ,Palackal,പുരുഷൻ,KNB1283902,Active
882,ജെമീമ സാറ ജാക്കോബ്,Jemimah Sara Jacob,ജേക്കബ് ചെറിയാൻ,,മഠത്തുംകുന്നേൽ ഗിൽഗാൽ,Madathumkunnel Gilgal,സ്ത്രീ,SIR1628668,Active
883,സോജി അലക്സാണ്ടർ,Soji Alexander,പി വി അലക്സാണ്ടർ,2/540,കിളിച്ചിമലയിൽ,Kilichimalayil,പുരുഷൻ,SIR1629070,Active
884,അന്നമ്മ മാത്യു,Annamma Mathew,സോജി അലക്സാണ്ടർ,,കിളിച്ചിമലയിൽ,Kilichimalayil,സ്ത്രീ,SIR1741396,Active
885,അലീന പി തോമസ്,Aleena P Thomas,തോമസ് പി വറുഗീസ്,,പള്ളിക്കൽ,Pallickal,സ്ത്രീ,SIR1752393,Active
886,മുഹമ്മദ് അലി,Muhammed Ali,സാദത്ത് എൻ കെ,04/750,തുണ്ടുപുരയിടം,Thundupurayidam,പുരുഷൻ,SIR1758499,Active
887,വിശാഖ് എച്ച് നായർ,Visakh H Nair,ഹരിതകുമാർ,,തടത്തിൽ കിഴക്കതിൽ,Thadathil Kizhakkathil,പുരുഷൻ,SIR1762442,Active
888,പാർവതി കെപി,Parvathy KP,പ്രമോദ് കെപി,,കൂടത്തിങ്കൽ ഹൗസ്,Koodathinkal House,സ്ത്രീ,SIR1763937,Active
889,കാർത്തിക് വിനോദ്,Karthik Vinod,വിനോദ് കുമാർ റ്റി ഡി,,തെക്കേക്കുറ്റ് ഹൗസ്,Thekkekuttu House,പുരുഷൻ,SIR1765700,Active
890,ലിനു വർഗ്ഗീസ്,Linu Varghese,ജോജി വറുഗീസ്,,പാലമറ്റം,Palamattam,സ്ത്രീ,SIR1768415,Active
891,സന്തോഷ്‌കുമാർ എം ആർ,Santhoshkumar M R,അമ്മിണിഅമ്മ,321,മന്നത്ത്,Mannathu,പുരുഷൻ,SIR1768936,Active
892,ഏഞ്ചലിൻ സൂസൻ ചെറിയാൻ,Angelin Susan Cherian,സന്തോഷ് സി ചെറിയാൻ,,കുന്നത്തു ഹൗസ്,Kunnathu House,സ്ത്രീ,SIR1766211,Active
893,ഷെഫീന സാദത്ത്,Shefeena Sadath,സാദത്ത് എൻ കെ,04/750,പാറേൽ തുണ്ടുപുരയിടം,Parel Thundupurayidam,സ്ത്രീ,SIR1767268,Active
894,അന്നമ്മ സാം,Annamma Sam,സാം സാമുവൽ,,പുളിക്കൽ ഹൗസ്,Pulickal House,സ്ത്രീ,SIR1773118,Active
895,സാം സാമുവൽ,Sam Samuel,പി ഐ സാമുവൽ,,പുളിക്കൽ ഹൗസ്,Pulickal House,പുരുഷൻ,SIR1773266,Active
896,ധനുജ ജി,Dhanuja G,രാഹുൽ മുരളി നായർ,,തറയത്തു,Tharayathu,സ്ത്രീ,SIR1777523,Active
897,അർപ്പൺ ജേക്കബ് ചെറിയാൻ,Arpan Jacob Cherian,ക്രിസ്റ്റി കുരുവിള ചെറിയാൻ,03/345,കുന്നത്ത് ഹൗസ്,Kunnathu House,പുരുഷൻ,SIR1778653,Active
898,അൽഫാന സാലി,Alfana Sali,സാലി പി എച്ച്,05/299,നെല്ലിമല,Nellimala,സ്ത്രീ,SIR1782184,Active
899,ദേവിക സന്തോഷ്,Devika Santhosh,സന്തോഷ്കുമാർ ഐ,11/489,ഐക്കര,Ikkara,സ്ത്രീ,SIR1785773,Active
900,ഫാത്തിമ സാദത്ത്,Fathima Sadath,സാദത്ത് എൻ കെ,04/750,പാറയിൽ തുണ്ടിപുരയിടം,Parayil Thundipurayidam,സ്ത്രീ,SIR1787670,Active
901,അമ്പിളി വിജയൻ,Ambili Vijayan,അനീഷ് റ്റി,,ഓലിക്കൽ,Olikkal,സ്ത്രീ,SIR1792464,Active
902,അമ്പിളി,Ambili,പ്രമോദ്,11/625,കോയിക്കൽ കുന്നുംപുറത്ത്,Koikkal Kunnumpurathu,സ്ത്രീ,SIR1792746,Active
903,ബിന്ദു ജോൺ,Bindu John,ജോൺ സി ഒ,,ഇടത്തുംതുണ്ടിയിൽ,Idathumthundiyil,സ്ത്രീ,HZQ1084102,Active
904,തെരേസ ജോൺ,Theresa John,ജോൺ സേവ്യർ,,മൂലവിളയിൽ,Moolavilayil,സ്ത്രീ,SIR1795178,Active
905,സിനു പി ഒ,Sinu P O,വിദ്യ സിനു,04/1975,പുത്തൻപുരക്കൽ,Puthenpurakkal,പുരുഷൻ,SIR1797273,Active
906,സാറാമ്മ കോശി,Saramma Koshy,മാത്യു ജിലോ നൈനാൻ,,ഐക്കരമേഹൃത്ത്,Ikkaramehrathu,സ്ത്രീ,SIR1797877,Active
907,മാത്യു ജിലോ നൈനാൻ,Mathew Jilo Ninan,നൈനാൻ മാത്യു,,ഐക്കര പ്പത്ത്,Ikkarappathu,പുരുഷൻ,SIR1798560,Active
908,റിയ ബിജു,Riya Biju,ബിജുമോൻ കെ,,മുലവിളയിൽ,Mulavilayil,സ്ത്രീ,SIR1799105,Active
909,വന്ദന പ്രസാദ്,Vandana Prasad,എം കെ പ്രസാദ്,,മോടയിൽ,Modayil,സ്ത്രീ,SIR1802271,Active
910,ജയദേവകുമാർ ഏ.ആർ.,Jayadevakumar A.R.,രാഘവൻ നായർ,,കാക്കോത്തുമണ്ണിൽ അമ്മവീട്,Kakkothumannil Ammaveedu,പുരുഷൻ,HHY1160977,Active
911,അനു ജെ നായർ,Anu J Nair,ജയരാജ് എൻ,,കിഴക്കേതിൽ,Kizhakkethil,സ്ത്രീ,TFV0081877,Active
912,ജയരാജ് എൻ നായർ,Jayaraj N Nair,നാരായണൻ നായർ,,കിഴക്കേതിൽ,Kizhakkethil,പുരുഷൻ,TFV0196279,Active
913,ജയകുമാരി എം എൻ,Jayakumari M N,ജയദേവകുമാർ എ ആർ,,കാക്കോത്തുമണ്ണിൽ അമ്മവീട്,Kakkothumannil Ammaveedu,സ്ത്രീ,HHY1312966,Active
914,സൂര്യ രാജീവ്,Surya Rajeev,രാജീവ് വി ടി,,സൂര്യ നിവാസ്,Surya Nivas,സ്ത്രീ,SIR1807585,Active
915,ലിബിൻ മാത്യൂസ ജേക്കബ്,Libin Mathewsa Jacob,കെ സി,,,,പുരുഷൻ,SIR1816164,Active
916,ജെസ്സിൻ സാറ ജെയിംസ്,Jessin Sara James,ലിബിൻ മാത്യു ജേക്കബ്,456,,,സ്ത്രീ,SIR1816172,Active
917,സൂസൻ ജേക്കബ്,Susan Jacob,ഷിലു ജോർജ്ജ്,603,,,സ്ത്രീ,SIR1816230,Active
918,റിനു വർഗീസ്,Rinu Varghese,ലീലാമ്മ വർഗീസ്,10,,,പുരുഷൻ,SIR1816354,Active
919,ചക്കാലയിൽ മാത്യൂ,Chakkalayil Mathew,ശോഭ മാത്യു,,ചകലായില്,Chakkalayil,പുരുഷൻ,SIR1816776,Active
920,ഭാവന വറുഗീസ്,Bhavana Varghese,ജേക്കബ് വർഗീസ്,,കിനഅട്ടുകാര ഭാവന വിലാസ്,Kinattukara Bhavana Vilas,സ്ത്രീ,SIR1817220,Active
921,ഷാജി തോമസ്,Shaji Thomas,ഷീന ജോസഫ്,474,,,പുരുഷൻ,SIR1817402,Active
922,ബിബിൻ പി തോമസ്,Bibin P Thomas,തോമസ് സ്കാരിയാ,,പാറയിൽ ചിറയിൽ,Parayil Chirayil,പുരുഷൻ,SIR1817501,Active
923,മേരികുട്ടി ആൻറണി,Marykutty Antony,ആൻറണി മാത്യൂ,1/153,വാലിയകണ്ടത്തിൽ,Valiyakandathil,സ്ത്രീ,SIR1817949,Active
924,അനിഷ് റ്റി,Anish T,തങ്കപ്പൻ,650,ഓലിക്കൽ,Olikkal,പുരുഷൻ,SIR1821495,Active
925,നേഹ റേച്ചൽ സുനിൽ,Neha Rachel Sunil,സുനിൽ റ്റി ചെറിയാൻ,03/330,തേക്കനാൽ ഹൗസ്,Thekkanal House,സ്ത്രീ,SIR1821925,Active
926,രുബെൻ സോളമൻ ജോർജ്ജ്,Ruben Solomon George,മെറിജാ റോയ്,3/308,ജ്യോതി വില ക്,Jyothi Vilakku,പുരുഷൻ,SIR1826163,Active
927,അശ്വതി കുഞ്ഞുമോൻ,Aswathy Kunjumon,അജിത്ത് വി നായർ,,ചെറുവള്ളില്,Cheruvallil,സ്ത്രീ,SIR1829266,Active
928,നബീസ എം എസ്,Nabeesa M S,നാസർ എൻ എ,,നെല്ലിമല,Nellimala,സ്ത്രീ,HZQ0936856,Active
929,നോഹേൽ ജോൺ മാത്യു,Noel John Mathew,സിജോ മാത്യു,,വട്ടശ്ശേരിൽ,Vattasseril,പുരുഷൻ,SIR1835578,Active
930,നോറ മറിയം മാത്യു,Nora Mariyam Mathew,സിജോ മാത്യു,,വട്ടശ്ശേരിൽ,Vattasseril,സ്ത്രീ,SIR1835487,Active
`;

