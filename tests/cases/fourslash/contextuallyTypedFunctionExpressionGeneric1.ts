/// <reference path='fourslash.ts'/>

////interface Comparable<T> {
////    compareTo(other: T): T;
////}
////interface Comparer {
////    <T extends Comparable<T>>(x: T, y: T): T;
////}

////var max2: Comparer = (x/*1*/x, y/*2*/y) => { return x/*3*/x.compareTo(y/*4*/y) };

verify.quickInfoAt("1", "(parameter) xx: any", null);
verify.quickInfoAt("2", "(parameter) yy: any", null);
verify.quickInfoAt("3", "(parameter) xx: any", null);
verify.quickInfoAt("4", "(parameter) yy: any", null);
