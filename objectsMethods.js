// Object.create()
// The object.create() method Is used to create a new object and link I to the prototype of an existing object.
//  It returns a new object with the specified prototype object and properties.

let student1 = {
  name: "Abid",
  age: 23,
  display() {
    console.log("Name: ", this.name);
  },
};

let std = Object.create(student1); // Object Creation

std.name = "Ahmed";
std.display();

console.log(Object.keys(student1))


// Object.keys():
// Object.keys() create and return an array containing the keys/names of an object.
let student2 = {
    name: "Abid",
    age: 23,
    status: "Student"
};
console.log(Object.keys(student2)) // ['name', 'age', 'status']
//  Object.values()
// Object.values() create an array containing the values of an object.
let student3 = {
    name: "Abid",
    age: 23,
    status: "Student"
};
console.log(Object.values(student3)) //  ['Abid', 23, 'Student']
