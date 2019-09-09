/*TASK 1
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
1. С использованием цикла.
2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3. С использованием формулы арифметической прогрессии.*/

const sumToCycle = (n) => {
	let sum = 0;
	for(let i = 1; i <= n; i++) sum += i;
	return sum;
}

const sumToRecursion = (n) => (n > 1) ? n + sumToRecursion(n-1) : n;

const sumToProgression = (n) => (1 + n) / 2 * n;

/*TASK 2
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.*/

const factorial = (n) => n == 1 ? n : n * factorial(n - 1);

/*TASK 3
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.*/

const fib = (n) => (n == 1 || n == 2) ? 1 : fib(n-1) + fib(n-2);

/*TASK 4
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.*/

const printListRecursion = (list) => {
	alert(list.value);
	list.next !== null ? printList(list.next) : 0;
}

const printListCycle = (list) => {
	for (;list;) {
		alert(list.value);
		list = list.next;
	}
}

/*TASK 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.*/

const printReverseListRecursion = (list) => {
	if(list.next) printReverseListRecursion(list.next);
	alert(list.value)
}

const printReverseListCycle = (list) => {
	let array = [];

	for (;list;) {
		array.push(list.value);
		list = list.next;
	}
  
	array.reverse().forEach(elem => alert(elem))
}
