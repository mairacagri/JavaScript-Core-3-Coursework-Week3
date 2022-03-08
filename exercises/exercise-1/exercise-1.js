// What is the syntax to destructure the object `personOne` in exercise-1.js?
// - Update the argument of the function `introduceYourself` to use destructuring on the object that gets passed in.



const personOne = {
  name: "Popeye",
  age: 34,
  favoriteFood: "Spinach",
};

let {name, age, favoriteFood} = personOne;
// console.log(name);

function introduceYourself(___________________________) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favorite food is ${favoriteFood}.`
  );
}

introduceYourself(personOne);
