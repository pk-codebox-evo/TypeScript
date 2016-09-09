/// <reference path='fourslash.ts' />

/////** this is multi declare namespace*/
////namespace mult/*3*/iM {
////    /** class b*/
////    export class b {
////    }
////}
/////** thi is multi namespace 2*/
////namespace mu/*2*/ltiM {
////    /** class c comment*/
////    export class c {
////    }
////}
////
////new /*1*/mu/*4*/ltiM.b();
////new mu/*5*/ltiM.c();

goTo.marker('1');
verify.completionListContains("multiM", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2");

verify.quickInfoAt("2", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2");

verify.quickInfoAt("3", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2");

verify.quickInfoAt("4", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2");

verify.quickInfoAt("5", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2");
