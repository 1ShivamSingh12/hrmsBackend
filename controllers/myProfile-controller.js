
import { myProfileData } from '../models/myProfile.js';

export const myProfileAdd = async () => {

    await myProfileData.insertMany([
        {
            firstname: 'Shivam',
            lastname: 'Singh',
            email: 'shivam.singh5@appinventiv.com',
            contactNumber: 7906278633,
            dateOfBirth: '19 Dec 2000',
            gender: 'Male',
            address: 'Noida',
            martialStatus: 'Single',
            education: {
                university: 'Dit University',
                educationLevel: 'B.Tech',
                timePeriodFrom: '',
                timePeriodto: '',
                language: 'English',
                professionalCourses: '',
                description: '',
            },
            companyDetails: {
                joiningDate: '7 Feb 2022',
                officeShift: 'Morning Shift',
            },
            companyInfo:{
                empId:'AI 1547',
                designation:'Software Engineer',
                department:'Angular'   
            },
            companyDuration:{
                experiencedYears: '',
                experiencedMonths: 12,
                relaventExperiencedYears: '',
                relaventExperiencedMonths: 7
            }
        }
    ])

    console.log('wkfweufgwe');
}

export const myProfile = async (req, res) => {

    let data = await myProfileData.find({ email: req.body.email })
    res.send(data)
}


export const myProfileUpdate = async (req, res) => {
    
    // await myProfileData.deleteMany({})

    if (req.body) {
        await myProfileData.findByIdAndUpdate(req.body.id, req.body.data).then((data) => {
            res.send(data)
        })
        let result = await myProfileData.updateOne({ _id: req.body.id }, { '$set': { "companyDuration": req.body.data } })
    }


}

export const myProfileInsert = async (req, res) => {

    console.log(req.body);

    let data = await myProfileData.updateOne({ _id: "6491906cadc86661acaab89b" }, { $set: { "profilePic": req.body.payload } })
    // await myProfileData.updateOne({ "_id": "648c34f1cfd7788509aeedaf" }, { $set: { "profilePic": '' } })
    // let data = await myProfileData.find({ _id: "6489be1ff91e148ea9ee187d" })
    res.send({ "status": "success", "message": "Profile Updated", "data":data })

    

}




