const DoctorModel = require("../models/DoctorModel")
const bcrypt = require('bcryptjs')

const registerController = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        const dr = await DoctorModel.findOne({ email });
        if (dr) {
            return res.status(200).send({
                success: false,
                message: "DR Exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword

        const newDr = new DoctorModel(req.body);
        await newDr.save();
        return res.status(200).send({
            success: true,
            message: "DR account created successfully,Please login to continue.."
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: error
        })
    }
}
const loginController = async (req, res) => {
    try {

        const dr = await DoctorModel.findOne({ email: req.body.email })
        if (!dr) {
            return res.status(200).send({
                success: false,
                message: "DR reference not exists"
            })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(200).send({
                success: false,
                message: "Invalid credential"
            })
        }

        //    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        //     expiresIn: "1d",
        //   });
        return res.status(200).send({
            success: true,
            message: `Hello ${dr.drName} now you can monitor from remote locations`,
            data: dr,
        });


    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: error
        })
    }
}
module.exports={
    loginController,
    registerController
}