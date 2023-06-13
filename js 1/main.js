// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// тут ваш код ...
// Створити масив зі скороченими формами з ініціалами
initials = userNames.map(name => {
  const parts = name.split(" ");
  const initialsArray = parts.map(part => part.charAt(0).toUpperCase() + ".");
  return initialsArray.join("");
});
initials.sort();
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

/////////////////////////////////////////////////////////////////////////////////////////////

// 2. Задача на розворот числа:
const currentMaxValue = 4589;
let reverseMaxValue;

// тут ваш код...
// Перетворити число на рядок, розбити на масив, розвернути масив і злити його назад у рядок
reverseMaxValue = Number(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

/////////////////////////////////////////////////////////////////////////////////////////////

// 3. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// Застосовуємо метод flat(), щоб розгорнути масив до однорівневого
const flattenedArray = resultsArray.flat(Infinity);

// Використовуємо метод reduce(), щоб обчислити добуток масиву чисел
productOfArray = flattenedArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(productOfArray); // 24