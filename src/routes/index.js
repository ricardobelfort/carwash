import express from 'express';
import clientes from './clientesRoutes.js';
import lavadores from './lavadoresRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Controle de Lava Jato' });
  });

  app.use(express.json(), clientes, lavadores);
};

export default routes;
