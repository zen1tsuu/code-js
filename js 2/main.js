// 1. Задача на обчислення різниці часу
function durationBetweenDates(startDate = '', endDate = '', dimension = 'seconds') {
  let start = new Date(startDate);
  let end = new Date(endDate);

  if (start > end) {
    [start, end] = [end, start]; // Обмін значень, якщо початкова дата пізніше за кінцеву
  }

  // Обчислення різниці в мілісекундах
  let difference = Math.abs(end - start);

  // Конвертація в розмірність
  switch (dimension) {
    case 'days':
      difference = Math.floor(difference / (1000 * 60 * 60 * 24));
      break;
    case 'hours':
      difference = Math.floor(difference / (1000 * 60 * 60));
      break;
    case 'minutes':
      difference = Math.floor(difference / (1000 * 60));
      break;
    default: // seconds
      difference = Math.floor(difference / 1000);
      break;
  }

  return `${difference} ${dimension}`;
}

// Приклади використання
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // '362 days'

/////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Задача на перетворення об'єкту

function optimizer(data) {
  const updatedData = {};

  for (let key in data) {
    const lowercaseKey = key.toLowerCase();
    const price = parseFloat(data[key]).toFixed(2);
    updatedData[lowercaseKey] = price;
  }

  return updatedData;
}

// Приклад використання
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

/////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Задача на рекурсію та ітерацію

function recursiveOddSumTo(number) {
  if (number <= 0) {
    return 0;
  }

  if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number - 2);
  }

  return recursiveOddSumTo(number - 1);
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(10)); // 25