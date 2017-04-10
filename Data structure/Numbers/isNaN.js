/*
Для проверки строки на число можно использовать функцию isNaN(str).

Она преобразует строку в число аналогично +, 
а затем вернёт true, если это NaN, т.е. если преобразование не удалось

var x = prompt("Введите значение", "-11.5");

if (isNaN(x)) {
  alert( "Строка преобразовалась в NaN. Не число" );
} else {
  alert( "Число" );
}
Однако, у такой проверки есть две особенности:

Пустая строка и строка из пробельных символов преобразуются к 0, поэтому считаются числами.
Если применить такую проверку не к строке, то могут быть сюрпризы, в частности isNaN посчитает числами значения false, true, null, так как они хотя и не числа, но преобразуются к ним.
 alert( isNaN(null) ); //  false - не NaN, т.е. "число"
alert( isNaN("\n  \n") ); //  false - не NaN, т.е. "число"
Если такое поведение допустимо, то isNaN – приемлемый вариант.

Если же нужна действительно точная проверка на число, которая не считает числом строку из пробелов, 
логические и специальные значения, 
а также отсекает Infinity – используйте следующую функцию isNumeric:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
*/