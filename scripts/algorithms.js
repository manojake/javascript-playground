// reverse each word

const string = "Hello there Manosh";

const reverse = string.split(" ")

console.log(reverse)

let reversedStyring = ''

reverse.forEach((word) => {
 for(let i = word.length - 1; i >= 0; i--) {
  reversedStyring += word[i]
 }
  reversedStyring += ' '
})

// Question 2: Can you write a function in JavaScript to remove duplicate elements from an array?

// console.log(Array.from((new Set([1,1,2]))))

// Can you write a function in JavaScript to calculate the cumulative sum of an array?
// 10, 15, 20, 25, 30. Output array => 10, 25, 45, 70, 100.

const input = [10, 15, 20, 25, 30]
let sum = 0;
const output =  input.map((elemnt) => {
 return sum += elemnt
})

// console.log(output)

// create fibinocci series with certain length
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibi = [0,1]

while(fibi.length < 10) {
  const lastIndex = fibi.length - 1
  const secondLastIndex = fibi.length - 2
  const sum = fibi[lastIndex ] + fibi[secondLastIndex]
  fibi.push(sum)
}

console.log(fibi)


// mean median mode

const map = new Map();
map.set(2,1)

console.log(map.get(2))