import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,

    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate:[validator.isEmail, "plz enter valid email "]
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
        select:false,
    },



 
})  


userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password , 10);
})

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.generateJsonWebToken = async function(){
    return jwt.sign({id:this._id} , process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    })
}

export const User = mongoose.model("User",userSchema)