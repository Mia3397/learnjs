/*TASK 1*/

let a = +prompt('Введите первое число', 0);
let b = +prompt('Введите второе число', 0);
alert(a+b);

/*TASK 3*/

let readNumber = () => {
  let number = prompt('Введите число', 0);
  if((number == null) || (number == '')) return null;
  else if (isFinite(+number)) return +number;
  else {
    readNumber();
    }
}

/*TASK 5*/

let random = (min, max) => {
  return Math.random()*(max - min) + min;
}

/*TASK 6*/

let randomInteger = (min, max) => {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
