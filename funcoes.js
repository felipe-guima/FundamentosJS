// Funções 

// declaração da função

// posso usar esse codigo varias vezes
function imprimeTexto(texto) {
    console.log(texto)
}

// chamo a função com o nome dela 

imprimeTexto("A função imprime texto");
imprimeTexto("Reaproveito a funçao com outro texto, sempre que precisar!!")

// outro modo de executar funçoes são com parametros vazios e a palavra return

function soma() {
    // o return deve sempre ser a ultima parte do codigo
    return 2 + 2
}

console.log("o console chama a função soma",soma());

// posso tb chamer uma função dentro de outra 

imprimeTexto(soma()); 