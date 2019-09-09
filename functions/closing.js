/*TASK 4
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.*/

const sum = (a) => (b) => a + b;

/*TASK 5
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения межу 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива*/

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  }
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  }
}

/*TASK 6*/

const byField2 = (key) => (a, b) => a[key] > b[key] ? 1 : -1;
