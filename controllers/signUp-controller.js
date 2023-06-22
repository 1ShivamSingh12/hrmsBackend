import signUpData from "../models/signup.js";
import bcrypt from "bcrypt";

export const signUpAdd = async (req, res) => {
    let password = "shivam791";
    let securePass = await bcrypt.hash(password, 10);

    await signUpData.insertMany({
        name: "Shivam",
        email: "shivam.singh5@appinventiv.com",
        password: securePass,
    });
};

export const changePassword = async (req, res) => {
    console.log(req.body.email);
    try {
        let user = await signUpData.findOne({ email: req.body.email });
        const matchPass = await bcrypt.compare(req.body.data.old_pass, user.password);
        if (matchPass) {
            if (req.body.data.new_pass == req.body.data.confirm_pass) {
                let newSecurePass = await bcrypt.hash(req.body.data.confirm_pass, 10);
                await signUpData.updateOne({ email: req.body.email },{ $set: { "password": newSecurePass } });
                res.send({ status: "Success", message: "Password Changed" });
            } else {
             res.send({ status: "Failed", message: "New password and confirm doesn't match" });
            }
        } else {
            res.send({ status: "Failed", message: "Old Password doesn't match" });
        }
    } catch (err) {
        console.log(err);
    }
};
