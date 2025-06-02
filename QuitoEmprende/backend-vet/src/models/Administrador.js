import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const administradorSchema = new Schema({
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

// Método para cifrar el password antes de guardar
administradorSchema.methods.encrypPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Método para comparar password en login
administradorSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Método para crear token de confirmación
administradorSchema.methods.crearToken = function() {
  const tokenGenerado = this.token = Math.random().toString(36).slice(2);
  return tokenGenerado;
};

export default model('Administrador', administradorSchema);
