/*TASK 1
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.*/

let sumSalaries = (obj) => {
  let sum = 0;
  for (let salary of Object.values(obj)) {
    sum += salary;
  }
  return sum;
}

/*TASK 2
Напишите функцию count(obj), которая возвращает количество свойств объекта:*/

let count = (obj) => Object.keys(obj).length;
