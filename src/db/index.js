// import mongoose, { connect, connection } from "mongoose"
import {DB_NAME} from '../constants.js'
import mongoose from "mongoose";

const { connect, connection } = mongoose;

const connectDB =  async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error){
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}

export default connectDB