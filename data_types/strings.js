/*TASK 1*/

let ucFirst = (str) => {
  if(str.length) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
}

/*TASK 2*/

let checkSpam = (str) => {
  return (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) ? true : false;
}

/*TASK 3*/

let truncate = (str, maxlength) => {
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}


/*TASK 4*/

let extractCurrencyValue = (str) => {
  return +str.slice(1);
}
