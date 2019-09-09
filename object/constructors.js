/*TASK 2*/

function Calculator() {
  this.read = () => {
    this.a = +prompt('a?', '');
    this.b = +prompt('b?', '');
  };

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };
}

/*TASK 3*/
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    return this.value += +prompt('Введите число', 0)
  };
}
