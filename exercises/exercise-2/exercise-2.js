let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// - Use array destructuring to extract the values you need out of the array.
// let {firstName, lastName, house, pet, occupation} = hogwarts;
// console.log(hogwarts.length); 

// In `exercise-2.js` write a program that will take the `hogwarts` array as input 
//and display the names of the people who belong to the Gryffindor house.

//task1
let gryffindor = hogwarts.forEach(person =>{
  let {firstName, lastName, house, pet, occupation} = person;
  if(house === "Gryffindor"){
    console.log(`${firstName} ${lastName}`);
  }
})

//task2 display the names of teachers who have pets

let petOwner = hogwarts.forEach(person =>{
  let {firstName, lastName, house, pet, occupation} = person;
  if(occupation === "Teacher" && pet!== null){
     console.log(`${person.firstName}`);
  }
})
