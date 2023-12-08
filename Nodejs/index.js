const api = require('./api')
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

let products = []

/*POST => INSERT*/
server.post('/products', (req, res) => {
  const {id, name, price} = req.body;

  products.push({id: id, name: name, price: price})
  res.send({message: 'Success!'})
})

/*GET => SELECT(LIST)*/
server.get('/products', (req, res) =>{
  res.send({ products: products });
})

/*PUT => UPDATE */
server.put('/product', (req, res) => {
  const {name, price} = req.body
  const {oldName} = req.query

  const index = products.findIndex(item => item.name === oldName)

  products[index].name = name;
  products[index].price = price;

  res.send({message: 'Success!'})

})

/*DELETE => DELETE */
server.delete('/product/:id', (req, res) => {
  const{id} = req.params

  const newProducts = products.filter(item => item.id !== parseInt(id) )

  products = newProducts;
  res.send({product : products})
})

server.get('/pokemon', async (req, res) => {

  try {
    const {data}= await api.get('pokemon/1')
    return res.send({name: data.name})

  } catch (error) {
    res.send({error: error})
  }

  return res.json({name: data.name})
})

/* Requisição asincrona */

/*Awayt - Não prossiga enquatno não estivermos resposta pronta da API */