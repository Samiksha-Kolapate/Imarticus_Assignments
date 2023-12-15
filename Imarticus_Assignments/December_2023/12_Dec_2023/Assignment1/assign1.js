function Student(student_name,student_age,student_gender){
    this.name = student_name,
    this.age = student_age,
    this.gender = student_gender

    /* this.display = function(){
        console.log('name is: '+this.name+',age is: '+this.age+',gender is: '+this.gender);
    }  */
}

const obj1 = new Student('Pankaj',23,'Male');
const obj2 = new Student('Reena',25,'Female');
const obj3 = new Student('Rajeev',26,'Male');

console.log('Obj1: name is: '+obj1.name+',age is: '+obj1.age+',gender is: '+obj1.gender);
console.log('Obj2: name is: '+obj2.name+',age is: '+obj2.age+',gender is: '+obj2.gender);
console.log('Obj3: name is: '+obj3.name+',age is: '+obj3.age+',gender is: '+obj3.gender);

/* obj1.display();
obj2.display();
obj3.display(); */

Student.prototype.branch ='CSE';
Student.prototype.college ='ABC';

console.log('obj1 :college is: ' + obj1.college);
console.log('obj2 :college is: ' + obj2.college);
console.log('obj3 :college is: ' + obj3.college);

console.log('obj1 :branch is: ' + obj1.branch);
console.log('obj2 :branch is: ' + obj2.branch);
console.log('obj3 :branch is: ' + obj3.branch);
