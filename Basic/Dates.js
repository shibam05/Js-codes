let myDate = new Date();
console.log(myDate);
console.log(typeof myDate); // -> object
const dateFormats = [
    { method: "toJSON()", output: myDate.toJSON(), description: "Returns date in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)" },
    { method: "toString()", output: myDate.toString(), description: "Returns complete date and time in readable string format" },
    { method: "toDateString()", output: myDate.toDateString(), description: "Returns only the date portion in readable format" },
    { method: "toLocaleString()", output: myDate.toLocaleString(), description: "Returns date and time formatted according to locale settings" },
    { method: "toLocaleTimeString()", output: myDate.toLocaleTimeString(), description: "Returns only time formatted according to locale settings" }
];

console.table(dateFormats);

// confusing. ++++++++++++ visit https://javascript.info/date +++++++++++++

let createDate = new Date("2024,1,25")    //-> 2024-01-27T18:30:00.000Z
console.log(createDate.toLocaleString());
let timeStamp = Date.now();
console.log(timeStamp);     // -> in miliseconds

let newDate = new Date();
console.log(newDate.getMonth()); // month no. - 1
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "America/New_York"
}));

let examDay = new Date("2024-12-10T10:30:00.009")
console.log(examDay.toLocaleString());
