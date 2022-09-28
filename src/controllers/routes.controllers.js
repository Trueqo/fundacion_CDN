import Device from '../models/Device.js'

// Con este controlador se obtienen los datos de la db
const getRoutes = async (req, res) => {
    const device = await Device.findAll()
    res.json(device)
}

// Con este controlador se crea un dispositivo 
const createRoute = async (req, res) => {

    const { nombre, serie, precinto, proveedor, placa, marca, modelo, ubicacion, datenow, buyDate, vidaUtil, dRespuestos, seFabrica, existeMejorTecnologia, nivelDeCriticidad, cumpleNecesidadesActuales, inspeccionVisual, haSidoRepadado,nivelDeCarga, cumpleMantenimiento,regimenTrabajo, incidentesOEventos, cumpleParametrosParaAtencion, valorHistorico, costoReparaciones,costoEquipoNuevo } = req.body
    
    const device = await Device.create({
        nombre,
        serie,
        precinto,
        proveedor,
        placa,
        marca,
        modelo,
        ubicacion,
        datenow,
        buyDate,
        vidaUtil,
        dRespuestos,
        seFabrica,
        existeMejorTecnologia,
        nivelDeCriticidad,
        cumpleNecesidadesActuales,
        inspeccionVisual,
        haSidoRepadado,
        nivelDeCarga,
        cumpleMantenimiento,
        regimenTrabajo,
        incidentesOEventos,
        cumpleParametrosParaAtencion,
        valorHistorico,
        costoReparaciones,
        costoEquipoNuevo

    })

    res.send('DeviceCreated')
}



// Metodo para pasar de array a json
const dataArry = async (req, res) => {
    
    const [ nombre, serie, precinto, proveedor, placa, marca, modelo, ubicacion, datenow, buyDate, vidaUtil, dRespuestos, seFabrica, existeMejorTecnologia, nivelDeCriticidad, cumpleNecesidadesActuales, inspeccionVisual, haSidoRepadado,nivelDeCarga, cumpleMantenimiento,regimenTrabajo, incidentesOEventos, cumpleParametrosParaAtencion, valorHistorico, costoReparaciones,costoEquipoNuevo ] = req

    const newDevice =  new Device({
        nombre,
        serie,
        precinto,
        proveedor,
        placa,
        marca,
        modelo,
        ubicacion,
        datenow,
        buyDate,
        vidaUtil,
        dRespuestos,
        seFabrica,
        existeMejorTecnologia,
        nivelDeCriticidad,
        cumpleNecesidadesActuales,
        inspeccionVisual,
        haSidoRepadado,
        nivelDeCarga,
        cumpleMantenimiento,
        regimenTrabajo,
        incidentesOEventos,
        cumpleParametrosParaAtencion,
        valorHistorico,
        costoReparaciones,
        costoEquipoNuevo
    })
    
    await newDevice.save()
    return newDevice 
}

// Create multiple devices

const createMultipleRoutes = async (req, res) => {
    // console.log("holaa")
    const data = req.body;
    
    
    // 
    try {

        data.forEach(async device => {
            const newdevice = await dataArry(device) 

        });

    } catch (error) {
        return res.status(401).json({ message: 'error en la carga de datos' })
    }

    res.status(200).json('hecho');
}


export {
    getRoutes,
    createRoute,
    createMultipleRoutes,
    
}