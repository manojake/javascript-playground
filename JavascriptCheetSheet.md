- [Operator precedence](#operator-precedence)
- [Numbers vs strings](#numbers-vs-strings)
- [Useful string methods](#useful-string-methods)
- [Arrays](#arrays)
  - [For of](#for-of)
- [Anonymous functions](#anonymous-functions)
- [Javascript Objects](#javascript-objects)
- [Object prototypes](#object-prototypes)
  - [Inheritance](#inheritance)
  - [Introducing constructors](#introducing-constructors)
  - [Setting a prototype](#setting-a-prototype)
    - [Using Object create](#using-object-create)
    - [Using a constructor](#using-a-constructor)
- [Classes and constructors](#classes-and-constructors)
- [Inheritance](#inheritance)
- [Encapsulation](#encapsulation)
- [Private methods](#private-methods)
- [Measuring Performance of Web pages](#measuring-performance-of-web-pages)
- [Functions](#functions)
  - [Closures](#closures)
  - [Name conflict in closure](#name-conflict-in-closure)
  - [Arrow functions](#arrow-functions)
    - [No speparate this](#no-speparate-this)
- [Logical operators](#logical-operators)
- [Optional chaining](#optional-chaining)
 
# Operator precedence

Multiply and divide are always done first, then add and subtract (the calculation is always evaluated from left to right. ie for * and / will be xecuted based on the order from left to right). This could be overwritten by using paranthesis.

# Numbers vs strings

_"123"+ 4 = '1234'_

Convert to Numbers and String using Number() and String() functions.

# Useful string methods

 - "mozilla".length: Finding the length of a string
 - "mozilla"[0]: Retrieving a specific string character
 - "mozilla".includes("zilla"): if a string contains a substring
 - The below program can printout the number of occurances of a substring in a string

    ![image](https://github.com/manojake/javascript-playground/assets/68778250/9a83ccbc-d208-4914-912c-34b9f5e6fbc0)

 - "mozilla".slice(1, 4)); // "ozi"  Extracting a substring from a string

# Arrays

- Array.push() returns the new length of the array
- Array.pop() removes and returns the last item
- Array.shift() removes and returns the first item
- Array.splice(startingIndex, #ofItemstoBeRemoved)
- Array.toString() returns a comma seperated string
- Array.join() will return a string with speration char of your own
## For of

![image](https://github.com/manojake/javascript-playground/assets/68778250/5c1064ed-d369-4a3d-8be0-16a2192f5546)

# Anonymous functions

_Note: Functions in an object are called methods._

![image](https://github.com/manojake/javascript-playground/assets/68778250/4c9170b3-e27a-478a-849a-cef60ac2099e)

# Javascript Objects

Below is an example of an object which accepts name as a contructor parameter

![image](https://github.com/manojake/javascript-playground/assets/68778250/4a0151ae-c069-49b5-8c45-f9f58163bf32)

# Object prototypes

When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

_Note: If the property being searched for is an object, any changes to its properties will affect the parent and all children. This is because the object is stored as a reference in memory. The searched-for property only holds a reference to that object, and all object copies refer to the same instance._

To find out the prototype of an object, we can use the function Object.getPrototypeOf(). Object.prototype, and it is the most basic prototype, that all objects have by default. The prototype of Object.prototype is null, so it's at the end of the prototype chain.

_Note: The prototype of an object is not always Object.prototype_

## Inheritance

- How to create an new object ,if you have an existing object as a prototype.

  ![image](https://github.com/manojake/javascript-playground/assets/68778250/fdf5de50-477e-4f00-8541-4ef9d87925da)

In the above example, person object is set as the prototype of manosh opbject. if name property was not set on manosh object, manosh would get the name property from it's prototype and it would have printed undefined.

## Introducing constructors

The above example is hard to manage. Same code has to be repeated to create new obhects and need tp remember to set the name propery for the greet function to work. This could get complex very easily. That means the object literal in the above is not always adequate. Hence we could rewrite the above example like this

![image](https://github.com/manojake/javascript-playground/assets/68778250/b272c4f4-bcf6-4342-9c86-2dc4c7366bd5)

This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the new keyword
and it will 

![image](https://github.com/manojake/javascript-playground/assets/68778250/1e73c0a1-7a58-4e90-8917-166ec757793f)

_Note: Constructors, by convention, start with a capital letter and are named for the type of object they create_

![image](https://github.com/manojake/javascript-playground/assets/68778250/5f33a528-a5f0-4e5c-9a13-c0ffa4817ec3)

### Using Object create

![image](https://github.com/manojake/javascript-playground/assets/68778250/038e2950-6f50-47e1-a477-3c0cb73abfcf)

### Using a constructor

![image](https://github.com/manojake/javascript-playground/assets/68778250/1e3db16f-1526-4b22-93a2-8253cc006c24)

# Classes and constructors

![image](https://github.com/manojake/javascript-playground/assets/68778250/baaa58fb-96ea-49c3-b29e-0bfbb2fbe982)

# Inheritance

![image](https://github.com/manojake/javascript-playground/assets/68778250/be670a0b-6b4f-4109-bad9-83f070d90470)

# Encapsulation

![image](https://github.com/manojake/javascript-playground/assets/68778250/67d091f3-9405-4c9b-8179-f9dffc2083eb)

![image](https://github.com/manojake/javascript-playground/assets/68778250/ab76d978-d219-4314-8197-df628567885f)

# Private methods

![image](https://github.com/manojake/javascript-playground/assets/68778250/2c4db4a0-1689-46d8-9da0-7abda3bd8b7c)

# Measuring Performance of Web pages

Read more [here](https://developer.mozilla.org/en-US/docs/Learn/Performance/Measuring_performance)

# Functions

![image](https://github.com/user-attachments/assets/9ad8d1a5-0cd1-4dfd-88c6-7991e7749b0b)

![image](https://github.com/user-attachments/assets/21131030-3457-44af-a4e3-c5b3482bd79f)

## Closures

JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).

However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.

if the inner function manages to survive beyond the life of the outer function, the variables and functions defined in the outer function will live longer than the duration of the outer function.

![image](https://github.com/user-attachments/assets/c7020a6f-f55c-48de-91d4-ec8b07d6fa97)

![image](https://github.com/user-attachments/assets/506905b5-17c2-4f7e-9343-4f3a89cc3410)

_Note: By default object literals properties are always public. If there is a need of creating private variables, constructors are the way to go and those private variables can only be changes using the inner functions since they are the only ones that has access to it. A complex example would be an object containing methods for manipulating the inner variables of the outer function can be returned._

![image](https://github.com/user-attachments/assets/f1d677d1-19e6-4b93-9e6f-ff466c928f5e)


## Name conflict in closure

![image](https://github.com/user-attachments/assets/7b0803bc-efbf-48c1-a35d-6beb4d12cc89)

## Arrow functions

Arrow function does not have its own this, arguments, super, or new.target.Arrow functions are always anonymous.

### No speparate this

Until arrow functions, every new function defined its own this value. ie

    A new object in case of a constructor function. That means this refer the to the currtent object context

    this will be undefines in strict mode function calls

    this will be the base object if the function ia method in an object literal

![image](https://github.com/user-attachments/assets/14692204-8f07-44ac-aef8-1884a270ee48)

![image](https://github.com/user-attachments/assets/f2ec0f3d-5c09-4ed7-b3f2-8a2becde1cf9)

Remeber a function always initialize it's own this

<img width="666" alt="image" src="https://github.com/user-attachments/assets/364f74e3-d94e-4cbc-bf8d-eca6b489847e">

# Logical operators

<img width="801" alt="image" src="https://github.com/user-attachments/assets/2a2804ff-a663-4b44-8d6b-8e15f087a0af">

# Optional chaining

<img width="609" alt="image" src="https://github.com/user-attachments/assets/5f849c7b-fc40-479a-92fa-d2f408d0876c">

