const express = require('express')
const server = express();

server.use(express.json());
server.listen(3000);

server.get('/first', (req, res) => {
  return res.send({first: 'SEMPRE f5 World!'})
})

server.get('/query-params', (req, res) => {
  const {name, age} = req.query;
  return res.json({result: `Seja bem vindo: ${name} de ${age}A`})
})

const products = []

server.post('/products', (req, res) => {
  const {name, price} = req.body;

  products.push({name: name, price: price})
  res.send({message: 'Success!'})
})

server.get('/products', (req, res) =>{
  res.send({products: products})
})

//Rota utilizando o express