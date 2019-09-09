/*TASK 2*/
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

/*TASK 3*/
const min = (a, b) => {
  return (a > b) ? b : a;
}

/*TASK 4*/
const pow = (x, n) => {
  return x**n;
}

let x = prompt('x?', '');
let n = prompt('n?', '');
if ( n < 1) {
  alert('Такая степень не поддерживается;')
}
else {
  pow(x, n);
}
