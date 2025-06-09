import Administrador from '../models/Administrador.js'
import sendMailToRegister from "../config/nodemailer.js"

const registro = async (req, res) => {
    const { email, password } = req.body
    if (Object.values(req.body).includes("")) {
        return res.status(400).json({ msg: "Todos los campos son obligatorios" })
    }

    const existeEmail = await Administrador.findOne({ email })
    if (existeEmail) {
        return res.status(400).json({ msg: "Este email ya está registrado" })
    }

    const nuevoAdmin = new Administrador(req.body)
    nuevoAdmin.password = await nuevoAdmin.encrypPassword(password)
    const token = nuevoAdmin.crearToken()

    await sendMailToRegister(email, token)
    await nuevoAdmin.save()

    res.status(200).json({ msg: "Revisa tu correo electrónico para confirmar tu cuenta" })
}

const confirmarMail = async (req, res) => {
    const { token } = req.params
    const admin = await Administrador.findOne({ token })

    if (!admin) {
        return res.status(404).json({ msg: "Token no válido" })
    }

    admin.token = null
    admin.confirmEmail = true
    await admin.save()

    res.status(200).json({ msg: "Cuenta confirmada correctamente" })
}

const verAdministradores = async (req, res) => {
    try {
        const admins = await Administrador.find()
        res.status(200).json(admins)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener administradores" })
    }
}
const actualizarAdministrador = async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Administrador.findById(id);

        if (!admin) {
            return res.status(404).json({ msg: "Administrador no encontrado" });
        }

        // Puedes actualizar solo algunos campos si vienen en el body
        const { nombre, apellido, email, password } = req.body;

        if (nombre) admin.nombre = nombre;
        if (apellido) admin.apellido = apellido;
        if (email) admin.email = email;
        if (password) {
            admin.password = await admin.encrypPassword(password);
        }

        const adminActualizado = await admin.save();

        res.status(200).json(adminActualizado);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar administrador" });
    }
};

const eliminarAdministrador = async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Administrador.findById(id);

        if (!admin) {
            return res.status(404).json({ msg: "Administrador no encontrado" });
        }

        await admin.deleteOne();

        res.status(200).json({ msg: "Administrador eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar administrador" });
    }
};

export {
    registro,
    confirmarMail,
    verAdministradores,
    actualizarAdministrador,
    eliminarAdministrador
}
