// object array

var emp =[

    { id:   1,
      name: "anam",
      desg: "java developer",
      salary: 67536 
    },
    {
        id: 2,
        name: "sanam",
        desg: "ui developer",
        salary: 43657
    }
]

console.log(` emp =`, emp)

//iterations

emp.forEach(function(val,index){
    document.writeln(`<h1> ${val.name} </h1>`)
    document.writeln(`<h4> ${val.desg} </h4>`)
    document.writeln(`<h4> ${val.salary} </h4>`)
})