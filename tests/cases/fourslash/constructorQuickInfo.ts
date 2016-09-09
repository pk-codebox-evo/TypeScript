/// <reference path='fourslash.ts'/>

////class SS<T>{}
////
////var x/*1*/1 = new SS<number>();
////var x/*2*/2 = new SS();
////var x/*3*/3 = new SS;

verify.quickInfoAt("1", "var x1: SS<number>");
verify.quickInfoAt("2", "var x2: SS<{}>");
verify.quickInfoAt("3", "var x3: SS<{}>");
