const {Router} = require('express')

const routes = new Router();

routes.get('/heath', (req, res) =>{
  return res.send({message: 'Connected with success! AE!'})
});

module.exports = routes