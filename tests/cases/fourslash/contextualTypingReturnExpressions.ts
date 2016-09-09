/// <reference path='fourslash.ts'/>

////interface A { }
////var f44: (x: A) => (y: A) => A = /*1*/x => /*2*/y => /*3*/x;

verify.quickInfoAt("1", "(parameter) x: A");
verify.quickInfoAt("2", "(parameter) y: A");
verify.quickInfoAt("3", "(parameter) x: A");
