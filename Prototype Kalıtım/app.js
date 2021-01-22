function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log(`Ad = ${this.name}\nYaş = ${this.age}`);
}

const person = new Person("Berke Karataş",24);
console.log(person);
/* 
Person {name: "Berke Karataş", age: 24}
    age: 24
    name: "Berke Karataş"
    __proto__: Object 
*/





function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

// Override
Employee.prototype.showInfos = function(){
    console.log(`Ad = ${this.name}\nYaş = ${this.age}\nMaal = ${this.salary}`);
}

// Object prototype olan toString değiştirme - override
Employee.prototype.toString = function(){
    console.log("Employee");
}

const emp = new Employee("Ceyda Eyilmez",23,4500);
console.log(emp);
/* 
Employee {name: "Ceyda Eyilmez", age: 23, salary: 4500}
    age: 23
    name: "Ceyda Eyilmez"
    salary: 4500
    __proto__: Person
        showInfos: ƒ ()
        toString: ƒ ()
        __proto__:
            showInfos: ƒ ()
            constructor: ƒ Person(name,age)
            __proto__: Object
 */

emp.showInfos();
/* 
Ad = Ceyda Eyilmez
Yaş = 23
Maal = 4500 
*/
emp.toString();
// Employee
