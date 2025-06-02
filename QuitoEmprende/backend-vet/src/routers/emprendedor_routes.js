import { Router } from 'express'
import { registro, confirmarMail, verEmprendedores } from '../controllers/emprendedor_controllers.js'

const router = Router()

router.post('/registro', registro)
router.get('/confirmar/:token', confirmarMail)
router.get('/todos', verEmprendedores) //ver todos los emprendedores

export default router
