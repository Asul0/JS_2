// Задание 4
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите положительное целое число: ", function(number) {
  number = parseInt(number);

  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const units = number % 10;

  console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);

  rl.close();
});
