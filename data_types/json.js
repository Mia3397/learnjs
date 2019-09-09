/*TASK 1
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
  name: "Василий Иванович",
  age: 35
};*/

user = JSON.stringify(user);
const newUser = JSON.parse(user);

/*TASK 2
Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
*/

alert(JSON.stringify(meetup, function replacer(key, value) {
	return (key != '' && value === meetup) ? undefined : value;
}))
