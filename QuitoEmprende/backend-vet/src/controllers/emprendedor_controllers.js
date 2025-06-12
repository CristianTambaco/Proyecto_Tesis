import Emprendedor from '../models/Emprendedor.js'
import { sendMailToRegister, sendMailToRecoveryPassword } from "../config/nodemailer.js"

const registro = async (req, res) => {
  const { email, password } = req.body

  if (Object.values(req.body).includes("")) {
    return res.status(400).json({ msg: "Todos los campos son obligatorios" })
  }

  const existe = await Emprendedor.findOne({ email })
  if (existe) {
    return res.status(400).json({ msg: "Este email ya está registrado" })
  }

  const nuevo = new Emprendedor(req.body)
  nuevo.password = await nuevo.encrypPassword(password)
  const token = nuevo.crearToken()

  await sendMailToRegister(email, token)
  await nuevo.save()

  res.status(200).json({ msg: "Revisa tu correo electrónico para confirmar tu cuenta" })
}

const confirmarMail = async (req, res) => {
  const { token } = req.params
  const emprendedorBDD = await Emprendedor.findOne({ token })

  if (!emprendedorBDD) return res.status(404).json({ msg: "Token inválido" })

  emprendedorBDD.token = null
  emprendedorBDD.confirmEmail = true
  await emprendedorBDD.save()

  res.status(200).json({ msg: "Cuenta confirmada correctamente" })
}

const verEmprendedores = async (req, res) => {
  try {
    const emprendedores = await Emprendedor.find()
    res.status(200).json(emprendedores)
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los emprendedores" })
  }
}

const actualizarEmprendedor = async (req, res) => {
  const { id } = req.params;

  try {
    const emprendedor = await Emprendedor.findById(id);
    if (!emprendedor) return res.status(404).json({ msg: "Emprendedor no encontrado" });

    const { nombre, apellido, email, password, telefono } = req.body;

    if (nombre) emprendedor.nombre = nombre;
    if (apellido) emprendedor.apellido = apellido;
    if (email) emprendedor.email = email;
    if (telefono) emprendedor.telefono = telefono;
    if (password) emprendedor.password = await emprendedor.encrypPassword(password);

    const actualizado = await emprendedor.save();
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar emprendedor" });
  }
}

const eliminarEmprendedor = async (req, res) => {
  const { id } = req.params;

  try {
    const emprendedor = await Emprendedor.findById(id);
    if (!emprendedor) return res.status(404).json({ msg: "Emprendedor no encontrado" });

    await emprendedor.deleteOne();
    res.status(200).json({ msg: "Emprendedor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar emprendedor" });
  }
}

export {
  registro,
  confirmarMail,
  verEmprendedores,
  actualizarEmprendedor,
  eliminarEmprendedor
}
