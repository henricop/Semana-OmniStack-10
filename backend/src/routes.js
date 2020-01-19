const { Router } = require('express');
const DevController = require('./controllers/DevCrontroller');
const SearchCrontroller = require('./controllers/SearchController');
const routes = Router();

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);

routes.get('/search',SearchCrontroller.index);

module.exports = routes;
