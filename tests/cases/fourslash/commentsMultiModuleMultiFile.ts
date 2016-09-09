/// <reference path='fourslash.ts' />

// @Filename: commentsMultiModuleMultiFile_0.ts
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

// @Filename: commentsMultiModuleMultiFile_1.ts
/////** this is multi namespace 3 comment*/
////namespace mu/*6*/ltiM {
////    /** class d comment*/
////    export class d {
////    }
////}
////new /*7*/mu/*8*/ltiM.d();

goTo.marker('1');
verify.completionListContains("multiM", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

verify.quickInfoAt("2", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

verify.quickInfoAt("3", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

verify.quickInfoAt("4", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

verify.quickInfoAt("5", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

verify.quickInfoAt("6", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

goTo.marker('7');
verify.completionListContains("multiM", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");

verify.quickInfoAt("8", "namespace multiM", "this is multi declare namespace\nthi is multi namespace 2\nthis is multi namespace 3 comment");
