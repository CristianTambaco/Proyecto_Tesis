import Cliente from '../models/Cliente.js'
import { sendMailToRegister, sendMailToRecoveryPassword } from "../config/nodemailer.js"

const registro = async (req, res) => {
  const { email, password } = req.body

  if (Object.values(req.body).includes("")) {
    return res.status(400).json({ msg: "Todos los campos son obligatorios" })
  }

  const existe = await Cliente.findOne({ email })
  if (existe) {
    return res.status(400).json({ msg: "Este email ya está registrado" })
  }

  const nuevoCliente = new Cliente(req.body)
  nuevoCliente.password = await nuevoCliente.encrypPassword(password)
  const token = nuevoCliente.crearToken()

  await sendMailToRegister(email, token)
  await nuevoCliente.save()

  res.status(200).json({ msg: "Revisa tu correo electrónico para confirmar tu cuenta" })
}

const confirmarMail = async (req, res) => {
  const { token } = req.params
  const clienteBDD = await Cliente.findOne({ token })

  if (!clienteBDD) return res.status(404).json({ msg: "Token inválido" })

  clienteBDD.token = null
  clienteBDD.confirmEmail = true
  await clienteBDD.save()

  res.status(200).json({ msg: "Cuenta confirmada correctamente" })
}

const verClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find()
    res.status(200).json(clientes)
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener los clientes" })
  }
}

const actualizarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findById(id);
    if (!cliente) return res.status(404).json({ msg: "Cliente no encontrado" });

    const { nombre, apellido, email, password, telefono } = req.body;

    if (nombre) cliente.nombre = nombre;
    if (apellido) cliente.apellido = apellido;
    if (email) cliente.email = email;
    if (telefono) cliente.telefono = telefono;
    if (password) cliente.password = await cliente.encrypPassword(password);

    const actualizado = await cliente.save();
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar cliente" });
  }
}

const eliminarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findById(id);
    if (!cliente) return res.status(404).json({ msg: "Cliente no encontrado" });

    await cliente.deleteOne();
    res.status(200).json({ msg: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar cliente" });
  }
}

export {
  registro,
  confirmarMail,
  verClientes,
  actualizarCliente,
  eliminarCliente
}
