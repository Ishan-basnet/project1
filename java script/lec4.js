//primitive datatypes in javascript and how to find the datatype of the data inserted as a variable

// numeric datatype (numeric datatype ma "" ra '' use nagarne natra datatype string maninxa)
var a = 10;
let b = 10;
const c = 10;
console.log(a);
console.log(b);
console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//string datatype  (string datatype ma "" ra '' use garne natra numeric datatype maninxa)
var d = "ishan";
let e = "ishan";
const f = "ishan";
console.log(d);
console.log(e);
console.log(f);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);


// null datatype
var g=null              //In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
let h=null             //Unfortunately, in JavaScript, the data type of null is an object.
const i=null          // You can consider it a bug in JavaScript that typeof null is an object.
console.log(g)
console.log(h)
console.log(i)
console.log(typeof g)
console.log(typeof h)
console.log(typeof i)


//undefined datatype
var j                    //undefined variable cannot be printed in const because as we know in const neither redeclaration nor 
let k                   //reassignment can be done so the value should be put in the variable when it is declared as we can declare
console.log(j)         //one variable only once soundefined variable cannot be used in const
console.log(k)
console.log(typeof j)
console.log(typeof k)

//boolean datatype
var l= true
let m=true           //this is boolean datatype and ! this sign is called not so if x is true and we print !x then it will print false
const n=true
console.log(l)
console.log(m)
console.log(n)
console.log(!l)
console.log(!m)
console.log(!n)
console.log(typeof l)
console.log(typeof m)
console.log(typeof n)


// symbol datatype
var o=Symbol("basnet")       //symbol datatype ma symbol ko s capital hunaparxa
let p=Symbol("basnet")
const q=Symbol("basnet")
console.log(o)
console.log(p)
console.log(q)
console.log(typeof o)
console.log(typeof p)
console.log(typeof q)



