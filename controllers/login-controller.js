import bcrypt from "bcrypt";
import signUpData from "../models/signup.js";

export const login = async (req, res) => {
    try{
        const user = await signUpData.findOne({email:req.body.email})
        const matchPass = await bcrypt.compare(req.body.password , user.password)
        if(matchPass){
            res.send({ "status": "success", "message": "Login Success", "data":user })
        }else{
        
            res.send({ "status": "failed", "message": "Email or Password is not Valid" })
        }
    }catch(err){
        console.log("Error in Login Controller : ", err);
    }
}