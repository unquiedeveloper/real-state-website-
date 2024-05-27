import {Agent} from "../model/agentregisterSchema.js"
import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"


export const agentRegister = catchAsyncErrors(async(req,res,next)=>{
    const {firstName , lastName   , email , phone , address} = req.body
    if(!firstName || !lastName  || !email ||!phone ||!address){
    //    return  res.status(400).json({
    //         success:false,
    //         message:"plz fill full details"
    //     })
    return next(new ErrorHandler("plz fill full form",400))
    }

    await Agent.create({firstName , lastName  , email , phone, address })
    res.status(200).json({
        sucess:true,
        message:"agent register  successfully!!!"
    })
})