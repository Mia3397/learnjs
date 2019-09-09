/*TASK 1
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)*/

let {name, years:age, isAdmin = false} = user;

/*TASK 2
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.*/

let topSalary = (salaries) => {
  let [topProger, topSalary] = [null, 0];

  for(let [key, value] of Object.entries(salaries)) {
    if(value > topSalary) {
      ([topProger, topSalary] = [key, value])
    }
  }

  return topProger;
}
