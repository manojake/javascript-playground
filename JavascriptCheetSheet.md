- [Operator precedence](#operator-precedence)
- [Numbers vs strings](#numbers-vs-strings)
- [Useful string methods](#useful-string-methods)
- [Arrays](#arrays)
  - [For of](#for-of)
- [Anonymous functions](#anonymous-functions)
- [Javascript Objects](#javascript-objects)
- [Object prototypes](#object-prototypes)
  - [Inheritance](#inheritance)

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
- Array.shift() removes and returns the last item
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

