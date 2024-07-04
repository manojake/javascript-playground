- [Operator precedence](#operator-precedence)
- [Numbers vs strings](#numbers-vs-strings)
- [Useful string methods](#useful-string-methods)
- [Arrays](#arrays)
  - [For of](#for-of)

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
