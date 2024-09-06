import name, { age, job } from './exportingFile.js';
console.log(name, age, job);

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function describe(noun = 'cat', adjective = 'white') {
   
    console.log(`The ${noun} is ${adjective}.`);
  }

  describe(); 

  describe('dog', 'brown'); 
  

  // Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here

console.log(pizza === 'tasty' ? 'yum' : 'yuck');

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const THEME = userSavedTheme || 'light';
console.log('Theme setting:', THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat; // Your code here
  console.log(cat?.age);
 