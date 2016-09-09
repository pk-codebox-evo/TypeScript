/// <reference path='fourslash.ts' />

/////** This is firstLine
////  * This is second Line
////  * 
////  * This is fourth Line
////  */
////var /*a*/a: string;
/////** 
////  * This is firstLine
////  * This is second Line
////  * 
////  * This is fourth Line
////  */
////var /*b*/b: string;
/////** 
////  * This is firstLine
////  * This is second Line
////  * 
////  * This is fourth Line
////  *
////  */
////var /*c*/c: string;
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param
////  * @random tag This should be third line
////  */
////function /*d*/d(param: string) { /*1*/param = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param
////  */
////function /*e*/e(param: string) { /*2*/param = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1 first line of param
////  *
////  *  param information third line
////  * @random tag This should be third line
////  */
////function /*f*/f(param1: string) { /*3*/param1 = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1
////  *
////  *  param information first line
////  * @random tag This should be third line
////  */
////function /*g*/g(param1: string) { /*4*/param1 = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1
////  *
////  *  param information first line
////  *
////  *  param information third line
////  * @random tag This should be third line
////  */
////function /*h*/h(param1: string) { /*5*/param1 = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1
////  *
////  *  param information first line
////  *
////  *  param information third line
////  *
////  */
////function /*i*/i(param1: string) { /*6*/param1 = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1
////  *
////  *  param information first line
////  *
////  *  param information third line
////  */
////function /*j*/j(param1: string) { /*7*/param1 = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1 hello   @randomtag 
////  *
////  *  random information first line
////  *
////  *  random information third line
////  */
////function /*k*/k(param1: string) { /*8*/param1 = "hello"; }
/////** 
////  * This is firstLine
////  * This is second Line
////  * @param param1 first Line text
////  *
////  * @param param1 
////  *
////  * blank line that shouldnt be shown when starting this 
////  * second time information about the param again
////  */
////function /*l*/l(param1: string) { /*9*/param1 = "hello"; }

verify.quickInfoAt("a", undefined, "This is firstLine\nThis is second Line\n\nThis is fourth Line");

verify.quickInfoAt("b", undefined, "This is firstLine\nThis is second Line\n\nThis is fourth Line");

verify.quickInfoAt("c", undefined, "This is firstLine\nThis is second Line\n\nThis is fourth Line");

verify.quickInfoAt("d", undefined, "This is firstLine\nThis is second Line\n@random tag This should be third line");
verify.quickInfoAt("1", undefined, "");

verify.quickInfoAt("e", undefined, "This is firstLine\nThis is second Line");
verify.quickInfoAt("2", undefined, "");

verify.quickInfoAt("f", undefined, "This is firstLine\nThis is second Line\n@random tag This should be third line");
verify.quickInfoAt("3", undefined, "first line of param\n\nparam information third line");

verify.quickInfoAt("g", undefined, "This is firstLine\nThis is second Line\n@random tag This should be third line");
verify.quickInfoAt("4", undefined, "param information first line");

verify.quickInfoAt("h", undefined, "This is firstLine\nThis is second Line\n@random tag This should be third line");
verify.quickInfoAt("5", undefined, "param information first line\n\nparam information third line");

verify.quickInfoAt("i", undefined, "This is firstLine\nThis is second Line");
verify.quickInfoAt("6", undefined, "param information first line\n\nparam information third line");

verify.quickInfoAt("j", undefined, "This is firstLine\nThis is second Line");
verify.quickInfoAt("7", undefined, "param information first line\n\nparam information third line");

verify.quickInfoAt("k", undefined, "This is firstLine\nThis is second Line\n@randomtag \n\n random information first line\n\n random information third line");
verify.quickInfoAt("8", undefined, "hello   ");

verify.quickInfoAt("l", undefined, "This is firstLine\nThis is second Line");
verify.quickInfoAt("9", undefined, "first Line text\nblank line that shouldnt be shown when starting this \nsecond time information about the param again");
