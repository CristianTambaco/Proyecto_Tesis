// models/Cliente.js
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const clienteSchema = new Schema({
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
  }
}, {
  timestamps: true
});

// Cifrar contraseña
clienteSchema.methods.encrypPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Comparar contraseña
clienteSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Crear token
clienteSchema.methods.crearToken = function() {
  const tokenGenerado = this.token = Math.random().toString(36).slice(2);
  return tokenGenerado;
};

export default model('Cliente', clienteSchema);
