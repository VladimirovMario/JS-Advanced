export function sum(a,b,c) {
    return a + b + c
}

import {data} from './app.js'
console.log(`Exported from "app.js". Imported from "module.js"`, data);