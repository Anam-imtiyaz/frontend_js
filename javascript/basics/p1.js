var x = 123; //global scope
let y = 133; //block scope(re assign value)
const z = 46; // block scope( cant re assign values)

console.log('var x = ',  x)
console.log('let y= ', y)
console.log('const z= ', z)

document.writeln("<h1> var x = " + x + "</h1>")
document.writeln('<h2> let y = " + y + "</h2>')
//`backtick`
document.writeln(`<h1> const z =  ${z}  </h1>`)

//reassign
x = 260;
console.log('new x = ', x)
document.writeln("<h1> var x = " + x + "</h1>")

y = 4145;
console.log('new y =', y)
document.writeln("<h1> let y = " + y + "</h1>")

//tey catch error - solve run time eerror
try{
    z =45.34;
    console.log('const z= ', z)

} catch(err){
    console.log(err)
}