// 1
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })

// promise1.then(res => {
//     console.log(res)
// })

// спочатку спрацьовує консоль лог і виводить start
// далі створюється promise1, який виводить 1
// далі спрацьовує then, який виводить 2


// 2
// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => { throw new Error('My Error') })
//     .catch(() => 1)
//     .then((x) => x + 1)
//     .then((x) => console.log(x))
//     .catch(console.error)

// ми створюємо promise
// в ньому перший then створює зміну x та додає до неї 1
// далі перевіряється на помилку
// помилки немає, тому далі наступний then додає 1 до х і виводить її у консоль


// 3
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });

// створюється promise, який виводить 2
// далі в then створюємо змінну v та повертаємо її помножену на 2
// наступний then приймає минулий результат v і множить її ще на 2 = 4
// finally видає undefined, бо він не приймає аргументів і не передає нічого далі, але множить v знову на 2
// і останній then виводить останній результат від множення = 8
