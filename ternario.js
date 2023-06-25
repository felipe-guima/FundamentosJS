// Operadores ternarios 

const idadeMinima = 18;
const idadeCliente = 18;


// Modo comun de declaração condicional
if (idadeCliente >= idadeMinima) {
    console.log("Pode beber !!")
}else {
    console.log("Não pode beber, menor de idade")
}

// operador ternario
// o operador ternario deve ser usado com caltela, pois onde há uma série longa de condicionais 
//é dificil de le-lo

//                   CONDIÇÃO                TRUE                   FALSE
console.log(idadeCliente >= idadeMinima ? "Pode beber !!" : "Não pode beber, menor de idade" )