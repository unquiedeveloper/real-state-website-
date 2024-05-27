import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import {User} from "../model/userSchema.js"
import {generateToken} from "../utils/jwtToken.js"



export const clientRegister = catchAsyncErrors(async(req,res,next)=>{

    const {firstName , lastName , email , phone , password  } = req.body 
    if(!firstName || !lastName  || !email || !phone || !password ){
        return next(new ErrorHandler("Plz fill full form ", 400))
    }
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("user already with this email",400))
    } 


    user = await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
     
    })
    generateToken(user, "User Registered!!!", 200 , res)

    // res.status(200).json({
    //     success:true,
    //     message:"registered successfully",
    //     user,
    // })
})


export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email , password  } = req.body
    if(!email || !password  ){
        return next(new ErrorHandler("plz fill full details", 400))
    }
  

    let user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("invalid Credentials",400))
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("invalid Credentails",400))
    }

    // res.status(200).json({
    //     success:true,
    //     message:"User login Successfully!!"
    // })
    generateToken(user, "User login successfully!!!", 200 , res)
    
})


export const addNewAdmin = catchAsyncErrors(async(req,res,next)=>{
    if(!req.files || Object.keys(req.files).length === 0){
        return next(new ErrorHandler("Avtar required",400))
    }
    const {Avatar} = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if(!allowedFormats.includes(Avatar.mimetype)){
        return next(new ErrorHandler("file format not supported",400))
    }
    const {name , email , phone , password , role } = req.body 
    if(!name || !email || !phone || !password || !role){
        return next(new ErrorHandler("Plz fill full form ", 400))
    }
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("user already with this email",400))
    } 
    const cloudinaryResponse = await cloudinary.uploader.upload(Avatar.tempFilePath);

    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.log("cloudinary Error:", cloudinaryResponse.error || "Unknown cloudinary error");
    }

    user = await User.create({
        name,
        email,
        phone,
        password,
        role:"Admin",
        Avatar:{
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        }
    })
    res.status(200).json({
        success:true,
        message:"New Admin Registered!!!"
    })
})



export const getAllAgents = catchAsyncErrors(async(req,res,next)=>{
    const agents = await User.find({role :"Agent"});
    res.status(200).json({
        success:true,
        agents
    })
})

export const getClientDetails = catchAsyncErrors(async(req,res,next)=>{
    const user = req.user;
    res.status(200).json({
        success:true,
        user,
    })
})

export const logoutAdmin =catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("token","", {
        httpOnly:true,
        expires:new Date(Date.now()),
    }).json({
        success:true,
        message:"Adim logout successfully!!!"
    })
})

export const logoutClient =catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("veiwerToken","", {
        httpOnly:true,
        expires:new Date(Date.now()),
    }).json({
        success:true,
        message:"client  logout successfully!!!"
    })
})

export const addNewAgent= catchAsyncErrors(async(req,res,next)=>{
    if(!req.files || Object.keys(req.files).length === 0){
        return next(new ErrorHandler("Avtar required",400))
    }
    const {Avatar} = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if(!allowedFormats.includes(Avatar.mimetype)){
        return next(new ErrorHandler("file format not supported",400))
    }
    const {name , email , phone , password , role } = req.body 
    if(!name || !email || !phone || !password || !role){
        return next(new ErrorHandler("Plz fill full form ", 400))
    }
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("user already with this email",400))
    } 
    const cloudinaryResponse = await cloudinary.uploader.upload(Avatar.tempFilePath);

    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.log("cloudinary Error:", cloudinaryResponse.error || "Unknown cloudinary error");
    }

    user = await User.create({
        name,
        email,
        phone,
        password,
        role:"Agent",
        Avatar:{
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        }
    })
    res.status(200).json({
        success:true,
        message:"New Agent Registered!!!"
    })

})