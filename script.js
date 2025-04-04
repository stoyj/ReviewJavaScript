//Направи ми урок за дете Review everything we learned No new concepts! This practice is extremely important for your progress

//🔄 Преговор на наученото (JavaScript) – Урок за дете 🎉
// Здравей! Днес няма да учим нищо ново, а ще преговорим всичко, което вече знаеш. Това е много важно, за да станеш още по-добър в програмирането! 🚀

// 📌 1. Функции (Functions)
// Функциите са като магически кутии, които получават нещо, обработват го и връщат резултат.

//➡️ Пример:
function sayHello(name) {
  return "Здравей, " + name + "!";
}

console.log(sayHello("Иво")); // Здравей, Иво!

//🎯 Задача: Направи функция add(a, b), която събира две числа и връща резултата.
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
console.log(add(-2, 7));
console.log(10, 0);

//📌 2. Условни оператори (if, else)
// Позволяват ни да вземаме решения в кода!

//➡️ Пример:
let age = 10;
if (age >= 18) {
  console.log("Можеш да гласуваш! ✅");
} else {
  console.log("Още си малък за гласуване. ❌");
}

//🎯 Задача: Направи проверка дали едно число е четно или нечетно.
function isEven(number) {
  return number % 2 === 0 ? "Четно" : "Нечетно";
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));
console.log(isEven(-3));

// 📌 3. Тернарен оператор (?:)
// Кратък начин за писане на if...else.

//➡️ Пример:
let number = 5;
let result = number % 2 === 0 ? "Четно число" : "Нечетно число";
console.log(result);

// 🎯 Задача: Използвай тернарен оператор, за да провериш дали някой има право на намаление (ако е под 12 години).
function hasDiscount(age) {
  return age < 12 ? "Има право на намаление" : "Няма право на намаление";
}

// Примери:
console.log(hasDiscount(10)); // Има право на намаление
console.log(hasDiscount(15)); // Няма право на намаление
console.log(hasDiscount(12)); // Няма право на намаление
console.log(hasDiscount(5)); // Има право на намаление

//📌 4. Callback функции
// Функция, която се подава като аргумент на друга функция.

//➡️ Пример:
function doSomething(callback) {
  console.log("Правя нещо важно...");
  callback();
}

function finished() {
  console.log("Готово! ✅");
}

doSomething(finished);

//🎯 Задача: Направи функция, която приема две числа и callback функция за събиране.
function calculate(a, b, callback) {
  return callback(a, b);
}

// Дефинираме callback функцията за събиране
function add(x, y) {
  return x + y;
}

// Използване:
console.log(calculate(5, 3, add)); // 8
console.log(calculate(10, 7, add)); // 17
console.log(calculate(-2, 8, add)); // 6

//Тази функция е гъвкава – можеш да подадеш различни callback функции, например за изваждане, умножение и деление. Ако искаш повече примери, кажи! 🚀

//📌 5. Fetch и Async/Await
// Използваме го, за да вземаме информация от интернет (API).

//➡️ Пример:
async function getData() {
  try {
    let response = await fetch("https://dog.ceo/dog-api/#google_vignette");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Грешка!", error);
  }
}

getData();
//🎯 Задача: Направи Fetch заявка към някое API и покажи информация.
async function fetchDogImage() {
  try {
    const response = await fetch("https://dog.ceo/dog-api/#google_vignette");
    const data = await response.json();

    console.log("Случайно куче:", data.message);

    // Ако искаш да покажеш изображението в HTML:
    document.body.innerHTML = `<img src="${data.message}" alt="Куче" width="300">`;
  } catch (error) {
    console.error("Грешка при заявката:", error);
  }
}

// Извикване на функцията
fetchDogImage();

//🎯 Заключителна задача
// Комбинирай всичко научено:

// 1.Направи функция, която проверява дали число е четно или нечетно.
// 2.Използвай callback функция, за да покажеш резултата.
// 3.Направи Fetch заявка и провери нещо от резултата с if/else.
