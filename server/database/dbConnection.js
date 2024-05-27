import mongoose  from "mongoose";


export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName:"realstate"
    }).then(()=>{
        console.log("Connection successfyl!!");
    }).catch(()=>{
        console.log("Connection failed");
    })

}

