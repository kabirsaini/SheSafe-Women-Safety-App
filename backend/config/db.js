const mongoose = require("mongoose");

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }
    catch(err){
        console.log("Error connecting to MongoDB",err.message);
        process.exit(1); // Exit the process with a non-zero status code
    }
}

module.exports=connectDB;