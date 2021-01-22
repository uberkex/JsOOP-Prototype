const obj1 = {
    number1:10,
    number2:20,
};

const obj2 = {
    number1:30,
    number2:40,
};


// this bizim normalde Window objemizi gösteriyor
function Toplama(number){
    console.log(this.number1 + this.number2 + number);
}

Toplama(100);
//NaN -- this Window objemizi gösterdiği için undefined 

Toplama.call(obj1,100);
// 130
// obj1'e göre çalıştırdığımız için Toplama fonksiyonunun içindeki this yerine obj1 geçecek

Toplama.call(obj2,100);
// 170
// obj1'e göre çalıştırdığımız için Toplama fonksiyonunun içindeki this yerine obj2 geçecek

Toplama.apply(obj1,[100]);
// 130
Toplama.apply(obj2,[100]);
// 170


// bind
// fonksiyonu bize bir kopya fonksiyon üretir
function MultipleToplam(x,y){
    return this.number1 + this.number2 + x + y;
}

const copyFunc1 = MultipleToplam.bind(obj1);
const copyFunc2 = MultipleToplam.bind(obj2);

console.log(copyFunc1(80,90));
// 200
console.log(copyFunc2(500,600));
// 1170