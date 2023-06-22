import mongoose from "mongoose";

const directoryModel = new mongoose.Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    department:{
        type:String
    },
    email:{
        type:String
    },
    birthday:{
        type:String
    }
})


const directoryData = mongoose.model('directoryData' , directoryModel)

export default directoryData

