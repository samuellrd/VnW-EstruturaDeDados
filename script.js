// 01 - Crie um array que receba 5 itens e exiba no console:
let compras = ["ketchup", "espetinho", "arroz", "batata", "macarrão"];
console.log(compras);

// 02 - Utilize um método para adicionar um nome ao inicio do array:
compras.unshift("maionese");
console.log(compras);

// 03 - Utilize um método para remover o último nome do array:
compras.pop();
console.log(compras);

// 04 - Utilize um método para adicionar dois nomes ao fim do array:
compras.push("feijão", "pimenta");
console.log(compras);

// 05 - Utilize um método para remover o primeiro nome do array:
compras.shift();
console.log(compras);

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();

console.log(numbers);

// 07 - Crie um objeto que receba ao menos três propriedades sobre você:
let informacoes = {
  nome: "Samuel",
  cor: "branco",
  idade: 18
};

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial:
informacoes.altura = "1.80m";

// 09 - Remova uma propriedade desse objeto:
delete informacoes.cor;

// 10 - Mostre no console todas as propriedades desse objeto:
console.log(informacoes);

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos;
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos;
// Na propriedade amigos, adicione ao menos 4 itens:
let cadastro = [
  {
    nome: "Antony",
    idade: 53,
    telefone: 5551970,
    amigos: ["Pepper", "Steve", "Rhodes", "Bruce"],
  },
  {
    nome: "Steve",
    idade: 106,
    telefone: 5551917,
    amigos: ["Bucky", "Peggy", "Antony", "Sam"],
  },
  {
    nome: "Natasha",
    idade: 38,
    telefone: 5551985,
    amigos: ["Steve", "Bruce", "Yelena", "Clint"],
  },
  {
    nome: "Bruce",
    idade: 56,
    telefone: 5551967,
    amigos: ["Antony", "Steve", "Thor", "Natasha"],
  },
  {
    nome: "Thor",
    idade: 1505,
    telefone: 5550518,
    amigos: ["Loki", "Jane", "Bruce", "Heimdall"],
  },
];
console.log(cadastro);

//12 - Mostre no console o nome de um amigo de cada lista:
console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[1]);
