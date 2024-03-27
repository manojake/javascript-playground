
//   ****************** VAR ******************

// Var variables are hoisted to the top of the function scope or global scope
// even if its declaration isn't reached yet. However, if you access a variable before it's declared,
// the value is always undefined, because only its declaration is hoisted, but not its initialization.

console.log(x === undefined); // true
var x = 3;
console.log(x); // 3

(function () {
  console.log(x); // undefined
  var x = "local value";
  console.log(x); // local value
})();

// The above example will be interpreted the same as:
// var x;
// console.log(x === undefined); // true
// x = 3;
// console.log(x); // 3

// (function () {
// all var statements in a function should be placed as near to the top of the function as possible
//   var x; 
//   console.log(x); // undefined
//   x = "local value";
// console.log(x); // local value
// })();









//   ****************** LET / CONST/ CLASS ******************
// A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ)

// While inside the TDZ, the variable has not been initialized with a value, 
// and any attempt to access it will result in a ReferenceError. 

// If no initial value was specified with the variable declaration, 
// it will be initialized with a value of undefined.
try {
  (function () {
    // TDZ starts at beginning of scope
    console.log(bar); // "undefined"
    // console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
  })();
} catch(e) {
  console.log(e);
}

// The term "temporal" is used because the zone depends on the order of execution (time) rather than 
// the order in which the code is written (position)

(function () {
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
})();








//   ****************** REDECLARATIONS ******************

// try {
//   function foo(a) {
//     let a = 1; // SyntaxError: Identifier 'a' has already been declared
//   }
// } catch (e) {
//   let e; // SyntaxError: Identifier 'e' has already been declared
// }

// let x = 1;

// switch (x) {
//   case 0:
//     let foo;
//     break;
//   case 1:
//     let foo; // SyntaxError: Identifier 'foo' has already been declared
//     break;
// }

// To avoid the error, wrap each case in a new block statement.


switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}



//  ****************** SCOPING ******************
// console.log(blah); // ReferenceError: blah is not defined

function varTest() {
  var blah = 1;
  {
    var blah = 2; // same variable!
    console.log(blah); // 2
  }
  console.log(blah); // 2
}

function letTest() {
  let blah = 1;
  {
    let blah = 2; // different variable
    console.log(blah); // 2
  }
  console.log(blah); // 1
}



// console.log(blum); // ReferenceError: blum is not defined
(function() {
  var blum = 2;
})();








// ****************** TDZ combined with lexical scoping ******************
// function test1() {
//   let foo = 33;
//   if (foo) {
//     var foo =  55; // SyntaxError: Identifier 'foo' has already been declared
//     console.log(foo);
//   }
//   console.log(foo);
// }
// test1();


function test2() {
  var foo = 33;
  if (foo) {
    var foo =  55; 
    console.log(foo); // 55
  }
  console.log(foo); // 55
}
test2();



function test3() {
  var foo = 33;
  if (foo) {
    let foo =  55; 
    console.log(foo); // 55
  }
  console.log(foo); // 33
}
test3();



/*
The if block is evaluated because the outer var foo has a value. However due to lexical scoping 
this value is not available inside the block: the identifier foo inside the if block is the let foo. 
The expression foo + 55 throws a ReferenceError because initialization of let foo has not completed
 — it is still in the temporal dead zone.
*/
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError Cannot access 'foo' before initialization
  }
}
test();
