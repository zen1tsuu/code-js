// 1. Задача на обчислення різниці часу
function durationBetweenDates(startDate = '01 Jan 2000', endDate = '01 Jan 2000', dimension = 'seconds') {
  let start = new Date(startDate);
  let end = new Date(endDate);

  const timeDiffInSeconds = Math.abs(end.getTime() - start.getTime()) / 1000;

  // Конвертація в розмірність
  switch (dimension) {
    case 'days':
      return Math.ceil(timeDiffInSeconds / (60 * 60 * 24)) + ' days';
    case 'hours':
      return Math.ceil(timeDiffInSeconds / (60 * 60)) + ' hours';
    case 'minutes':
      return Math.ceil(timeDiffInSeconds / 60) + ' minutes';
    case 'seconds':
      return Math.ceil(timeDiffInSeconds) + ' seconds';
    default:
      return 'Invalid dimension';
  } 
}

// Приклади використання
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // '362 days'

/////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Задача на перетворення об'єкту

function optimizer(data) {
  const updatedData = {};

  for (let key in data) {
    const lowerCaseKey = key.toLowerCase;
    const price = parseFloat(data[key]).toFixed(2);
    updatedData[lowerCaseKey] = price;
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

// Рекурсія
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

// Ітерація
function iterativeOddSumTo(number) {
  let sum = 0;

  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }

  return sum;
}

console.log(iterativeOddSumTo(1)); // 1
console.log(iterativeOddSumTo(10)); // 25