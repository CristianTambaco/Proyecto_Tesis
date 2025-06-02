import express from 'express'
import cors from 'cors'

const app = express()

app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors())
app.use(express.json())

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API is running...')
})

export default app
