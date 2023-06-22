import mongoose from "mongoose";

const signUp = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
})



const signUpData = mongoose.model('signUpData' , signUp)

export default signUpData

