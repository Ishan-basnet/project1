//Write a for loop that prints numbers from 1 to 5 in the console.

for (let a=1;a<=5;a++){
    console.log(a)
}

//Write a for loop to calculate the sum of numbers from 1 to 10.**

let sum=0
for(let b=1;b<=10;b++){
sum+=b
}
console.log(sum)

//Write a for loop that prints the square of numbers from 1 to 5.**

let d=1
for(let c=1;c<=5;c++){
e=d*d
console.log(e)
d++
}

//Using a while loop, print the cube of numbers from 1 to 5

let f=1
for(let g=1;g<=5;g++){
    h=f*f*f
    console.log(h)
    f++
}

//Write a for loop to iterate through an array of names and print each name in the console

const names = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


//Using a while loop, find the sum of elements in an array of numbers.**

const numbers = [10, 20, 30, 40, 50];
let sum1 = 0;
let index = 0;
while (index < numbers.length) {
  sum1 += numbers[index];
  index++;
}
console.log("Sum:", sum1);
