import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conectarDB from './database.js';

import administradorRoutes from './routes/administradorRoutes.js';
import emprendedorRoutes from './routes/emprendedorRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';

dotenv.config();

const app = express();
conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api/administradores', administradorRoutes);
app.use('/api/emprendedores', emprendedorRoutes);
app.use('/api/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ok on http://localhost:${PORT}`);
});
