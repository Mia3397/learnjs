/*TASK 1
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».*/
let camelize = (str) => {
  return str.split('-').map((item, index) => (index == 0) ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

/*TASK 2
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.
*/
let filterRange = (arr, a, b) => {
  return arr.filter(number => (number >= a) && (number <= b));
}

/*TASK 3
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
*/
let filterRangeInPlace = (arr, a, b) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < a || arr[i] > b) arr.splice(i, 1);
  }
}

/*TASK 4
Сортировать в обратном порядке*/
arr.sort((a, b) => b - a)

/*TASK 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/
let copySorted = (array) => {
	let newArray = [...array];
	return newArray.sort();
}

/*TASK 6
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)
и возвращает результат. Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.*/
function Calculator() {

  this.calculate = (str) => {

    let arrayOfSymbols = str.split(' ');
    let action = arrayOfSymbols[1];

    if(!this[action] || isNaN(+arrayOfSymbols[0]) || isNaN(+arrayOfSymbols[2])) return NaN;
    return this[action](+arrayOfSymbols[0], +arrayOfSymbols[2]);
  };

  this['+'] = (a, b) => a + b;

  this['-'] = (a, b) => a - b;

  this.addMethod = (name, func) => {
    this[name] = func;
  };
}

/*TASK 7
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.*/
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

/*TASK 8
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.*/
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({ fullname: item['name'] + ' ' + item['surname'], id: item['id']}));

/*TASK 9
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/
let sortByAge = (array) => {
	array.sort((a, b) => a.age - b.age)
}

/*TASK 11
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
*/
let getAverageAge = (array) => Math.floor(array.reduce((sum, current) => sum + current.age, 0) / array.length);

/*TASK 12
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/
let unique = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(!result.includes(arr[i])) result.push(arr[i])
  }
  return result;
}
