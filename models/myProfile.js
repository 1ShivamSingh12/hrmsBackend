
import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    university:{
        type:String
    },
    educationLevel:{
        type:String
    },
    timePeriodFrom:{
        type:Number
    },
    timePeriodto:{
        type:Number
    },
    language:{
        type:String
    },
    professionalCourses:{
        type:String
    },
    description:{
        type:String
    }
  });

const CompanyDurationSchema = new mongoose.Schema({
    experiencedYears:{
        type:Number
    },
    experiencedMonths:{
        type:Number
    },
    relaventExperiencedYears:{
        type:Number
    },
    relaventExperiencedMonths:{
        type:Number
    },
  });

  const ComapnyDetailSchema = new mongoose.Schema({

    joiningDate:{
        type:String
    },
    officeShift:{
        type:String
    },
  });

  const CompanyInfoSchema = new mongoose.Schema({

    empId:{
        type:String
    },
    designation:{
        type:String
    },
    department:{
        type:String
    }

  });

const myProfileModel = new mongoose.Schema({
    firstname:{
        type:String
    }, 
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    contactNumber:{
        type:Number
    },
    dateOfBirth:{
        type:String
    },

    profilePic:{
        type:String
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    martialStatus:{
        type:String
    },
    education:EducationSchema,
    companyDetails:ComapnyDetailSchema,
    companyInfo:CompanyInfoSchema,
    companyDuration:CompanyDurationSchema

})

export const myProfileData = mongoose.model('myProfileData' , myProfileModel)

export const profile = myProfileData
