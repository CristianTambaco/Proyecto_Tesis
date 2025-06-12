import { Router } from "express"
import {
  registro,
  confirmarMail,
  verEmprendedores,
  actualizarEmprendedor,
  eliminarEmprendedor
} from "../controllers/emprendedor_controllers.js"

const router = Router()

router.post("/registro", registro) //Crear emprendedor
router.get("/confirmar/:token", confirmarMail)
router.get("/todos", verEmprendedores) //Ver todos los emprendedores
router.put("/actualizar/:id", actualizarEmprendedor) //Actualzar datos de un emprendedor
router.delete("/eliminar/:id", eliminarEmprendedor) // Eliminar un emprendedor

export default router
