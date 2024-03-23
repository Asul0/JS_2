const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите число от 1 до 31: ", function(day) {
  day = parseInt(day);

  if (day >= 1 && day <= 10) {
      console.log("Число попадает в первую декаду месяца");
  } else if (day > 10 && day <= 20) {
      console.log("Число попадает во вторую декаду месяца");
  } else {
      console.log("Число попадает в третью декаду месяца");
  }

  rl.close();
});
