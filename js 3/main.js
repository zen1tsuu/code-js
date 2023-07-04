// 1. addThemAll
/*
function addThemAll(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20
*/
///////////////////////////////////////////////////////////

// 2. multiply
/*
function multiply(a) {
  return function(b) {
    return a * b;
  }
}

console.log(multiply(5)(5));  // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3));  // 12
*/
//////////////////////////////////////////////////////////

// 3. movies
/*
const movies = [
  {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
  },
  {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
];

function byProperty(property, direction) {
  return function(a, b) {
    if (direction === '>') {
      return a[property] > b[property] ? 1 : -1;
    } else if (direction === '<') {
      return a[property] < b[property] ? 1 : -1;
    }
  };
}

console.log(movies.sort(byProperty('releaseYear', '>')));
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '>')));
*/
//////////////////////////////////////////////////////////

// 4. detonatorTimer
/*
// setInterval
function detonatorTimer(delay) {
  let currentCount = delay;
  const intervalId = setInterval(() => {
    console.log(currentCount);
    currentCount--;
    if (currentCount < 1) {
      console.log('BOOM!');
      clearInterval(intervalId);
    }
  }, 1000);
}

detonatorTimer(3);

// setTimeout
function detonatorTimer(delay) {
  let currentCount = delay;
  function countDown() {
    if (currentCount > 0) {
      console.log(currentCount);
      currentCount--;
      setTimeout(countDown, 1000);
    } else {
      console.log('BOOM!');
    }
  }

  countDown();
}

detonatorTimer(3);
*/
//////////////////////////////////////////////////////////

// 5. 
/*
let car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  color: 'red',
  term: 'month',
  currentTerm: 'week',
  features: ['autonomous driving', 'panoramic roof', 'premium sound system'],
  introduce() {
    console.log(`I own a ${this.color} ${this.brand} ${this.model} from ${this.year}.`);
  },
  displayFeatures() {
    console.log('The car comes with the following features:');
    this.features.forEach((feature, index) => {
      console.log(`${index + 1}. ${feature}`);
    });
  },
  washCar() {
    console.log(`Mostly I wash my car once a ${this.term}, but now I do It every ${this.currentTerm}.`);
  }
};

car.introduce();
car.displayFeatures();
car.washCar();

let pet = {
  name: 'Max',
  type: 'Dog',
  breed: 'Golden Retriever',
  age: 5,
  color: 'golden',
  favoriteActivities: ['fetch', 'swimming', 'long walks'],
  introduce() {
    console.log(`This is ${this.name}, my ${this.color} ${this.breed} ${this.type}.`);
  },
  displayActivities() {
    console.log(`${this.name}'s favorite activities are:`);
    this.favoriteActivities.forEach((activity, index) => {
      console.log(`${index + 1}. ${activity}`);
    });
  },
  celebrateBirthday() {
    this.age++;
    console.log(`${this.name} just turned ${this.age} years old. Happy birthday!`);
  }
};

pet.introduce();
pet.displayActivities();
pet.celebrateBirthday();

let laptop = {
  brand: 'Apple',
  model: 'MacBook Pro',
  year: 2023,
  color: 'silver',
  age: 2,
  specifications: {
    processor: 'Intel Core i7',
    memory: '16GB',
    storage: '512GB SSD'
  },
  introduce() {
    console.log(`I own a ${this.color} ${this.brand} ${this.model} (${this.year}).`);
  },
  displaySpecifications() {
    console.log('Specifications:');
    for (let key in this.specifications) {
      console.log(`${key}: ${this.specifications[key]}`);
    }
  },
  displayAge() {
    console.log(`I have used this ${this.brand} ${this.model} for ${this.age} years.`);
  }
};

laptop.introduce();
laptop.displaySpecifications();
laptop.displayAge();
*/
//////////////////////////////////////////////////////////

// 6. 
/*
let securedSelfIntroduce = car.introduce.bind(car);
let securedSelfDisplayFeatures = car.displayFeatures.bind(car);
let securedSelfWashCar = car.washCar.bind(car);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfDisplayFeatures, 2000);
setTimeout(securedSelfWashCar, 3000);

let securedSelfIntroduce1 = pet.introduce.bind(pet);
let securedSelfDisplayActivities = pet.displayActivities.bind(pet)
let securedSelfCelebrateBirthday = pet.celebrateBirthday.bind(pet)

setTimeout(securedSelfIntroduce1, 1000);
setTimeout(securedSelfDisplayActivities, 2000);
setTimeout(securedSelfCelebrateBirthday, 3000);

let securedSelfIntroduce2 = laptop.introduce.bind(laptop);
let securedSelfDisplaySpecifications = laptop.displaySpecifications.bind(laptop);
let securedSelfDisplayAge = laptop.displayAge.bind(laptop);

setTimeout(securedSelfIntroduce2, 1000);
setTimeout(securedSelfDisplaySpecifications, 2000);
setTimeout(securedSelfDisplayAge, 3000);
*/
//////////////////////////////////////////////////////////

// 7. 

function sum(a, b) {
  let result = a + b;
  console.log(`Sum: ${result}`);
}

function slower(func, seconds) {
  return function (...args) {
    console.log(`Chill out, you will get your result in ${seconds} seconds.`);
    setTimeout(function () {
      func.apply(null, args);
    }, seconds * 1000);
  };
}

let slowedSum = slower(sum, 5);
slowedSum(3, 4);