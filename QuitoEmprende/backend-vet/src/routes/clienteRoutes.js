// routes/clienteRoutes.js
import express from 'express';
import { registrarCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.post('/registrar', registrarCliente);

export default router;
