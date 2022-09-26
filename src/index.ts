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
// ARRAYS
// let number = [1, 2, '3'] this is fine in JS but will be an issues if function expects only numbers

let numbers: number[] = [1, 2, 3];

let strictNumbers: number[] = [];

// numbers.forEach(n => n.toFixed
//     ) because TS knows n is going to be a number, it'll bring up number specific methods. Good for productivity

// TUPLES
// fixed length array, can't add additional elements or error will be thrown
// 1, 'Charles'
let user: [number, string] = [1, "Charles"];

// try and restrict tuples to key value pairs to keep code readable

// ENUMS a list of related constants
// pascal naming convention
const enum Size {
    Small = 1,
    Medium,
    Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);

//Functions
// changed settings in tsconfig to account for number of arguments, types, no unused locals, no implicit returns. This will help root out bugs at compile and not at runtime
// taxYear is set with a default value, so if the parameter is not provided when the function is called, the default will be used
function calTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

// OBJECTS
// use ? to make something optional
// use readonly property to prevent changes
// let employee: Employee = {
//     // use void when you don't want a value returned
// } = {
//     id: 1,
//     retire: (date: Date) => {
//         console.log(date);
//     },
// };

let employee: Employee = {
    id: 1,
    retire: (date: Date) => {
        console.log(date);
    },
};

// employee.name = "Charles" <-- this is not valid if the type is not strictly outlined in object
employee.name = "charles";

//ADVANCED TYPES

//TYPE ALIASES
//used to create a shape of an object for reuse later
type Employee = {
    readonly id: number;
    name?: string;
    retire: (date: Date) => void;
};

//UNION TYPES

function kgToLbs(weight: number | string): number {
    //Narrowing to narrow type
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

//INTERSECTION type
// creating a widget that has both the methods of Draggable and Resizable
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
};

// LITERAL TYPES
// limit the values we can assign to a variable
// Literal (exact, specific value)
type Quantity = 50 | 100;

// quantity can now be assigned as 50 or 100
let quantity: Quantity = 100;

// Nullable Types
function greet(name: string | null | undefined) {
    if (name) console.log(name.toUpperCase());
    else console.log("Hola!");
}

// using unions to include null and undefined means that this code won't throw an error if a null or undefined value is used as a parameter
