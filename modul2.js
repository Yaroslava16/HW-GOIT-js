// // Задача 11

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
   
// return message.split(' ').length * pricePerWord;

//   // Пиши код выше этой строки
// }

// Задача 13

// function slugify(title) {
//   // Пиши код ниже этой строки
//  const slug = title.toLowerCase().split(' ').join('-');
 
//  return slug;
//   // Пиши код выше этой строки
// }

// Задача 18

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let sum = 0;
// for (i = 1; i <= number; i += 1) {
//   sum += i;
// }
// return sum;

//   // Пиши код выше этой строки
// }

// Задача 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (value of order) {
//     total += value;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// Задача 21

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const stringArray = string.split(' ');
//   let longestWord = '';
  
//   for(i = 0; i < stringArray.length; i += 1) {
    
//   if (stringArray[i].length > longestWord.length) {
//     longestWord = stringArray[i];
//   	}
//   }
  
//   return longestWord;
  

//   // Пиши код выше этой строки
// }

// Pflfxf 23

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const numbersArray = [];
//   for (i = 0; i < numbers.length; i += 1) {
   
//     if (numbers[i] > value) {
//       numbersArray.push(numbers[i]);
//     }  
//   }
// return numbersArray; 

//   // Пиши код выше этой строки
// }