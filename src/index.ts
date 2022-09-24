console.log("hello world");

let age: number = 20;

if (age < 50) {
    age += 10;
    console.log(age);
}

let sales = 123_456_789;

let course = "TypeScript";

let is_published = true;

// if variable is created without being assigned value, it's type is 'any'
// avoid using as much as possible because you lose benefit of TS
let level;

function render(document: any) {
    console.log(document);
}
