function Person(){

}

Person.prototype.test1 = function(){
    console.log("Test 1");
}

Person.prototype.test2 = function(){
    console.log("Test 2");
}

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);

// Kendi prototype'mizi oluşturulaım
Employee.prototype.mytest = function(){
    console.log("Test prototype");
}

const emp = new Employee("Berke Karataş",24);
console.log(emp);

/* 
Employee prototype'ı Object prototype göstermeyecek artık Person prototype gösterecek
Person prototype özelliklerini kullanabiliriz bunun yanında Person prototype'da Object prototypedan miras aldığı için
Object Prototype ve Person Prototype ikisinden de kalıtım almış olduk.age



Employee --> Employee prototype --> Object prototype [ Normal Hali ]
Employee --> Employee prototype --> Person prototype --> Object prototype [ Persondan kalıtım almış hali ] 

*/