// conversoes implicitas e explicitas

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString) //compara o tipo e o valor
console.log(numero == numeroString) // compara o valor interno
console.log(numero + numeroString) // soma mas transforma numero em string, 
//fazendo concatenação em texto - conversão implicia
console.log(numero + Number(numeroString)); // função Number converte a string 
//em numero caso seja possivel,ou seja, todos os caracteres sejam numeros - convesão explicitas

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); // teremos a conversão do número 12341234 para
// uma string “12341234” e assim poderemos fazer a concatenação entre as strings


let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa
//conversão, que é mais parecida com outras linguagens de programação.

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação


let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100