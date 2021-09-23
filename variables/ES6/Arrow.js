let College = function(profesor, age) {
    this.profesor = profesor;
    this.age = age;
    this.info = function() {

        // logs College
        document.write(this); 

       setTimeout(() => { 
        // arrow function to make lexical "this" binding
        // here this=College."this" has been inherited
        document.write(this.profesor + " is " + this.age 
                                       + " years old");
       }, 3000);
    }
} 
let profesor1 = new College ('Profesor"Ram', 50);

// logs : Profesor"Ram is 21 years old after 3 seconds
profesor1.info(); 