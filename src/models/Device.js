import {DataTypes} from 'sequelize'
import db from '../config/db.js'

const Device = db.define('Example',{
    
    nombre:{
        type:DataTypes.STRING,
    },
    serie:{
        type:DataTypes.STRING,
    },
    precinto:{
        type:DataTypes.INTEGER,
    },
    proveedor:{
        type:DataTypes.STRING,
    },
    placa:{
        type:DataTypes.STRING,
    },
    marca:{
        type:DataTypes.STRING,
    },
    modelo:{
        type:DataTypes.STRING,
    },
    ubicacion:{
        type:DataTypes.STRING,
    },
    datenow:{
        type:DataTypes.STRING,
    },
    buyDate:{
        type:DataTypes.STRING,
    },
    vidaUtil:{
        type:DataTypes.INTEGER,
    },
    dRespuestos:{
        type:DataTypes.BOOLEAN,
    },
    seFabrica:{
        type:DataTypes.BOOLEAN,
    },
    existeMejorTecnologia:{
        type:DataTypes.BOOLEAN,
    },
    nivelDeCriticidad:{
        type:DataTypes.INTEGER,
    },
    cumpleNecesidadesActuales:{
        type:DataTypes.BOOLEAN,
    },
    inspeccionVisual:{
        type:DataTypes.INTEGER,
    },
    haSidoRepadado:{
        type:DataTypes.BOOLEAN,
    },
    nivelDeCarga:{
        type:DataTypes.INTEGER,
    },
    cumpleMantenimiento:{
        type:DataTypes.BOOLEAN,
    },
    regimenTrabajo:{
        type:DataTypes.INTEGER,
    },
    incidentesOEventos:{
        type:DataTypes.BOOLEAN
    },
    cumpleParametrosParaAtencion:{
        type:DataTypes.BOOLEAN
    },
    valorHistorico:{
        type:DataTypes.INTEGER
    },
    costoReparaciones:{
        type:DataTypes.INTEGER
    },
    costoEquipoNuevo:{
        type:DataTypes.INTEGER
    }
    
    

})
export default Device;