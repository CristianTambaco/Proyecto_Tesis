import Emprendedor from '../models/Emprendedor.js';

export const registrarEmprendedor = async (req, res) => {
  const { nombre, apellido, email, password, direccion, telefono, nombreNegocio, descripcionNegocio, imagenPerfil } = req.body;

  try {
    // Verificar si el email ya está registrado
    const existeEmprendedor = await Emprendedor.findOne({ email });
    if (existeEmprendedor) {
      return res.status(400).json({ msg: 'El email ya está registrado' });
    }

    // Crear nuevo emprendedor
    const nuevoEmprendedor = new Emprendedor({
      nombre,
      apellido,
      email,
      direccion,
      telefono,
      nombreNegocio,
      descripcionNegocio,
      imagenPerfil
    });

    // Hashear contraseña
    nuevoEmprendedor.password = await nuevoEmprendedor.encrypPassword(password);

    // Crear token de confirmación
    nuevoEmprendedor.crearToken();

    // Guardar en la base de datos
    await nuevoEmprendedor.save();

    res.status(201).json({
      msg: 'Emprendedor registrado correctamente. Por favor, verifica tu email para activar la cuenta.'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al registrar emprendedor' });
  }
};
