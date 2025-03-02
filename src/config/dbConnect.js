import mongoose from "mongoose"

 mongoose.connect(process.env.DB_STRING_CONNECTION)

 
const db = mongoose.connection;

export default db;