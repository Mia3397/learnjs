/*TASK 1
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.*/

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

/*TASK 2
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».*/

let getWeekDay = (date) => {
  let day = date.getDay();
  return day == 0 ? 'ВС' :
  day == 1 ? 'ПН' :
  day == 2 ? 'ВТ' :
  day == 3 ? 'СР' :
  day == 4 ? 'ЧТ' :
  day == 5 ? 'ПТ' : 'СБ';
}

/*TASK 3
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
 Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.*/

 let getLocalDay = (date) => date.getDay() == 0 ? 7 : date.getDay();

 /*TASK 4
 Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.*/

 let getDateAgo = (date, days) => new Date(+date - days * 24 * 3600 * 1000).getDate();

 /*TASK 5
 Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.*/
let getLastDayOfMonth = (year, month) => {
  let checkDate = new Date(year, month, 31).getDate();
  return checkDate == 31 ? 31 : 31 - checkDate;
}

/*TASK 6
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.*/

let getSecondsToday = () => {
	let dateToday = new Date();
	return Math.round((Date.now() - new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate()))/1000);
}

/*TASK 7
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.*/
let getSecondsToTomorrow = () => {
	let dateToday = new Date();
	return Math.round(( new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + 1) - Date.now())/1000);
}
