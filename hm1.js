const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите первое число: ", function(num1) {
  rl.question("Введите второе число: ", function(num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 <= 1 && num2 >= 3) {
        console.log("Условие выполнено: num1 <= 1 и num2 >= 3");
    } else {
        console.log("Условие не выполнено: num1 > 1 или num2 < 3");
    }

    rl.close();
  });
});