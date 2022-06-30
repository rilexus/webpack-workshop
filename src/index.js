import value from "./value";
import { makeValue } from "./makeValue";

// if you specify resolve.extensions = ['ts'], you can remove the ".ts" suffix
import { tsValue } from "./ts-value.ts";

console.log(`makeValue: ${makeValue(2)}`);
console.log(`js-value: ${value}`);
console.log(`ts-value: ${tsValue}`);
