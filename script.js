"use strict";

function Person(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
}

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// when calling a function with the *new* keyword:
// 1. New {} is created
// 2. function is called, this = {};
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "jay";
console.log(jonas instanceof Person);

// just some practice to get a refresher with objects and the "this" keyword:

// function createPerson(firstName, lastName, age) {
//   let person = {
//     name: firstName,
//     name2: lastName,
//     age: age,
//     fullName: function () {
//       return this.name + " " + this.name2;
//     },
//   };
//   console.log(person.fullName());
// }

// createPerson("jonas", "schmedtman", 40);
