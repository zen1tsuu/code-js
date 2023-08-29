// Задача 1 - ‘FizzBuzz’ через ітератор та генератор
//  Є така класична задача:

// 'Напишіть програму, яка виводить на екран числа від 1 до 100. При цьому замість чисел, кратних трьом, програма повинна виводити слово Fizz, а замість чисел, кратних п'яти – слово Buzz. Якщо число кратно п'ятнадцяти, то програма має виводити слово FizzBuzz'
// Вирішіть цю задачу:  
// 1) за допомогою ітератора

// function makeRangeIterator(start = 1, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//         next() {
//             let result;
//             if (nextIndex < end && nextIndex % 15 === 0) {
//                 result = {value: 'FizzBuzz', done: false};
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             } else if (nextIndex < end && nextIndex % 5 === 0) {
//                 result = {value: 'Buzz', done: false};
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }else if (nextIndex < end && nextIndex % 3 === 0) {
//                 result = {value: 'Fizz', done: false};
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             } else if (nextIndex < end) {
//                 result = {value: nextIndex, done: false};
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             } else {
//                 return {value: iterationCount, done: true};
//             }
//         }
//     }
//     return rangeIterator;
// }

// const it = makeRangeIterator(1, 101, 1);

// let result = it.next();
// while (!result.done) {
//     console.log(result.value);
//     result = it.next();
// }

// console.log('value:', result.value);


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
    max = max + 1;
    for (let i = 0; i < quantity; i++) {
        yield Math.floor(Math.random() * max);
    }
}

// тут виклик та ітерування в циклі
const generator = generateRandomNumbers(100, 5);
    
for (const randomNum of generator) {
    console.log(randomNum);
}
