import { Router } from "express"
import {
  registro,
  confirmarMail,
  verClientes,
  actualizarCliente,
  eliminarCliente
} from "../controllers/cliente_controllers.js"

const router = Router()

router.post("/registro", registro)
router.get("/confirmar/:token", confirmarMail)
router.get("/todos", verClientes)
router.put("/actualizar/:id", actualizarCliente)
router.delete("/eliminar/:id", eliminarCliente)

export default router
