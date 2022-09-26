"use strict";
console.log("hello world");
let age = 20;
if (age < 50) {
    age += 10;
    console.log(age);
}
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let strictNumbers = [];
let user = [1, "Charles"];
let mySize = 2;
console.log(mySize);
function calTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "charles";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
//# sourceMappingURL=index.js.map