/// <reference path='fourslash.ts'/>

////declare function f<T>(x: T, y: (p: T) => T, z: (p: T) => T): T;
////var /*1*/result = /*2*/f(0, /*3*/x => null, /*4*/x => x.blahblah);

verify.quickInfoAt("1", "var result: number");
verify.quickInfoAt("2", "function f<number>(x: number, y: (p: number) => number, z: (p: number) => number): number");
verify.quickInfoAt("3", "(parameter) x: number");
verify.quickInfoAt("4", "(parameter) x: number");
