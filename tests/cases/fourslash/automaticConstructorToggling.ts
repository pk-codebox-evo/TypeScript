/// <reference path='fourslash.ts'/>

////class A<T> { }
////class B<T> {/*B*/ }
////class C<T> { /*C*/constructor(val: T) { } }
////class D<T> { constructor(/*D*/val: T) { } }
////
////new /*Asig*/A<string>();
////new /*Bsig*/B("");
////new /*Csig*/C("");
////new /*Dsig*/D<string>();

var A = 'A';
var B = 'B';
var C = 'C';
var D = 'D'
goTo.marker(B);
edit.insert('constructor(val: T) { }');
verify.quickInfoAt("Asig", "constructor A<string>(): A<string>");

verify.quickInfoAt("Bsig", "constructor B<string>(val: string): B<string>");

verify.quickInfoAt("Csig", "constructor C<string>(val: string): C<string>");

verify.quickInfoAt("Dsig", "constructor D<T>(val: T): D<T>"); // Cannot resolve signature

goTo.marker(C);
edit.deleteAtCaret('constructor(val: T) { }'.length);
verify.quickInfoAt("Asig", "constructor A<string>(): A<string>");
verify.quickInfoAt("Bsig", "constructor B<string>(val: string): B<string>");
verify.quickInfoAt("Csig", "constructor C<T>(): C<T>"); // Cannot resolve signature
verify.quickInfoAt("Dsig", "constructor D<T>(val: T): D<T>"); // Cannot resolve signature

goTo.marker(D);
edit.deleteAtCaret("val: T".length);
verify.quickInfoAt("Asig", "constructor A<string>(): A<string>");
verify.quickInfoAt("Bsig", "constructor B<string>(val: string): B<string>");
verify.quickInfoAt("Csig", "constructor C<T>(): C<T>"); // Cannot resolve signature
verify.quickInfoAt("Dsig", "constructor D<string>(): D<string>");
