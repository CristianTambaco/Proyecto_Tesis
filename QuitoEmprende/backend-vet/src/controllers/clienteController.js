// controllers/clienteController.js
import Cliente from '../models/Cliente.js';

export const registrarCliente = async (req, res) => {
  const { nombre, apellido, email, password, direccion, telefono } = req.body;

  try {
    // Verificar si ya está registrado
    const existeCliente = await Cliente.findOne({ email });
    if (existeCliente) {
      return res.status(400).json({ msg: 'El email ya está registrado' });
    }

    // Crear nuevo cliente
    const nuevoCliente = new Cliente({
      nombre,
      apellido,
      email,
      direccion,
      telefono
    });

    // Hashear contraseña
    nuevoCliente.password = await nuevoCliente.encrypPassword(password);

    // Crear token de confirmación
    nuevoCliente.crearToken();

    // Guardar en base de datos
    await nuevoCliente.save();

    res.status(201).json({
      msg: 'Cliente registrado correctamente. Por favor, verifica tu email para activar la cuenta.'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al registrar cliente' });
  }
};
