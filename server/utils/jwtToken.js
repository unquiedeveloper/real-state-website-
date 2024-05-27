export const generateToken = async(user, message, statuscode, res)=>{
    const token = await  user.generateJsonWebToken();
    
    console.log("Generated Token:", token);
    res.status(statuscode).cookie("token", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }).json({
        success:true,
        message,
        user,
        token,
    })
}