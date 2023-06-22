import directoryData from "../models/directoryModels.js"

export const directoryAdd = async () => {

    await directoryData.insertMany([
        {
            name: 'Shivam',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'shivam.singh5@appinventiv.com',
            birthday: '19th Dec',
            id: 'AI1547'
        },
        {
            name: 'Ayush',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'ayush.singh@appinventiv.com',
            birthday: '21st March',
            id: 'AI1554'

        },
        {
            name: 'Swapnil',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'swapnil.maurya@appinventiv.com',
            birthday: '25th July',
            id: 'AI1553'

        },

        {
            name: 'Rishabh Ghildiyal',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'rishabh.ghildiyal@appinventiv.com',
            birthday: '11th August',
            id: 'AI1548'

        },
        {
            name: 'Ishaan Sharma',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'ishaan.sharman@appinventiv.com',
            birthday: '30th January',
            id: 'AI1549'

        },
        {
            name: 'Arpit Dwivedi',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'arpit.dwivedi@appinventiv.com',
            birthday: '29th June',
            id: 'AI1545'

        },
        {
            name: 'Nandini Rohatgi',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'nandini.rohatgi@appinventiv.com',
            birthday: '5th October',
            id: 'AI1546'

        },
        {
            name: 'Akshat Sahu',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'akshat.sahu@appinventiv.com',
            birthday: '29th June',
            id: 'AI1550'

        },
        {
            name: 'Nikhil Dubey',
            designation: 'Software Engineer',
            department: 'Angular',
            email: 'nikhil.dubey@appinventiv.com',
            birthday: '26th June',
            id: 'AI1562',
        },
    ])
}


export const directory = async (req, res) => {
    let data = await directoryData.find()
    res.send(data)
}


export const directoryUpdate = async (req, res) => {

    // await directoryData.deleteMany({})
    await directoryData.updateMany(
        { name: 'Ayush' },
        {
            $set: { department: 'Android' },
        },
    )
    let data = await directoryData.find()
    res.send(data)
}

export const searchData = async (req, res) => {
    let name1 = req.query.nameSearch
    let department1 = req.query.departmentSearch


    console.log(req.query, 'wekfhweif');

    if((name1 && department1 == '') || ( name1 == '' && department1)){

        let data = await directoryData.find(
            {
                "$or": [
                    { "name": { $regex: new RegExp(name1, "i") } },
                    { "department": { $regex: new RegExp(department1, "i") } }
                ],
            }
        )
    res.send(data)

}else{
        let data = await directoryData.find(
            {
                "$and": [
                    { "name": { $regex: new RegExp(name1, "i") } },
                    { "department": { $regex: new RegExp(department1, "i") } }
                ],
            }
        )
        res.send(data)
    }   
}