//erros - mais comuns


const erro = 'de sintaxe'  // se retirar as aspas ou faltar uma;


// SyntaxError: Invalid or unexpected token
//     at internalCompileFunction (node:internal/vm:73:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1176:20)
//     at Module._compile (node:internal/modules/cjs/loader:1218:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47


//erros de não decalrar a variavel

console.log(minhaVar)

// ReferenceError: minhaVar is not defined
//     at Object.<anonymous> (C:\Users\Fee\Desktop\Fundamento-JS\erros.js:1:13)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.15.0
// PS C:\Users\Fee\Desktop\Fundamento-JS>


// erros comuns

// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável.
//Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe - 1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, 
//como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

//     SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não 
//consegue executá - lo.Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

//         TypeError: Indica que o código esperava receber um dado de um determinado tipo, 
//tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.