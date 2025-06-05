const express = require("express");
const User = require("../model/User");
const {body, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/FetchUser")
const router = express.Router();
const secret = process.env.JWT_SECRET
router.post("/createuser",[
    body("name").isLength({min: 3}).withMessage("name must be atleast 3 char"),
    body("email").isEmail().withMessage("enter valid email"),
    body("password").isLength({min: 5}).withMessage("password must be atleast 5 character")
], async (req , res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }
    try{
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).send("user already exist")
        }
        const salt = bcrypt.genSaltSync(10);
        const secPass = bcrypt.hashSync(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        const data = {
            user: {
                id: user.id
            }
        }
        var authToken = jwt.sign(data, secret);
        res.json({user , authToken})
        console.log("auth", authToken);
    }catch(error){
        res.status(500).send("internal server error")

    }
});

router.post("/login", [
    body("email").isEmail().withMessage("enter valid email"),
    body("password").isLength({min: 5}).withMessage("password must be atleast 5 character")
], 
async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})

    }
    const {email, password} = req.body

    try{
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).send({message: "You are not registered user"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).send({message: "Invalid Credentials"});
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, secret)
        res.json({user, authToken})
    }catch(error){
        res.status(500).send("internal server error");

    }
})

router.get("/getuser", fetchUser, async(req, res)=>{
    try{
        userId = req.user.id

        const user = await User.findById(userId).select("-password");
        res.json(user)
    }
    catch(error){
        res.status(500).send("internal server error");
    }

})
module.exports = router;
