// Templates Strings 


const nome = 'Felipe'
const idade = 2023-1994
const cidadeDeNascimento = 'São Caetano do Sul'

// modo comun - um pouco poluido o modo de visualizar
const apresentacao = "Meu nome é " + nome + " minha idade é " + idade + 
" e eu nasci na ciddade de " + cidadeDeNascimento;

console.log(apresentacao);


// template string 
// Melhor de ser visualizada e medir os espaçamentos
const apresentacaoTs = `Meu nome é ${nome} minha idade é ${idade} e eu 
nasci na ciddade de ${cidadeDeNascimento}`;

 console.log(apresentacaoTs);
