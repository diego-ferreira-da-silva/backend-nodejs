// Função tradicional
function sum (n1, n2){
  return n1 + n2
}

console.log(sum (1, 2))

//Arrow Function
const sumNumbers = (n1,n2) => {
  return n1 + n2
}
console.log(sumNumbers(1, 2))
//HOISTING => VAR E FUNCTION
//Mesmo que uma função seja declarada a baixo, o JS joga para o começo do arquivo. 
//Já as Arrow functions e const não poodem ser usados antes da sua criação.
//Uma das funções que o ES6 trouxe
