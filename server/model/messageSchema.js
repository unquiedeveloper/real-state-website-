import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail  ,  "plx provide valid email"]
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})



export const Message = mongoose.model("Message ", messageSchema)