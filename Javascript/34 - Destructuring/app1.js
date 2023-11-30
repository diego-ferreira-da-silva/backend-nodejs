const numbers = [1, 2, 3, 4, 5, 6]

const primeiraPosicao = numbers[0]
const segundaPosicao = numbers[1]
const terceiraaPosicao = numbers[2]
const quartaPosicao = numbers[3]
const quintaPosicao = numbers[4]

console.log(primeiraPosicao, segundaPosicao, terceiraaPosicao, quartaPosicao, quintaPosicao)

//Mesclando Desestrutuação com REST PARAMETERS
const [primeira, segunda, terceira, ...resto] = numbers
console.log(primeira, segunda, terceira, resto)

//Desestruturação com Objestos

const person ={
  name: "Diego",
  age: 30,
  city: "Rio Grande da Serra"
}

const {name, city, age} = person;

console.log(name, city, age)

//No array, é feita a desestruturação com base nas posições do Array e no Objeto com base nos nomes dos elementos