import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instance/mysql'

export interface post extends Model {
    id: number,
    title: string,
    body: string 
}

export const Post = sequelize.define<post>("Post", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: 'post',
    timestamps: false
})