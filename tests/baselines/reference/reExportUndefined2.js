//// [tests/cases/compiler/reExportUndefined2.ts] ////

//// [a.ts]

var undefined;
export { undefined };

//// [b.ts]
import { undefined } from "./a";
declare function use(a: number);
use(undefined);

//// [a.js]
"use strict";
var undefined;
exports.undefined = undefined;
//// [b.js]
"use strict";
var a_1 = require("./a");
use(a_1.undefined);
