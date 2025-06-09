import { Router } from "express"
import {
    registro,
    confirmarMail,
    verAdministradores,
    actualizarAdministrador,
    eliminarAdministrador
} from "../controllers/administrador_controllers.js";

const router = Router()

router.post("/registro", registro)
router.get("/confirmar/:token", confirmarMail)
router.get("/todos", verAdministradores)
router.put("/actualizar/:id", actualizarAdministrador);
router.delete("/eliminar/:id", eliminarAdministrador);
export default router