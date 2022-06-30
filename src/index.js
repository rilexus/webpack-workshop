import '@styles/style.css';
// import css from '@styles/style.css';


import value from "./value";
import { makeValue } from "./makeValue";

// if you specify resolve.extensions = ['ts'], you can remove the ".ts" suffix
import { tsValue } from "./ts-value.ts";
import {button} from "@components/button";

console.log(`makeValue: ${makeValue(2)}`);
console.log(`js-value: ${value}`);
console.log(`ts-value: ${tsValue}`);


document.body.appendChild(button({text: 'Click', className: 'button'}))
