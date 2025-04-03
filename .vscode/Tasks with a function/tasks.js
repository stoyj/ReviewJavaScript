//1️⃣ Функция за поздрав
// Задача: Направи функция, която приема име и връща поздрав.

//🔹 Пример:
function greet(name) {
  return "Здравей," + name + "!";
}

console.log(greet("Stoyanka"));
console.log(greet("Anni"));

// 2️⃣ Функция за умножение
// Задача: Направи функция, която приема две числа и ги умножава.
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));
console.log(multiply(2, 5));

// 3️⃣ Функция за проверка дали число е положително
// Задача: Направи функция, която казва дали дадено число е положително или отрицателно.
// function checkNumber(num) {
//   return num >= 0 ? "Положително" : "Отрицателно";
// }

// console.log(checkNumber(5));
// console.log(checkNumber(-3));
// console.log(checkNumber(0));

// 4️⃣ Функция за смятане на площ на правоъгълник
// Задача: Направи функция, която приема ширина и височина и връща площта.
// function area(width, height) {
//   return width * height;
// }

// console.log(area(5, 10));
// console.log(area(3, 7));

// 3️⃣ Функция за проверка дали число е положително
// Задача: Направи функция, която казва дали дадено число е положително или отрицателно.
function checkNumber(num) {
  return num >= 0 ? "Положително" : "Отрицателно";
}

console.log(checkNumber(5));
console.log(checkNumber(-8));

// 4️⃣ Функция за смятане на площ на правоъгълник
// Задача: Направи функция, която приема ширина и височина и връща площта.
function area(width, height) {
  return width * height;
}
console.log(area(3, 4));
console.log(area(5, 5));
