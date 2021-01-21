/* 

Prototype kalıtım mantığıyla bakılması gereken bir konu.
Employee ---> Employee Prototype ---> Object

Objemize bir fonksiyon yazdığımızda bu fonksiyon, bu objeden her üretildiğinde farklı bir yer kaplayacak
Bu fonksiyonu prototypemıza yazarsak bellekte sadece prototypeda yer kaplar  

*/

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function(){
    console.log(`Ad = ${this.name}\nSoyad = ${this.age}`)
}

const emp1 = new Employee("Berke Karataş",24);
const emp2 = new Employee("Ceyda Eyilmez",23);

emp1.showInfos();
/* 
Ad = Berke Karataş
Soyad = 24 
*/

console.log(emp1);

/* 
Employee {name: "Berke Karataş", age: 24} ---> Employee
    age: 24
    name: "Berke Karataş"
    __proto__: ---> Employee Prototype
        showInfos: ƒ ()
        constructor: ƒ Employee(name,age)
        __proto__: Object ---> Object Prototype
*/