/* 
Always remember, two hitesh's golden rules:

1) Wrap the connection in the try-catch, although you can use promise
   but that is not solving our problem. We always assume that it will throw an error, so using try and catch is best practises
2) Database is always in the another continent, reponse takes time.
   Using async await is the ideal way.
*/

import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected! DB host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection error", error)
        process.exit(1)
    }
}

export default connectDB;