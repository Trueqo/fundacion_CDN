import Device from '../models/Device.js'

// Con este controlador se obtienen los datos de la db
const getRoutes = async (req, res) => {
    const device = await Device.findAll()
    res.json(device)
}

// Con este controlador se crea un dispositivo 
const createRoute = async (req, res) => {

    const { nombre, serie, precinto } = req.body

    const device = await Device.create({
        nombre,
        serie,
        precinto
    })


    res.send('DeviceCreated')
}

// Create multiple devices

const createMultipleRoutes = async (req, res) => {
    console.log("holaa")
    const data = req.body;
    console.log(data)
    res.send(data)
    
    // try {
    //     data.forEach(async device => {

    //         const newdevice = await createRoute(device)
    //         console.log(newdevice)

    //     });

    // } catch (error) {
    //     return res.status(401).json({ message: 'error en la carga de datos' })
    // }

    // res.status(200).json('hecho');
}



// Con este controlador se actualiza un dispositivo
// const updateDevice = async (req,res) =>{
//     const {id} = req.params
//     const {nombre,serie,precinto} = req.body

//     const device = await Device.update({
//         nombre,
//         serie,
//         precinto
//     },{
//         where:{
//             id
//         }
//     })
//     res.send('DeviceUpdated')
// }
export {
    getRoutes,
    createRoute,
    createMultipleRoutes
}