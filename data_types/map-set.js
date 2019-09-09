/*TASK 1
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.*/

function unique(arr) {
  let set = [...new Set(arr)];
  return set;
}

/*TASK 2
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.*/
let aclean = (arr) => {
  let map = new Map();

  for(let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return [...map.values()]
}
