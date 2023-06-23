// tipos de variaveis e modos de uso
// var let e const


// var é a variavel mais dinamica do js, pode receber valores que
//serão alterados e ter sua declação após seu uso, não mais utilizada normalmente.
//por padão o js pode declarar constantes não declaradas como var.

 var alturaVar = 7;
 var comprimentoVar = 5;
//posso usar uma variavel var sem declara-la, mas não é o melhor
areaVar = alturaVar * comprimentoVar; // area não é declarada como var
console.log(areaVar)
var areaVar; // area declarada depois


//a let não é uma variavel tão dinamica como var,não podendo ser atribuidos valores após a execução
let formaLet = 'retangulo';
let alturaLet = 7;
let comprimentoLet = 5;
let areaLet;// deve ser chamada antes

if (formaLet ==='retangulo') {
    areaLet = alturaLet * comprimentoLet;
}   else {
    areaLet = (alturaLet * comprimentoLet) / 2
}
console.log(areaLet);


// const - valores declarados e mantidos
const formaConst ='quadrado';
const alturaConst = 5;
const comprimnetoConst = 7;
let area;// como area recebera valor depois da execução condicional if não pode ser const

if (formaConst ==='triangulo') {
    area = alturaConst * comprimnetoConst;
}else {
    area = (alturaConst * comprimnetoConst) / 2 
 }
 console.log(area);
