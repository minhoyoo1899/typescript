"use strict";
function original(a, b) {
    if (typeof a === "number" && b === "number") {
        return a + b;
    }
    else {
        console.log("parameter is type error");
    }
}
console.log(original("1", "2"));
