import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const emprendedorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    trim: true,
    default: null
  },
  telefono: {
    type: String,
    trim: true,
    default: null
  },
  nombreNegocio: {
    type: String,
    required: true,
    trim: true
  },
  descripcionNegocio: {
    type: String,
    trim: true,
    default: ''
  },
  imagenPerfil: {
    type: String, // URL de la imagen del perfil o del logo del negocio
    default: null
  },
  productos: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }],
  token: {
    type: String,
    default: null
  },
  confirmEmail: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

// Método para cifrar la contraseña antes de guardar
emprendedorSchema.methods.encrypPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Método para comparar la contraseña al hacer login
emprendedorSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Método para crear token de confirmación
emprendedorSchema.methods.crearToken = function() {
  const tokenGenerado = this.token = Math.random().toString(36).slice(2);
  return tokenGenerado;
};

export default model('Emprendedor', emprendedorSchema);
