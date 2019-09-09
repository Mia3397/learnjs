/*TASK 1*/

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/*TASK 2*/

let isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
}

/*TASK 4*/

let ammountOfSalary = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] == 'number' ) sum += obj[key];
  }
  return sum;
}

/*TASK 5*/

let multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == 'number') obj[key] *= 2;
  }
}
