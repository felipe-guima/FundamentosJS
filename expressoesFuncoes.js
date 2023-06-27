//        Funções e expressões de funções 

// forma comum
function minhaFuncao(parametros) {
    // bloco de codigo
}

minhaFuncao("parametros")

// expressões de funções
// o nome da função é opcional,são anonimas, uma variavel que recebe a função
// importante ser const para manter a função sem reatribuição

const soma = function (num1, num2) {return num1 + num2}

console.log(soma(2,2))

// Em funçoes comuns posso chamar a função e depois declará-la

console.log(apresentar())

function apresentar () {
    return "olá"
}

// Sistema de Hoisting no javaScript 
// esse sistema faz com que o interpretador do js passe por todas as funçoes e variaveis
// do tipo var, esse processo é conhecido como "içar, elevar" essas declações para o topo
// do codigo

// a mesma coisa não pode acontecer em expressões de função
// pois como declarei a função anonima com const ela deve ser declarada antes de
// ser executada.

// caso seja executada antes o erro será
//ReferenceError: Cannot access 'multiplica' before initialization

//console.log(multiplica(2,2))

const multiplica = function (num1, num2) {return num1 * num2}



