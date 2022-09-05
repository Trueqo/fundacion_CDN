import express from 'express';
import routes from './routes/routes.js'
import db from './config/db.js'

const app = express()

app.use(express.json())

// Conexión a la base de datos
try {
    await db.authenticate()
    db.sync()
    console.log('conexion establecida')

} catch (error) {
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