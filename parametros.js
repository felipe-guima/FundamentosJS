// parametros de função 

// uma função pode ter mais de 1 parametro, tornando-o mais dinâmica e reutilizavel

// os nomes dos parametros só são utilizados dentro do escopo da função ,ou seja, os
// nomes dos paarametros ficam livres fora da função.
function soma(numero1, numero2) {
    return numero1 + numero2
}

// assim posso usar a mesma função em várias operações
console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// a ordem dos parametros é importante caso influencie no produto final

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e eu tenho ${idade} anos` // template string
}

// o erro é de propósito, passando os dados invertidos - a ordem dos parametros importa !
//                    nome   idade 
console.log(nomeIdade(27, "Felipe"))

// tambem podemos chamar uma função dentro de outa função 

// podemos definir um valor padão para os argumentos
function mutiplica(num1 = 1, num2 = 1) {
    return num1 * num2
}

// a função mutiplica está recebendo a função soma 2 vezes e executando.

//                    soma()  3+3      5+4                 
//              multiplica()   6        9
//                                 54
console.log(mutiplica(soma(3, 3), soma(5, 4)));

// definido um valor padrao, podemos deixar de declarar um parametro como abaixo
// nesse caso retornará a execussão pelo valor padão, caso contrario seria NaN pois
// o parametro não declarado seria undefined, undefined não é um numero.

console.log(mutiplica(soma(3, 3)));// aqui retrnara 6 pois será usado o valor padão 1

// É uma boa prática tb não passar muitos parametro e muitas funções uma dentro da outra
// para que o codigo não fique confuso ou de díficil manutenção


// Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações
//  se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc)
//   e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

//  EXEMPLOS COMUNS DE FUNÇÕES

// função sem parametro
function cumprimentar() {
    console.log('oi gente!')
}

cumprimentar()


// função com parametro
function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')


// função que retorna outra função
function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// função com diversos parametros
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   console.log(operacaoMatematica(15, 30, 45)); // 90




