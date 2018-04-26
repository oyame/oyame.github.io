{\rtf1\ansi\ansicpg932\cocoartf1504\cocoasubrtf830
{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset128 HiraginoSans-W3;}
{\colortbl;\red255\green255\blue255;\red140\green155\blue158;\red220\green220\blue220;\red124\green221\blue60;
\red55\green169\blue206;\red230\green203\blue56;}
{\*\expandedcolortbl;;\cssrgb\c61569\c67059\c68235;\cssrgb\c89020\c89020\c89020;\cssrgb\c54510\c87451\c29804;
\cssrgb\c25490\c71765\c84314;\cssrgb\c92157\c82353\c27843;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl500\partightenfactor0

\f0\fs28\fsmilli14400 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // service-worker.js\cf3 \strokec3 \
self.\cf4 \strokec4 addEventListener\cf3 \strokec3 (\cf5 \strokec5 'install'\cf3 \strokec3 , \cf6 \strokec6 function\cf3 \strokec3 (\cf4 \strokec4 e\cf3 \strokec3 ) \{\
  \cf4 \strokec4 console\cf3 \strokec3 .\cf4 \strokec4 log\cf3 \strokec3 (\cf5 \strokec5 '[ServiceWorker] Install'\cf3 \strokec3 );\
\});\
\
self.\cf4 \strokec4 addEventListener\cf3 \strokec3 (\cf5 \strokec5 'activate'\cf3 \strokec3 , \cf6 \strokec6 function\cf3 \strokec3 (\cf4 \strokec4 e\cf3 \strokec3 ) \{\
  \cf4 \strokec4 console\cf3 \strokec3 .\cf4 \strokec4 log\cf3 \strokec3 (\cf5 \strokec5 '[ServiceWorker] Activate'\cf3 \strokec3 );\
\});\
\
\cf2 \strokec2 // 
\f1 \'8c\'bb\'8f\'f3\'82\'c5\'82\'cd\'81\'41\'82\'b1\'82\'cc\'8f\'88\'97\'9d\'82\'f0\'8f\'91\'82\'a9\'82\'c8\'82\'a2\'82\'c6
\f0 Service Worker
\f1 \'82\'aa\'97\'4c\'8c\'f8\'82\'c6\'94\'bb\'92\'e8\'82\'b3\'82\'ea\'82\'c8\'82\'a2\'82\'e6\'82\'a4\'82\'c5\'82\'b7
\f0 \cf3 \strokec3 \
self.\cf4 \strokec4 addEventListener\cf3 \strokec3 (\cf5 \strokec5 'fetch'\cf3 \strokec3 , \cf6 \strokec6 function\cf3 \strokec3 (\cf4 \strokec4 event\cf3 \strokec3 ) \{\});\
}