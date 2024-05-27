import { Message } from "../model/messageSchema.js";
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
export const sendMessage = catchAsyncErrors(async(req,res,next)=>{
    const {username , email , phone , message} = req.body
    if(!username || !email ||!phone ||!message){
    //    return  res.status(400).json({
    //         success:false,
    //         message:"plz fill full details"
    //     })
    return next(new ErrorHandler("plz fill full form",400))
    }

    await Message.create({username , email , phone, message })
    res.status(200).json({
        sucess:true,
        message:"message sent successfully!!!"
    })
})