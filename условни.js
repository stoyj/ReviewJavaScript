//✅ 1. Проверка дали числото е положително
//🧠 Задача: Ако числото е по-голямо от 0, покажи "Положително".
let number = 5;

if (number > 0) {
  console.log("Положително");
} else {
  console.log("Не е положително");
}

//✅ 2. Проверка дали си на 18 години или повече
//🧠 Задача: Покажи "Пълнолетен", ако си на 18 или повече.
let възраст = 20;

if (възраст >= 18) {
  console.log("Пълнолетен");
} else {
  console.log("Непълнолетен");
}

//✅ 3. Познай тайната парола
//🧠 Задача: Ако паролата е "здравей123", покажи "Добре дошъл!".
let парола = "здравей123";

if (парола === "здравей123") {
  console.log("Добре дошъл!");
} else {
  console.log("Грешна парола!");
}

//✅ 4. Проверка дали числото е четно
//🧠 Задача: Ако числото се дели на 2, покажи "Четно".
let число = 8;

if (число % 2 === 0) {
  console.log("Четно");
} else {
  console.log("Нечетно");
}

//✅ 5. Проверка на любим цвят
// 🧠 Задача: Ако цветът е "син", покажи "Хубав избор!".
// let цвят = "син";

// if (цвят === "син") {
//   console.log("Хубав избор!");
// } else {
//   console.log("И този цвят е готин!");
// }

//✅ 6. Какво да облека?
// 🧠 Задача: Ако е под 10 градуса, кажи "Облечи яке", иначе "Облечи тениска".
// let температура = 5;

// if (температура < 10) {
//   console.log("Облечи яке");
// } else {
//   console.log("Облечи тениска");
// }

// ✅ 7. Колко е оценката?
// 🧠 Задача: Ако оценката е 6 – "Отлично!", ако е 5 – "Много добре", иначе – "Продължавай да се стараеш!"
// let оценка = 5;

// if (оценка === 6) {
//   console.log("Отлично!");
// } else if (оценка === 5) {
//   console.log("Много добре");
// } else {
//   console.log("Продължавай да се стараеш!");
// }

//✅ 8. Познай числото
// 🧠 Задача: Ако въведеното число е равно на 7, покажи "Поздравления!".
// let въведеноЧисло = 7;

// if (въведеноЧисло === 7) {
//   console.log("Поздравления! Позна числото!");
// } else {
//   console.log("Опитай пак.");
// }

//✅ 9. Проверка дали можеш да гледаш филм
// 🧠 Задача: Ако възрастта е над 13, можеш да гледаш филма.
// let age = 12;

// if (age >= 13) {
//   console.log("Можеш да гледаш филма.");
// } else {
//   console.log("Филмът не е подходящ за теб.");
// }

//✅ 10. Проверка за рождения ден
// 🧠 Задача: Ако днес е рождения ти ден, покажи "Честит рожден ден!"
// let рожденДен = true;

// if (рожденДен) {
//   console.log("🎉 Честит рожден ден!");
// } else {
//   console.log("Хубав ден!");
// }

// 🎯 Какво представлява играта?
// Компютърът измисля тайно число (например от 1 до 10).

// Играчът въвежда число.

// Ако е вярно – казваме "Поздравления!"

// Ако е по-малко – казваме "Опитай с по-голямо число."

// Ако е по-голямо – казваме "Опитай с по-малко число."

// ТАЙНО число (компютърът го е "измислил")

//✅ 5. Проверка на любим цвят
// 🧠 Задача: Ако цветът е "син", покажи "Хубав избор!".
let color = "blue";

if (color === "blue") {
  console.log("Nice choice!");
} else {
  console.log("And this color is cool!");
}

//✅ 6. Какво да облека?
// 🧠 Задача: Ако е под 10 градуса, кажи "Облечи яке", иначе "Облечи тениска".
let temperature = 5;

if (temperature < 10) {
  console.log("Put on a jacket");
} else {
  console.log("Put on a T-shirt");
}

// ✅ 7. Колко е оценката?
// 🧠 Задача: Ако оценката е 6 – "Отлично!", ако е 5 – "Много добре", иначе – "Продължавай да се стараеш!"
let assessment = 5;

if (assessment === 6) {
  console.log("Excellent!");
} else if (assessment === 5) {
  console.log("Very good");
} else {
  console.log("Keep trying!");
}

//✅ 8. Познай числото
// 🧠 Задача: Ако въведеното число е равно на 7, покажи "Поздравления!".
let enteredNumber = 7;

if (enteredNumber === 7) {
  console.log("Congratulations! You guessed the number!");
} else {
  console.log("Try again");
}

//✅ 9. Проверка дали можеш да гледаш филм
// 🧠 Задача: Ако възрастта е над 13, можеш да гледаш филма.
let age = 15;

if (age >= 16) {
  console.log("You can watch the movie.");
} else {
  console.log("The movie is not suitable for you.");
}

//✅ 10. Проверка за рождения ден
// 🧠 Задача: Ако днес е рождения ти ден, покажи "Честит рожден ден!"
let birthday = true;

if (birthday) {
  console.log("🎉Happy birthday!");
} else {
  console.log("Have a nice day!");
}
