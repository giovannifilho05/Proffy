import express from 'express';
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

// GET : Buscar ou listar uma informação
// POST : Criar alguma nova informação
// PUT : Atualizar uma informação existente
// DELETE : Deletar uma informação existente

// Corpo (Request Body) : Dados para criação ou atualização de um registro
// Route Params : Identificar qual recurso eu quero atualizar ou deletar
// Query Params : Páginação , filtros, ordenação


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();


//http://localhost:3333/users
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes;