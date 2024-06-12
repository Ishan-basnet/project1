                                // ARITHMETIC OPERATORS


console.log(10+20)        // this is addition operator
console.log(20-10)        // this is subtraction operator
console.log(10*10)        // this is multiplication operator
console.log(20/10)        // this is division operator
console.log(20%10)        // this is remainder/modulus operator

// increment operator     (const use nagarne kinavane reassignment ra redeclaration dubai mildaina)
let a=10
a++             // yesma chai euta matra number badhauna milxa
console.log(a)


// decrement operator      (const use nagarne kinavane reassignment ra redeclaration dubai mildaina)
let d=10
d--                  // yesma chai euta matra number ghatauna milxa
console.log(d)


    

                                  //ASSGNMENT OPERATORS

   
const g=10     // in this line whe have assigned value in g bu using the assignment operator "=" the value assigned to g is 10
console.log(g)

//addition and assign
let b=2
b+=2         // yesma jati pani badhauna milxa
console.log(b)

let c=3
c=c+3       // yesma jati pani badhauna milxa
console.log(c)

//subtraction and assign
let e=20
e-=2                   // yesma jati pani ghatauna milxa
console.log(e)

let f=30
f=f-3                  // yesma jati pani ghatauna milxa
console.log(f)



                                  // COMPARISON OPERATOR
                        
                                  
    //equality operator
const h=10       //yo console.log ma use bhako "==" equality operator ho ra yesle duita wa tyo bhanda badhi variable ko value check 
const i=10       //garera equal xa ki xaina patta lagayera boolean datatype (true/false) print garxa
console.log(h==i)

    //strict equality operator
const j=10     //yo console.log ma use bhako "===" strict equality operator ho ra yesle duita wa tyo bhanda badhi variable ko value ani
const k="10"  // datatype duitai check garxa ani boolean ma print garxa. value equal bhayepani datatype farak xa bhane false aauxa.  
console.log(j===k)

    //not equal operator
const l=10    //yo console.log ma use bhako "!=" not equal operator ho ra yesle duita wa tyo bhanda badhi variable ko value check garxa
const m=11    // ani not equal ho ki haina patta lagayera boolean datatype (true/false) print garxa
console.log(l!=m)

    //strict not equal operator
const n=10   //yo console.log ma bhako "!==" strict non equality operator ho ra yesle duita wa tyo bhanda badhi variable ko value ani   
const o="11" // datatype check garxa ra boolean ma print garxa . value unequal bhayepani datatype farak xa bhane false print hunxa
console.log(n!==o)

    // greater than / less than
const p=10    //yo console.log ma bhako "> ra <" greater/less than operator ho ra yesle duita wa tyo bhanda badhi variable ko value  
const q=9     //check garxa ani condition thik xa bhane boolean datatype ma true print garxa natra false print garxa
console.log(p>q)
console.log(p<q)

   // greater than equal to / less than equal to
const r=10   //yo console.log ma bhako "> ra <" greater/less than equal to operator ho ra yesle duita wa tyo bhanda badhi variable ko 
const s=10   // value check garxa ani condition thik xa bhane boolean datatype ma true print garxa natra false print garxa
console.log(p>=q)
console.log(p<=q)

                               //logical operators

const t=18  // yesma and "&&" logical operator use bhako xa ani yesma yedi duitai condition correct hunxa bhane true hunxa natra yedi
const u=19  //euta condition milyo ani arko milena bhane false aauxa matlab bhako jati sabai condition milnu parxa
console.log(t>10&&u>18)

const v=10  // yesma or "||" logical operator use bhako xa ani yesma duita wa duita bhanda badhicondition maddhe yedi euta matra
const w=15  // correct bhayo bhane pani true aauxa
console.log(v>9||w>14)

const x=true  // yesma not "!" logical operator use bhako xa ani yesma x ko value true xa ani y ko value not x xa bhane y ko value 
const y=!x    // false hunxa
console.log(y)


// bitwise operator

//             (&)	AND	Sets each bit to 1 if both bits are 1
//             (|)	OR	Sets each bit to 1 if one of two bits is 1
//             (^)	XOR	Sets each bit to 1 if only one of two bits is 1
//             (~)	NOT	Inverts all the bits
//             (<<)	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
//             (>>)	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
//             (>>>)	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off