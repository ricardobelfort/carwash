import express from 'express';
import LavadorController from '../controllers/lavadoresController.js';

const router = express.Router();

router
  .get('/lavadores', LavadorController.listarLavadores)
  .get('/lavadores/:id', LavadorController.buscarLavadorPorId)
  .post('/lavadores', LavadorController.cadastrarLavador)
  .put('/lavadores/:id', LavadorController.atualizarLavador)
  .delete('/lavadores/:id', LavadorController.removerLavadorPorId);

export default router;
