
// console 

// console - é uma palavra reservada que pede dados para sair de uma aplicação ou bloco de çodigo
// log - pede um registro do dado

// é sempre muito útil pedir que os dados saiam da aplicação para verificar como os dados rodam dentro da mesma.

const minhaVar = true;

console.log(345) //numero 
console.log('string de texto !!')// texto
console.log(minhaVar) // variavel

// pode ser usado para mostrar um erro especifico na aplicação
console.error('deu erro !!')

//Entre os outros métodos, existem:

// console.error() para exibir mensagens de erro;
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de
//código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados)
// por onde o código executado passou durante a execução.

console.log("deu erro");
console.error(new Error("deu erro"));

//da um gostinho de como usamos classes em js, pq o erro retorna mais dados especificos
