let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 0, 8, 5, 3)
// let myCreatedDate = new Date("2025-01-22")
let myCreatedDate = new Date("01-08-2025")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(typeof myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))