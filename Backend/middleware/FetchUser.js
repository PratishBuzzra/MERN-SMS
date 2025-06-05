var jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET;

const fetchUser = (req, res, next)=>{
    const token = req.header("auth-token")
    if(!token){
        return res.status(400).send("access denied. no token provided")
    }
    try{
        const data = jwt.verify(token, secret)
        req.user = data.user
        next()
    }catch(error){
       res.status(401).send("Invalid token")
    }


}


module.exports = fetchUser;