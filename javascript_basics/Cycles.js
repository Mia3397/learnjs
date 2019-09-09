/*TASK 4*/
for ( let i = 2; i <= 10; i++ ) {
  if ( i % 2 == 0 ) console.log( i );
}

/*TASK 5*/
let i = 0;
while ( i < 3 ) {
  alert( `number ${i}!` );
  i++;
}

/*TASK 6*/
for (let number;;) {
  number = prompt('Введите число');
  if ((number > 100) || (number == null)) break;
}

/* TASK 7 */
let n = 10;
nextNumber: for(let i = 2; i < n; i++) {
  for(let j = i - 1; j > 1; j-- ) {
    if (i % j == 0) continue nextNumber;
  }
  alert(i);
}
