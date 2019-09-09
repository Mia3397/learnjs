/* TASK 2 */
if(prompt('Каково «официальное» название JavaScript?', '') == 'ECMAScript') {
  alert('Верно!')
}
else {
  alert('Не знаете? ECMAScript!')
}

/* TASK 3 */
let inputNumber = prompt('Введите число', '');
if ( ( isNaN(+inputNumber) ) || ( inputNumber == null ) ) {
  alert('Вы ввели не число!')
} else if (inputNumber > 0) {
  alert(1);
} else if (inputNumber < 0) {
  alert(-1);
} else {
  alert(0);
}

/* TASK 4 */
let result = (a + b < 4) ? 'Мало' : 'Много';

/* TASK 5 */
message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
