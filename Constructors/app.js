
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name, this.age, this.salary);
    }

    console.log(this)
    // Employee oluşturulduğu zaman çalışır ve ekrana bilgileri basar

}

const emp1 = new Employee("Berke Karataş", 24, 5000);
// Employee {name: "Berke Karataş", age: 24, showInfos: ƒ}
const emp2 = new Employee("Ceyda Eyilmez", 23, 5000);
// Employee {name: "Ceyda Eyilmez", age: 23, showInfos: ƒ}

emp1.showInfos();
// Berke Karataş 24 5000
