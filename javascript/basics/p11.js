//single dimesion = 
// array construtor{assignment}

var colors = new Array();

colors[0] = "blue";
colors[1] = "red";
colors[2] = "green";

console.log(`colors =`,colors)
console.log(`colors[2] =`,colors[2])

//iterations

colors.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
})
document.writeln(`<hr>`)


//single - array as constructor {parameter}

var courses = new Array("html","css","javascript","react")
console.log(`courses =`, courses)
courses.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
})