const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController');
const loginController = require('./src/controllers/loginController');
const ContatoController = require('./src/controllers/ContatoController');

const { loginRequired } = require('./src/middlewares/middleware');
// rotas da Home
route.get('/', HomeController.index);

// rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contato/index', loginRequired, ContatoController.index);
route.post('/contato/register', loginRequired, ContatoController.register);
route.get('/contato/index/:id', loginRequired, ContatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, ContatoController.edit);
route.get('/contato/delete/:id', loginRequired, ContatoController.delete);

module.exports = route;
