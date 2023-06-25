// comparaçoes 


const numero = 5;
const texto = "5";

// comparação implicita
console.log(numero == texto); // compara apenas o valor

// explicita 
console.log(numero === texto);// compara o valor e o tipo de dado

//typeof - propriedade para ver o tipo de dado

console.log(typeof numero);
console.log(typeof texto);

// uma boa prática sempre usar ou 3 iguis para comparar valor e tipo e caso necessite fazer converssões 
// usar funções explicitas de conversões

Number();
String();

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para
//  comparação, da mesma forma que == e === retornam true ou false.