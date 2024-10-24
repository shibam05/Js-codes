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

