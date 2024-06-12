//A function in JavaScript is a block of code that performs a specific task or set of tasks.
// It can be thought of as a mini-program within your main program


//types of functions 

//1:   named function

//A function in JavaScript is a block of code that performs a specific task or set of tasks. 
//It can be thought of as a mini-program within your main program

function addition(num1,num2){
    let added=num1+num2
    return added
}
let result=addition(4,6)
console.log(result)


//2:   Anonymous Function
// A function without a specified name. It is usually assigned to a variable or used as a callback function

let name1=function(naam){
console.log(`hello mr ${naam} basnet !`)
}
name1("ishan")

//3.	Arrow Function (ES6):
//A concise syntax for creating functions using the => arrow operator. It is often used for shorter function expressions.

let multiply=(a,b)=>{
    let multi=a*b
    return multi
}
let result2=multiply(100,100)
console.log(result2)

//6.	Constructor Function:
//A function used to create and initialize objects. It is typically invoked using the new keyword.

function info(name2,age){
    this.name2=name2
    this.age=age
}
info("ishan",15)
console.log(`my name is ${name2} and ia am ${age} years old`)

//7.	Callback Function:
//A function passed as an argument to another function and invoked within that function. It is commonly used for asynchronous operations or event handling.


function added(num1,num2,callback){
 let add=num1+num2
    console.log(add)
   callback(4,2)
}
function subt(num1,num2){
    let sub=num1-num2
    console.log(sub)
}
added(4,2,subt)

