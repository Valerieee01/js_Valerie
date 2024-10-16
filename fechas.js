let fecha  =  new Date();

console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getFullYear());
console.log(fecha.getMilliseconds());
console.log(fecha.getMinutes());
console.log(fecha.getMonth());
console.log(fecha.getSeconds());
console.log(fecha.toDateString());
console.log(fecha.getTimezoneOffset());



let nacimiento = new Date("2006,10,01");
console.log(nacimiento)

let edad = fecha.getFullYear() - nacimiento.getFullYear();
console.log(edad);

confirm("hoala: "); // falso o verdadero

