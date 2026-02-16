// nested cond statements

var num = 200;

if(num % 2 ===0 ){

    if (num >200){
        document.writeln(`<h2> ${num} is even n greater than 200 </h2>`)
    }
     else if(num <200){
        document.writeln(`<h2> ${num} is even n lesser than 200 </h2>`)
}
     else if ( num === 200){
    document.writeln(`<h2> ${num} is even n equal to 200 </h2>`)
}
     else{
    document.writeln(`<h2> ${num} is even </h2>`)
}    
} else{
    document.writeln(`<h2> ${num} is invalid </h2>`)
}