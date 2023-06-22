import express from "express";
import { directory, directoryAdd, directoryUpdate ,searchData } from "./controllers/directory-controller.js";
import connectDB from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";
import { myProfile, myProfileAdd, myProfileInsert, myProfileUpdate } from "./controllers/myProfile-controller.js";
import helmet from "helmet"
import { changePassword, signUpAdd } from "./controllers/signUp-controller.js";
import { login } from "./controllers/login-controller.js";
const app = express()

app.use(helmet())


app.use(bodyParser())
app.use(cors())

app.get('/directory-add',directoryAdd)

app.get('/directory',directory)

app.get('/directory-update',directoryUpdate)

app.get('/directory-search', searchData)

app.get('/my-profile-add', myProfileAdd)

app.post('/my-profile',myProfile)

app.patch('/my-profile-update',myProfileUpdate)

app.get('/sign-up-add', signUpAdd)

app.post('/login', login)

app.patch('/my-profile-insert', myProfileInsert)

app.post('/change-pass', changePassword)






app.listen(4000 , async()=>{

    console.log('Listening at port 4000');

    await connectDB()


})