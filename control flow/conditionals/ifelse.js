// to determine the number is positive or negative

// let num=prompt("enter the number to khow whether the number is positive or negative")
// num=parseInt(num)
// if(num>=0){
//     console.log("the number is positive")
//     alert("the number is positive")                   // prompt le brouser ma user bata input linxa bhane alert le chai brouser mai 
// }                                                     // print gardinxa
// else{
//     console.log("the number is negative")
//     alert("the number is negative")
// }


// Write a program that checks if a number is even or odd.

let number=10
if(number%2==0){
    console.log("the number is even")
}
else{
    console.log("the number is odd ")
}


//Write a program to determine the greater of two numbers.

const num1=5
const num2=10
if(num1>num2){
    console.log("number 1 is greater ")
}
else if(num2>num1)
{
    console.log("number 2 is greater ")
}

//Write a program that transforms a numerical grade to a letter grade 

const grade=80
if(grade>=90){
    console.log("the grade in letter is A")
}
else if(grade>=80 && grade<90){
    console.log("the grade in letter is B")
}
else if(grade>=70 && grade<80){
    console.log("the grade in letter is C")
}
else if(grade>=60 && grade<70){
    console.log("the grade in letter is D")
}
else if(grade>=50 && grade<60){
    console.log("the grade in letter is E")
}
else if(grade>=40 && grade<50){
    console.log("the grade in letter is F")
}
else{
    console.log("not graded")
}


// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5,
// age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

const age =78
if(age<12){
    console.log("the price of ticket for you is rs 5")
}
else if (age>=12 && age<18){
    console.log("the price of ticket for you is rs 10")
}
else if (age>18 && age<=60){
    console.log("the price of ticket for you is rs 20")
}
else if (age>60){
    console.log("the price of ticket for you is rs 15")
}
else if (age>100){
    console.log("invalid")
}

//Write a program that determines if a year is a leap year.

const days=366
if(days%4==0){
    console.log("the year is leap year")
}
else{
    console.log("the year is not a leap year")
}

//Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20.
// Prices equal or over 50 have a discount of 10. Otherwise discount is 0

const price=150
if(price>=100){
    console.log("the discount is rs 20")
}
else if(price>=50&&price<100){
    console.log("the discount is rs 10")
}
else{
    console.log("there is no discount")
}

// Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).

const weight= 50
const height=1.5
const bmi=weight/(height*height)
if (bmi<18.5){
    console.log("underweight")
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("normal")
}
else if(bmi>25 && bmi<29.9){
    console.log("overweight")
}
else if(bmi>=30){
    console.log("obese")
}

// Write a simple number guessing game. Provide a secret number and a guess.
// Based on those numbers give players clues if their guess is higher, lower or correct.

const num =20
if(num>20){
    console.log("higher")
}
else if(num<20){
    console.log("lower")
}
else{
    console.log("correct")
}