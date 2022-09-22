let value_unknown: unknown;

let value1: unknown = value_unknown; // OK
let value2: any = value_unknown; // OK
let value3: boolean = value_unknown; // Error
let value4: number = value_unknown; // Error
let value5: string = value_unknown; // Error
let value6: object = value_unknown; // Error
let value7: any[] = value_unknown; // Error
let value8: Function = value_unknown; // Error

value_unknown.foo.bar; // Error
value_unknown.trim(); // Error
value_unknown(); // Error
new value_unknown(); // Error
value_unknown[0][1]; // Error

function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  return String(value);
}
