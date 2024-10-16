// // let expresion = /odio/gi;
// // let expresion = /odio{2,3}/gi; // que aparezca varias veces la misma palabra
// // let expresion = /[a-zA-Z]/gi; //que haya alguna de esas letras
// // let expresion = /[\D]/gi; // que exista almenos una letra
// let expresion = /[\d]/gi; // que exista almenos un numero
// let palabra = "Lorem 1 1 ipsum dolor sit amet,  consectetur adipisicing elit. Praesentium itaque inventore animi sunt quae excepturi sapiente nobis sed maiores rem essE!";
//  console.log(expresion.test(palabra))

let correo = "Zharmel.afa15ñ212@sena.edu.co";
let regexp = /[a-zA-Z0-9-_.Ññ]+@[a-zA-Z0-9-_.]+(\.[a-zA-Z]{2,4}){1,2}/;
console.log(regexp.test(correo));



