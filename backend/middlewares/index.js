const jwt=require('jsonwebtoken');
const User=require('../models/user');

exports.isAuthenticated = async(req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header and split it by space to get the token at 1st position as it is in the shape of  ..... bearer <token> ... so beaerer is 0 position and token is 1 position

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    try{
        const decoded= jwt.verify(token,process.env.SECRET_KEY);

        const user = await User.findById(decoded.id);

        if(!user) {
            return res.status(401).json({message:"Unauthorized"});
        }

        //Attach the full user object to req.user
        req.user= user;

        next();
    }
    catch(err){
        return res.status(401).json({message:"invalid Token"});
    }
}