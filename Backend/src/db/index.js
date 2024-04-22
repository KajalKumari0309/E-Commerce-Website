const mongoose = require('mongoose')
import { DB_NAME } from '../constant'

export const connectDB = async() =>{
    try {
        const connectionString = `{process.env.MONGODB_URI} ${DB_NAME}`
        const connectionInstance = await mongoose.connect(connectionString)
        console.log(`\n MongoDB connected!! \n DB-HOST:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed" , error)
    }
}

