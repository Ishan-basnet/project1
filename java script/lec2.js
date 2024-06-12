console.log("hello what is your name?")

var y=10
var y=20             //this is called redeclaration
console.log(y)

var c=10
c=20                //this is called reassignment
console.log(c)


var x               //in var both redeclaration and reassignment can be done
x=15
console.log(x)

let a              //in let redeclaration cannot be done but re assignment can be done 
a=10
console.log(a)

const b=15        //in const both redeclaration and reassignment cannot be done 
console.log(b)




// hoisting can only be done in var not in const or let
// hoisting effect in js means that you can use a variable before declaring it in the code but it is not a good approach to use it

var f_name="ishan basnet"
age=15
var address="shankhamul"
console.log(f_name+address+age)
var age