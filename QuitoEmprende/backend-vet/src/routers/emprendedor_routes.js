import { Router } from "express"
import {
  registro,
  confirmarMail,
  verEmprendedores,
  actualizarEmprendedor,
  eliminarEmprendedor
} from "../controllers/emprendedor_controllers.js"

const router = Router()

router.post("/registro", registro)
router.get("/confirmar/:token", confirmarMail)
router.get("/todos", verEmprendedores)
router.put("/actualizar/:id", actualizarEmprendedor)
router.delete("/eliminar/:id", eliminarEmprendedor)

export default router
