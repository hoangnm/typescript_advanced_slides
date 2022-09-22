const value2: unknown = 42;
const someString: string = value2 as string;
// const otherString = someString.toUpperCase(); // BOOM

let value: any;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK

value.toUpperCase();
