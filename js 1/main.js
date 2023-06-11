// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// тут ваш код ...

// Створити копію масиву і сортувати його в алфавітному порядку
const sortedNames = [...userNames].sort();

// Створити масив зі скороченими формами з ініціалами
initials = sortedNames.map(name => {
  const parts = name.split(" ");
  const initialsArray = parts.map(part => part.charAt(0).toUpperCase() + ".");
  return initialsArray.join("");
});

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

// тут ваш код...
function calculateProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Якщо елемент є масивом, викликаємо рекурсивно calculateProduct()
        product *= calculateProduct(arr[i]);
      } else {
        // Якщо елемент є числом, множимо на product
        product *= arr[i];
      }
    }
    return product;
}
  
productOfArray = calculateProduct(resultsArray);

console.log(productOfArray); // 24