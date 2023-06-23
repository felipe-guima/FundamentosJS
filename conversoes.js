// conversoes implicitas e explicitas


const numero = 456;
const numeroString = "456";

console.log(numero === numeroString) //compara o tipo e o valor
console.log(numero == numeroString) // compara o valor interno
console.log(numero + numeroString) // soma mas transforma numero em string, 
//fazendo concatenação em texto - conversão implicia
console.log(numero + Number(numeroString)); // função Number converte a string 
//em numero caso seja possivel,ou seja, todos os caracteres sejam numeros - convesão explicitas