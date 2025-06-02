import Administrador from '../models/Administrador.js';

export const registrarAdministrador = async (req, res) => {
  const { nombre, apellido, email, password, direccion, telefono } = req.body;

  try {
    // Verificar si el email ya existe
    const existeAdministrador = await Administrador.findOne({ email });
    if (existeAdministrador) {
      return res.status(400).json({ msg: 'El email ya está registrado' });
    }

    // Crear nuevo administrador
    const nuevoAdministrador = new Administrador({ nombre, apellido, email, direccion, telefono });

    // Hashear password
    nuevoAdministrador.password = await nuevoAdministrador.encrypPassword(password);

    // Crear token para confirmar email (opcional)
    nuevoAdministrador.crearToken();

    // Guardar en la base de datos
    await nuevoAdministrador.save();

    res.status(201).json({ msg: 'Administrador registrado correctamente. Por favor, verifica tu email para activar la cuenta.' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al registrar administrador' });
  }
};
