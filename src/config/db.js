import Sequelize from "sequelize";
import dontenv from 'dotenv'
import mysql2 from 'mysql2';
dontenv.config({path:'.env'})


const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect: 'mysql',
        dialectModule: mysql2,
        define:{
            timestamps: false
        },
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }
)
export default db;