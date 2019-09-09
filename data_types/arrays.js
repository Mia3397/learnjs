/*TASK 2*/

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

/*TASK 3*/

let sumInput = () => {
  let sum = 0;
  let currentNumber;
  let arrayOfNumbers = [];

  while(true) {
    currentNumber = prompt('Введите число', 0);
    if((currentNumber === null) || (!isFinite(currentNumber)) || (currentNumber === '')) break;
    arrayOfNumbers.push(currentNumber);
  }

  for(let number of arrayOfNumbers) {
    sum += +number;
  }

  alert(sum);
}
