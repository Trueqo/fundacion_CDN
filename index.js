import express from 'express';
import routes from './src/routes/routes.js';
import db from './src/config/db.js';
import cors from 'cors'; 

const app = express()
app.use(cors(
    "Access-Control-Allow-Origin: *"
))
app.use(express.json())


// Conexión a la base de datos
try {
    await db.authenticate()
    db.sync()
    console.log('conexion establecida')

} catch (error) {
    console.log("Soy el error: ")
    console.log(error)
}


// Rutas
app.use(routes)


//para ejecutar el servidor

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("<h1>Servidor funcionando</h1>")
})

app.listen(PORT,()=>{
    console.log(`servidor corriendo en ${PORT}`)
})