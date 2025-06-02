// routes/emprendedorRoutes.js
import express from 'express';
import { registrarEmprendedor } from '../controllers/emprendedorController.js';

const router = express.Router();

router.post('/registrar', registrarEmprendedor);

export default router;
