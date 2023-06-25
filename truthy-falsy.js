// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy - outros dados que podem se comportar como booleano assumindo valores - verdadeiro e falso

// 0 -> falso 
// 1 -> verdadeiro

console.log( 0 == false );
console.log( "" == false );
console.log( 1 == false );

// null 
// undefined

let minhaVar;
let letNull = null;
let numero = 3;
let texto = 'Alura';


// tipos de dados typeof
// propriedade que verifica o tipo de dado em js
console.log(typeof usuarioLogado);
console.log(typeof minhaVar)
console.log(typeof letNull) // o null é um objeto em js !
console.log(typeof numero)
console.log(typeof texto)




