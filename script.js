// 1. Напишите функцию которая принимает строку и заменяет все буквы “o” на  “a”
// “головоломка” --> "галаваламка"
// "мОлоток" --> "малатак"

// const replaceLetter = (word, letter, newLetter) => {
//     return word.replaceAll(letter, newLetter)
// }
// console.log(replaceLetter('молоток','о','а'));
// console.log(replaceLetter('головоломка','о','а'));

// 2. Напишите функцию которая принимает строку "           hello world.        " и удаляет отступы по краям
// const delSpace = (str1) => {
//     return str1.trim()
// }
// console.log(delSpace("           hello world.        "));

// 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// Не понимаю, как сделать без переменных.

// 4. Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// Пример:
// "qwertyu" --> "eqrtuwy"
// "dollar" --> "adllor"
// "banana" --> "aaabnn"

// const sorted = (str1) => {
//     return str1.split("").sort().join("")
// }
// console.log(sorted("dollar"));
// console.log(sorted("qwertyu"));
// console.log(sorted("banana"));

// 5. Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
// Пример:
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"

// const splited = (str) => {
//     return str.split(" ")
// }
// console.log(splited("Robin Singh"));
// console.log(splited("I love arrays they are my favorite"));

// 6. Создайте функцию, которая принимает 2 целых числа в виде строк входных данных и выводит сумму (также в виде строкии в качестве):
// Пример входных данных и то что должно выводится:
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// const sum = (a, b) => {
//     return Number(a) + Number(b)
// }
// console.log(String(sum('4','5')));
// console.log(String(sum('34','5')));
// console.log(String(sum('','')));
// console.log(String(sum('2','')));
// console.log(String(sum('-5','3')));

// 7. Создайте функцию, которая принимает 2 целых числа в качестве входных данных и сравнивает их, если чилса равны, то выведите "равны", а иначе "не равны" 

// const compared = (num1, num2) => {
//     return num1 === num2 ? "равны" : "не равны"
// }
// console.log(compared(12, 65));

// 8. Создайте функцию, которая принимает число. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число". 

// const compared = (num) => {
//     return num % 2 === 0 ? "Четное число" : "Нечетное число"
// }
// console.log(compared(12));
