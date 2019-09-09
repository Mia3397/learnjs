/* TASK 6*/

let age = prompt('Введите ваш возраст', '');
if (( age >= 14 ) && ( age <= 90)) {
  alert('Ваш возраст входит в промежуток.');
}
else {
  alert('Ваш возраст не входит в промежуток.');
}

/* TASK 7 */

let currentAge = prompt('Введите возраст', '');
if ( !( ( currentAge >= 14 ) && ( currentAge <= 90) ) ) {
  alert('Ваш возраст не входит в промежуток.');
}
else {
  alert('Ваш возраст входит в промежуток.');
}
if ( (currentAge < 14) || (currentAge > 90)) {
  alert('Ваш возраст не входит в промежуток.');
}
else {
  alert('Ваш возраст входит в промежуток.');
}

/* TASK 9 */

let currentLogin = prompt('Введите логин', '');
if ( currentLogin == 'Админ' ) {
  let currentPassword = prompt('Введите пароль', '');
  if ( currentPassword == 'Я главный' ) {
    alert( 'Здравствуйте!' )
  } else if ( (currentPassword == null) || (currentPassword == '') ) {
    alert( 'Отменено' )
  }
  else {
    alert( 'Неверный пароль')
  }
} else if ( (currentLogin == null) || (currentLogin == '') ) {
  alert( 'Отменено.' );
} else {
  alert( 'Я вас не знаю.' )
}
