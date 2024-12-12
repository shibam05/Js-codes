// object literals - > An object literal in JavaScript is a way to create plain JavaScript objects using a simple and concise syntax. It consists of a list of key-value pairs, each separated by a comma and wrapped inside curly braces {}

const mySym = Symbol("key1")

const JsUser = {
    name: "Shibam",
    "full name": "Shibam Biswas",
    [mySym]: "mykey1",
    age: 22,
    location: "Jaipur",
    email: "sb001@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.age);
console.log(JsUser["full name"])
console.log(JsUser[mySym])

// Object.freeze(JsUser)
// JsUser.email = "shibam@microsoft.com"   // -> TypeError: Cannot assign to read only property 'email' of object
// console.log(JsUser.email);

JsUser.greeting = function () {
    return `Hello, ${this.name}`;
};
console.log(JsUser.greeting());

// <----------------------------- Part 2 ---------------------------------------->

// Creating Objects Using Object constructor
// A constructor is a special function that creates and initializes an object instance of a class.

const appUser = new Object();
appUser.id = "123abc";
appUser.name = "Samar";
appUser.isLoggedIn = false;
console.log(appUser);

// Nested object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "somoone",
            lastname: "people"
        }
    }
};

console.log(regularUser.id?.full_id);   // Output: <undefined>
console.log(regularUser.fullname?.userfullname?.firstname);     // Output: someone

// Merging Objects

// Using assign
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// Using spread op.
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

// Arrays of Objects
const users = [
    { id: 1, email: "@gmail.com" },
    { id: 2, email: "a@gmail.com" },
    { id: 3, email: "b@gmail.com" }
];
console.log(users[2].id); // Output: 3

// <--- Object Methods -->

// 1. Object.keys
console.log(Object.keys(appUser));    // Returns an array of property names.

// 2. Object.value
console.log(Object.values(appUser));  // Returns an array of property values.

// 3. Object.entries
console.log(Object.entries(appUser)); // Returns an array of key-value pairs.

// 4. hasOwnProperty
console.log(appUser.hasOwnProperty('isLoggedIn')); // Checks if a property exists in the object.