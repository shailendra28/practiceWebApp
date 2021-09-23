//variables in js
// var,const,let

// using `var`
var studentName = "shailendra";//global

if (studentName === "shailendra") {
  var studentName= "Mahesh";

  console.log(studentName);
  // expected output:Mahesh (block-scoped)
}

  console.log(studentName);
  // expected output:Mahesh (block-scoped)

// using `const`
  const family = {
    father: "Mohan",
    mother: "Kajal",
  }
  console.log(Object.values(family));
  
  console.log(Object.entries(family));
  // ["father", "Mohan"]
  // ["mother", "Kajal"]
  


// using `let`
let x = "Mumbai";//global and let is used when rebinding is required

if (x === "Mumbai") {
  let x = "Pune";

  console.log(x);
  // expected output: Pune( block-scoped accessible only within the block)
}

console.log(x);
// expected output: Mumbai