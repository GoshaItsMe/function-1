function solve(Name, year, tyear) {
    return alert( Name + '. ваш возраст ' + (tyear - year) + ' Лет !');
    
}
 
let Name1 = prompt('Введите свое имя');
let year1 = +prompt('Введите год рожденья');
let tyear1 = +prompt('Введите нынешний год');

console.log(solve(Name1, year1, tyear1));