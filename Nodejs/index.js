const api = require("./api");
const localStorage = require("localStorage");
const express = require("express");
const server = express();

server.use(express.json());
server.listen(3000);

server.get("/first", (req, res) => {
  return res.send({ first: "SEMPRE f5 World!" });
});

server.get("/query-params", (req, res) => {
  const { name, age } = req.query;
  return res.json({ result: `Seja bem vindo: ${name} de ${age}A` });
});

let products = [];

/*POST => INSERT*/
server.post("/products", (req, res) => {
  const { id, name, price } = req.body;

  products.push({ id: id, name: name, price: price });
  res.send({ message: "Success!" });
});

/*GET => SELECT(LIST)*/
server.get("/products", (req, res) => {
  res.send({ products: products });
});

/*PUT => UPDATE */
server.put("/product", (req, res) => {
  const { name, price } = req.body;
  const { oldName } = req.query;

  const index = products.findIndex((item) => item.name === oldName);

  products[index].name = name;
  products[index].price = price;

  res.send({ message: "Success!" });
});

/*DELETE => DELETE */
server.delete("/product/:id", (req, res) => {
  const { id } = req.params;

  const newProducts = products.filter((item) => item.id !== parseInt(id));

  products = newProducts;
  res.send({ product: products });
});

/* Requisição assíncrona */
/*Awayt - Não prossiga enquatno não estivermos resposta pronta da API */
server.get("/pokemon", async (req, res) => {
  try {
    const { data } = await api.get("pokemon/1");
    return res.send({ name: data.name });
  } catch (error) {
    res.send({ error: error });
  }

  return res.json({ name: data.name });
});

/*Middleware possuem 3 parâmetros */
function verifyUserAlready(req, res, next) {
  const { email } = req.body;
  if (!allUsers.find((user) => user.email === email)) {
    return next();
  }
  return res.status(400).json({ Failed: "This email is already registered" });
}

const allUsers = [];
server.post("/register-users", verifyUserAlready, (req, res) => {
  const user = req.body;
  allUsers.push(user);

  localStorage.setItem("users", JSON.stringify(allUsers));
  return res.json({ user });
});

server.get('/users', (req, res) => {
  const users =JSON.parse(localStorage.getItem('users'))
  return res.json(users)
})