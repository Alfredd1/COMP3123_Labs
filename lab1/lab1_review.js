/*
Purpose: Review JS concepts
Prototypes vs Classes
Regular Functions, Anonymous Functions, Arrow Functions
Callback Functions
MERN
*/

var globalVariable = 100;
let localVariable = 200;
// function myFunction() {
//     var varInFunc = "local"
// }
// console.log(varInFunc);

const oneTimeUseObj = {
    prop1: "Alfred",
    prop2: "comp3123",
    method1: function(param1) {
        console.log(param1);
    }
}
console.log(oneTimeUseObj);
console.log(oneTimeUseObj.prop1);
console.log(oneTimeUseObj.prop2);
oneTimeUseObj.method1("Hello World");

// Prototype - constructor

function Student (student_name_p, course_p, lunch_p){
    this.student_name = student_name_p;
    this.course = course_p;
    this.lunch = lunch_p;
    this.method1 = function(param1){
        return param1;
    }
}

const morning_student = new Student("Alfred", "COMP3123", "Pizza");
console.log(morning_student);
console.log(morning_student.student_name);
console.log(morning_student.course);    
console.log(morning_student.lunch);
console.log(morning_student.method1("Hello World"));

// const oneTimeUseOb = new Obect()

// Classes - always have constructors

class Prof {
    constructor(prof_name_p){
        this.prof_name = prof_name_p;
    }
    method1(lunch) {
        console.log(lunch)
    }
}

const morning_prof = new Prof("Laily");
console.log(morning_prof);
console.log(morning_prof.prof_name);
morning_prof.method1("Pizza");