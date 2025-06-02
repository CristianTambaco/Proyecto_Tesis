import { Router } from "express"
import { registro, confirmarMail, verAdministradores } from "../controllers/administrador_controllers.js"

const router = Router()

router.post("/registro", registro)
router.get("/confirmar/:token", confirmarMail)
router.get("/todos", verAdministradores)

export default router
