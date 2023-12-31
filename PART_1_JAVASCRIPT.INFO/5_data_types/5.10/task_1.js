// Looping with .entries()


// Map method use

let user = new Map();
user.set("name", "Parth");
user.set("age", "21");

for (let [key, value] of user) {
    console.log(`${key}:${value}`);     // name:Parth    age:21  
}


// swap variable trick

let guest = "Parth";
let admin = "Raju";

[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`);


