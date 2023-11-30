const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

//Maneira antiga de concatenar dois arrays
//const array3 = array1.concat(array2)

const array3 = [...array1, ...array2]
console.log(array3)

//APREAD OPERATOR EM OBJETOS
const person = {
  id: 1,
  name: "Diego"
}

const personAddress = {
  city: "Rio Grande da Serra"
}

const completedPerson = {
  ...person,
  ...personAddress
}

console.log(completedPerson)
//Basicamente ele espalha as informações dos objetos