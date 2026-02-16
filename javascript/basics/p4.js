/*
operators 

1. arithematic
    + - * / %(mod)

2. logical
    && || !

3.relational or conditional
    >< >= <= == , ===(strictly equal to),
    !==(not eual to)

4. inc/dec
    pre ++i --i
    post i++ i--

5. condition ? true : false

6. , . '' "" `` \ ?
    () function
    {} block closure
    [] array , object properties

*/
//operator
var x = 123;

var res = x * 45 + 154 + 95 -14;
console.log('product =', res);

//power values
//2^6=
var res =  2 ** 6;
console.log('power =', res)
document.writeln('<h2> power = '+ res + '</h2>')

// asignment opr
var x = 12;

x += 20; // var x= x+20 
console.log('sum = ', x)
document.writeln('<h2> sum = '+ x + '</h2>')