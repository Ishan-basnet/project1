//Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.

let number = 2;
while (number <= 10) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number += 1;
}

// Using a while loop, find the factorial of a given number (e.g., 5).**

let number1=5
let factorial=1
while(number1>0){
factorial*=number1
number1--
}
console.log(factorial)