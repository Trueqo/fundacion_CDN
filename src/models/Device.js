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
    }
})
export default Device;