/*Метод num.toFixed(n)

Он округляет число num до n знаков после запятой, 
при необходимости добивает нулями до данной длины 
и возвращает в виде строки (удобно для форматированного вывода)*/

var n = 12.345;

alert( n.toFixed(2) ); // "12.35"
alert( n.toFixed(0) ); // "12"
alert( n.toFixed(5) ); // "12.34500"