class Student {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    //method
    greet(){
      console.log(`Student name is ${this.name} and He/She is  ${this.age} years old` );
    } // no commas in between methods
  }
  
  const  mahesh = new Student("Mahesh",28);
  let  shailendra = new Student("shailendra ",25);
  var  kumar = new Student("kumar",21);
  
  mahesh.greet();
  shailendra.greet();
  kumar.greet();
  