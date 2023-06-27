// Arrow function - terceira forma de declarar funçoes

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// caracteristicas da Arrow Function 
// Ela não pode ser nomeada, não a a possibilidade, ela deixa o codigo mais curto e direto
// não necessita de varios dados como return, chaves
// sempre é declarada por const atribuida a essa variavel

// arrow function mais de 1 linha
// se comporta como expressao de função no Hosting do JS 
// necessita de return e suas chaves declarados corretamente

const somaDeNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10 ) {
        return "somente numeros de 1 a 9";
    }else {
        return num1 + num2;
    }
}

console.log(somaDeNumerosPequenos(11,6))


