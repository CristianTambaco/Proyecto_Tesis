//requerir modulos
import express from  'express'
import dotenv from 'dotenv'
import cors from 'cors'

//inicializamos preparar importaCiones
const app = express()
dotenv.config()

//Configuraciones   2 FORMAS DE CREAR VARIABLES:  3000 CUANDO QUIERO CONPARTIR INFORMACIÓN CON CUALQUIERA 
app.set('port',process.env.PORT || 3000)
app.use(cors())    //especie de middleware

//Middlewares
app.use(express.json())       //TODAS LAS PETICIONES EN FORMATO JSON


//Rutas
app.get("/",(req,res)=>{       //get,post,delete
    res.send("---> --->     Server on")
})

//Exportar la instancia de express

export default app