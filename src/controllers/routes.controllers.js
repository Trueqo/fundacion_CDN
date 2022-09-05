import Device from '../models/Device.js'

// Con este controlador se obtienen los datos de la db
const getRoutes = async(req,res) =>{
    const device = await Device.findAll()
    res.json(device)
}

// Con este controlador se crea un dispositivo 
const createRoute = async (req,res) =>{
    
    const {nombre,serie,precinto} = req.body

    const device = await Device.create({
        nombre,
        serie,
        precinto
    })
    
    
    res.send('DeviceCreated')
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
    createRoute
}