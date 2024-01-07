first know some ES6 knowledge (https://www.w3schools.com/react/react_es6.asp)
1. what's ES6   
   ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScrip.
2.Classes
    A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.
3.Arrow Functions
   before code :
   hello = function() {
     return "Hello World!";
   }

   with error Function
   hello = () => {
      return "Hello World!";
   }
4.Variables
  there are three ways of defining your variables: var, let, and const.
var x = 5.6;
   If you use var outside of a function, it belongs to the global scope.
   If you use var inside of a function, it belongs to that function.
   If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
   var has a function scope, not a block scope.
   

let x = 5.6;
  let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
  If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
  let has a block scope.
const x = 5.6;
  const is a variable that once it has been created, its value can never change.
  const has a block scope.
  The keyword const is a bit misleading.
  It does not define a constant value. It defines a constant reference to a value.
  Because of this you can NOT:
    Reassign a constant value
    Reassign a constant array
    Reassign a constant object
  But you CAN:
     Change the elements of constant array
     Change the properties of constant object

 5.Spread Operator
    The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
     const numbersOne = [1, 2, 3];
     const numbersTwo = [4, 5, 6];
     const numbersCombined = [...numbersOne, ...numbersTwo];

  Assign the first and second items from numbers to variables and put the rest in an array:
     const numbers = [1, 2, 3, 4, 5, 6];
     const [one, two, ...rest] = numbers;

 6.Modules
   JavaScript modules allow you to break up your code into separate files.
   This makes it easier to maintain the code-base.
   ES Modules rely on the import and export statements.

  
  

   


   
   

