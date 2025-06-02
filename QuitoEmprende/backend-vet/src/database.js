import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connection = async () => {
    console.log("URL DE MONGO:", process.env.MONGODB_URI_LOCAL);

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI_LOCAL)
    console.log(`🟢 MongoDB conectado en ${db.connection.host}:${db.connection.port}`)
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message)
  }
}

export default connection
