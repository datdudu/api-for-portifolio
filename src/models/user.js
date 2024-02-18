import { Sequelize, DataTypes } from "sequelize"
import sequelize from '../db/sequelize.js'


const User = sequelize.define('User', {
    id : {
        type: DataTypes.UUID,
        primaryKey: true,
    },
    name : {
        type: DataTypes.TEXT,
        primaryKey: false,
    },
    lastName : {
        type: DataTypes.TEXT,
        primaryKey: false,
    },
    createdAt : {
        type: DataTypes.TEXT,
        primaryKey: false,
    },
    updatedAt : {
        type: DataTypes.TEXT,
        primaryKey: false,
    },
})

export default User