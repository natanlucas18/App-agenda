import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();


import Contato from './modules/Contato';

const cadastroContato = new Contato('.form-cadastro-contato');
cadastroContato.init();