import { User } from "../model/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken"
export const isAdminAuthenticated = catchAsyncErrors(async(req,res,next)=>{
    const token = req.cookies.adminToken;
    if(!token){
        return next(new ErrorHandler("Admin is not authenticated",400));
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id)

    next();
})

