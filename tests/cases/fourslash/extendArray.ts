/// <reference path='fourslash.ts'/>

////interface Foo<T> extends Array<T> { }
////var x: Foo<string>;
////var /*1*/r = x[0];

////interface Foo2 extends Array<string> { }
////var x2: Foo2;
////var /*2*/r2 = x2[0];

verify.quickInfoAt("1", "var r: string");
verify.quickInfoAt("2", "var r2: string");
