let user = {
    name: "Raju",
    age: 21,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

console.log(user);




let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);


console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN



let i = 3;
while (i) 
console.log(i--);


 user = {
    sayHi() {
        console.log("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined
 };

//  console.log(JSON.stringify(user));      // {}  (empty object because ignored all function properties)



 let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
 };

//  console.log(JSON.stringify(meetup));    // all data in string




 // Excluding and transforming: replacer

let room = { 
    number: 12
};

 meetup = {
    title: "Conference",
    participants: [{name: "Raju"}, {name: "Krunal"}],
    place: room
};

room.occupiedBy = meetup;

/*
console.log( JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}) );
*/


user = {
    name: "Raju",
    age: 21,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

// console.log(JSON.stringify(user, null, 2));
// console.log(JSON.stringify(user, null, 4));


console.log("");


room = {
    number: 13
};

 meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2021, 0, 1)),
    room
};

console.log( JSON.stringify(meetup) );



 room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };