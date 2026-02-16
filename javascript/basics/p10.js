// array
/* 
grp of values not mandatory to be similar datatype

types
1. single dimension
    a.literal array(direct)
    b.using array constructor(assignment)
    c. array constructor(parameters)
    
    2. object array
    object is grp of key value pairs ={key:value}
    grp of objects

    3.json array
    
    
    */
   // single (litreal type)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
   var users = ["john","mike","tom","jerry"];

   console.log(`users= `, users)
   console.log(`users[2] =`, users[2])

   /*
   array.forEach(function(value,index){
   //code
   //  array iteration
})
   */
  users.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
  });

  document.writeln(`<hr/>`)

  for(let i=0; i<= users.length; i++){
    document.writeln(`<h4> ${i} ${users[i]} </h4>`)
  }
