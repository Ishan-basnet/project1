// Write a program that checks if a number is even or odd.

const number = 10;
switch (true) {
  case number % 2 == 0:
    console.log("the number is even");
    break;
  case number % 2 != 0:
    console.log("the number is odd");
    break;
}

//Write a program that transforms a numerical grade to a letter grade

const grade = 90;
switch (true) {
  case grade >= 90:
    console.log("the grade in letter is A");
    break;
  case grade >= 80 && grade < 90:
    console.log("the grade in letter is B");
    break;
  case grade >= 70 && grade < 80:
    console.log("the grade in letter is C");
    break;
  case grade >= 60 && grade < 70:
    console.log("the grade in letter is D");
    break;
  case grade >= 50 && grade < 60:
    console.log("the grade in letter is E");
    break;
  case grade >= 40 && grade < 50:
    console.log("the grade in letter is F");
    break;
  case grade > 100:
    console.log("invalid grade");
    break;
  default:
    console.log("not graded");
    break;
}

//to enter the day number and lnow which day is it

const day = 7;
switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;
  default:
    console.log("invalid day");
    break;
}
