// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

const request = Number(prompt("Впишіть що ви бажаете випити: (1-Кава, 2-Чай, 3-Сік)").trim())
let order = "";
switch (request) {
    case 1:
        order = "Ваше замовлення: Кава"  ;      
        break;
    case 2:
        order = "Ваше замовлення: Чай";
        break;
    case 3:
        order = "Ваше замовлення: Сік" 
        break;
    default:
        order = "Неправильно введене значення замовлення"
        break;
}
console.log(order);
alert(order);

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

const day = prompt("Введіть день тиждня").toLowerCase().trim();
let dayType = "";
if (day === "понеділок" || day  === "вівторок" || day === "середа" || day === "четвер" || day === "п'ятниця") {
    dayType = "Робочий день";
} else if (day === "субота" || day === "неділя") {
    dayType = "Вихідний день"
} else {
    dayType = "Неправильне значення тиждня"
}
console.log(dayType);
alert(dayType);

// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

const monthNumber = Number(prompt("Ввеедіть номер місяця (1, 2, 3...)").trim());
let monthResult = "";
if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2 ) {
    monthResult = "Зима";
} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    monthResult = "Весна";
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    monthResult = "Літо";
} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    monthResult = "Осінь";
} else {
    monthResult = "Неправильно введен номер місяця";
}
console.log(monthResult);
alert(monthResult);

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = prompt("Введіть колір: (Червоний, зелений, жовтий)").toLowerCase().trim();
let colorResult = "";
switch (color) {
    case "червоний":
        colorResult = "Стійте"
        break;
    case "жовтий":
        colorResult = "Чекайте"
        break;
    case "зелений":
        colorResult = "Йдіть"
        break;
    default:
        colorResult = "Неправильно введене значення кольора"
        break;
}
console.log(colorResult);
alert(colorResult);

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

const firstNumber = Number(prompt("Введіть перше число:").trim());
const secondNumber = Number(prompt("Введіть друге число:").trim());
const operation = prompt("Введіть тип операції над числами: (+, -, *, /, %)").trim();
let mathResult = "";
if (operation === "+") {
    mathResult = firstNumber + secondNumber;
} else if (operation === "-") {
    mathResult = firstNumber - secondNumber;
} else if (operation === "*") {
    mathResult = firstNumber * secondNumber;
} else if (operation === "/" && secondNumber !== 0) {
    mathResult = firstNumber / secondNumber;
} else if (operation === "/" && secondNumber === 0) {
    mathResult = "Ділення на нуль неможливе";
} else if (operation === "%" && secondNumber !==0) {
    mathResult = firstNumber % secondNumber;
} else if (operation === "%" && secondNumber ===0) {
    mathResult = "Ділення на нуль неможливе";   
}
console.log(mathResult);
alert(mathResult);