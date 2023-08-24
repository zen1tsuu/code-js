// Задача 1 - ‘FizzBuzz’ через ітератор та генератор
//  Є така класична задача:

// 'Напишіть програму, яка виводить на екран числа від 1 до 100. При цьому замість чисел, кратних трьом, програма повинна виводити слово Fizz, а замість чисел, кратних п'яти – слово Buzz. Якщо число кратно п'ятнадцяти, то програма має виводити слово FizzBuzz'
// Вирішіть цю задачу:  
// 1) за допомогою ітератора

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

function makeIterator(array) {
    let nextIndex = 0;

    return {
        next: function() {
            if(nextIndex % 3 === 0) {
                const result = {value: 'Fizz', done: false};
                nextIndex++;
                return result;
            }else if(nextIndex % 5 === 0) {
                const result = {value: 'Buzz', done: false};
                nextIndex++;
                return result;
            }else if(nextIndex % 15 === 0) {
                const result = {value: 'FizzBuzz', done: false};
                nextIndex++;
                return result;
            } else if (nextIndex < array.length) {
                    const result = {value: array[nextIndex], done: false};
                    nextIndex++
                    return result;
            } else {
                return {done: true};
            }
        }
    }
}

let iterator = makeIterator(numbers);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// 2) за допомогою генератора

// function* fizzBuzz() {

//     let i = 0;
//     while(true) {
//         ++i;
//         let x = 0;
//         if(i % 3 === 0 && i % 5 === 0) yield 'FizzBuzz';
//         else if(i % 3 === 0) yield 'Fizz';
//         else if(i % 5 === 0) yield 'Buzz';
//         else yield i;
//     }
// }

// let gen = fizzBuzz();
// for (let i = 0; i < 100; i++) {
//     console.log(gen.next().value + ' ');
// }


// Задача 2 - генератор випадкових чисел
// Напишіть функцію-генератор, яка генерує випадкові числа.
// Функція приймає параметрами максимальне значення рандомного числа та кількість рандомних чисел які функція повертає:

function* generateRandomNumbers(max, quantity) {
	// тут ваш код
}

// тут виклик та ітерування в циклі
