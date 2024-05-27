import mongoose from "mongoose";
import validator from "validator";

const agentregisterSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        require:true,
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
    address:{
        type:String,
        required:true
    }
})


export const Agent = mongoose.model("Agent", agentregisterSchema);