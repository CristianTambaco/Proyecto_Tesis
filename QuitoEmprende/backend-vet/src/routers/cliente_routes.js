import { Router } from 'express'
import { registro, confirmarMail, verClientes } from '../controllers/cliente_controllers.js'

const router = Router()

router.post('/registro', registro)
router.get('/confirmar/:token', confirmarMail)
router.get('/todos', verClientes) //muestra toods los clientes

export default router
