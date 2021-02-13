// задача 19
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     const allPropValues = [];
//     for (product of products) {
//      if (Object.keys(product).includes(propName)) {
//      allPropValues.push(product[propName]);            
//      }
//     }
//     return allPropValues;
//   }

//   console.log(getAllPropValues('name'))
// console.log(getAllPropValues('price'))

// Задача 20
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     for (product of products) {
//         if (Object.values(product).includes(productName)) {
//             return product['price'] * product['quantity'];
//         }
//     }
//     return 0;
// }

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));

// Задача 21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const {yesterday, today, tomorrow} = highTemperatures;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// Задача 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {
//   yesterday, 
//   today, 
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);

// Задача 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday:highYesterday, 
//   today:highToday, 
//   tomorrow:highTomorrow,
//   highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Задача 24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Задача 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
//   today: {low:lowToday, high:highToday, icon:todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
//   tomorrow: {low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}  } = forecast;

  // Задача 26
  // function calculateMeanTemperature(forecast) {
  //   const {
  //     today: {low:todayLow, high:todayHigh},
  //     tomorrow: {low:tomorrowLow, high:tomorrowHigh}
  //   } = forecast;
  //   // Пиши код выше этой строки
  //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  // }

 // Задача 27
//  const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

 // Задача 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
//  const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
//  const bestScore = Math.max(...allScores);
//  const worstScore = Math.min(...allScores);

// console.log(allScores); 
// console.log(bestScore); 
// console.log(worstScore);

// Задача 29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};

// console.log(finalSettings);

// Задача 30
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const newData = {completed, category, priority, ...data};
// return newData;
//   // Пиши код выше этой строки
// }

// Задача 31
// Пиши код ниже этой строки
// function add(...args) {
//   let sum = 0;
//   for (arg of args) {
//     sum += arg;
//   }
//   return sum;
//   // Пиши код выше этой строки
// }

// console.log(add(15,27))

// Задача 32
// // Пиши код ниже этой строки
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   return total;
//   // Пиши код выше этой строки
// }

// Задача 33
// function findMatches(match, ...args) {
//   const matches = []; // Не изменяй эту строку
// for (arg of args) {
//   if (match.includes(arg)) {
//     matches.push(arg);
//   }
// }
//   // Пиши код выше этой строки
//   return matches;
// }

// Задача 34
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`
//   },
//   // Пиши код выше этой строки
// };

// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));
// console.log(bookShelf.removeBook('Красный закат'));

// Задача 35
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//   const bookIndex = this.books.indexOf(oldName);
//    this.books.splice(bookIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// Задача 37
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   }
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.getPotions());

// Задача 38
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

// Задача 39
// // вариант1
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < this.potions.length; i += 1) {
//      const potion = this.potions[i];
//       if (potionName === potion) {
//         this.potions.splice(i, 1);
//       }
//     }
//     // :fire: Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// // вариант 2
// const index = this.potions.indexOf(potionName);
// this.potions.splice(index, 1);

// Задача 40
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1, newName);
//     // :fire: Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// // Задача 41
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },

  // removePotion(potionName) {
  //   for (let potion of this.potions) {
  //     if (potion.name === potionName) {
  //      this.potions.splice(this.potions.indexOf(potion), 1);
  //     }
  //   }
  //   return this.potions;
  // },

//   // removePotion(potionName) {
//   //   for (let i = 0; i < this.potions.length; i++) {
//   //     for (const key in this.potions[i]) {  
//   //       if (this.potions[i][key] === potionName) { 
//   //         this.potions.splice(i, 1);
//   //       }  
//   //     } 
//   //   }
//   //   return this.potions; 
//   // },

//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName){
//         potion.name = newName
//       }
//     }
// return this.potions
//   },
//   // Пиши код выше этой строки
// };

// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ]
// console.log(atTheOldToad.getPotions())

// в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }))

// // в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }))

// //в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ]
// console.log(atTheOldToad.removePotion('Дыхание дракона'))

// //в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ]
// console.log(atTheOldToad.removePotion('Зелье скорости'))

// // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ]
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'))

// // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ]
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'))