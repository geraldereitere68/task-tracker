/* 
   Filename: complex_code.js
   Description: This complex JavaScript code performs various operations on an array of numbers.
*/

// Defining an array of numbers
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Function to find the sum of the array elements
function sumOfNumbers(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

// Function to find the average of the array elements
function averageOfNumbers(arr) {
   const sum = sumOfNumbers(arr);
   return sum / arr.length;
}

// Function to find the maximum of the array elements
function maxOfNumbers(arr) {
   let max = Number.NEGATIVE_INFINITY;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}

// Function to find the minimum of the array elements
function minOfNumbers(arr) {
   let min = Number.POSITIVE_INFINITY;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
   }
   return min;
}

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

// Generating a random number between min and max
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

// Shuffling the array elements using Fisher-Yates algorithm
function shuffleArray(arr) {
   for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr;
}

// Reversing the array
numbers.reverse();

// Applying the square root function to each element
const squareRootNumbers = numbers.map((num) => Math.sqrt(num));

// Filtering the numbers greater than 10
const numbersGreaterThan10 = numbers.filter((num) => num > 10);

// Checking if all array elements are even
const areAllNumbersEven = numbers.every((num) => num % 2 === 0);

// Checking if any array element is divisible by 5
const isAnyNumberDivisibleBy5 = numbers.some((num) => num % 5 === 0);

// Mapping the numbers to their squares and cubes
const numbersSquared = numbers.map((num) => num ** 2);
const numbersCubed = numbers.map((num) => num ** 3);

// Generating a new array with squares and cubes combined
const combinedNumbers = [];
for (let i = 0; i < numbers.length; i++) {
   combinedNumbers.push(numbersSquared[i]);
   combinedNumbers.push(numbersCubed[i]);
}

// Reversing the combined array
combinedNumbers.reverse();

// Filtering the numbers to keep only unique values
const uniqueNumbers = Array.from(new Set(combinedNumbers));

// Checking if a number is prime
function isPrime(number) {
   if (number <= 1) {
      return false;
   }
   for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}

// Filtering the numbers to keep only prime numbers
const primeNumbers = numbers.filter((num) => isPrime(num));

// Randomly selecting an element from the array
const randomElement = numbers[getRandomNumber(0, numbers.length - 1)];

// Outputting the results
console.log("Sum of numbers:", sumOfNumbers(numbers));
console.log("Average of numbers:", averageOfNumbers(numbers));
console.log("Maximum number:", maxOfNumbers(numbers));
console.log("Minimum number:", minOfNumbers(numbers));
console.log("Random element:", randomElement);
console.log("Numbers greater than 10:", numbersGreaterThan10);
console.log("Are all numbers even?", areAllNumbersEven);
console.log("Is any number divisible by 5?", isAnyNumberDivisibleBy5);
console.log("Numbers squared:", numbersSquared);
console.log("Numbers cubed:", numbersCubed);
console.log("Combined numbers:", combinedNumbers);
console.log("Unique numbers:", uniqueNumbers);
console.log("Prime numbers:", primeNumbers);