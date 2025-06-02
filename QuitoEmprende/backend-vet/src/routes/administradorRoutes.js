import { Router } from 'express';
import { registrarAdministrador } from '../controllers/administradorController.js';

const router = Router();

// POST /api/administradores/registro
router.post('/registro', registrarAdministrador);

export default router;
