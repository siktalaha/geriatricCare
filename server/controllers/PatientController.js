const patientModel = require("../models/patientModel")
const bcrypt = require('bcryptjs')
const nodemailer=require('nodemailer')
//As axios post request made , here the inputs from form is pushed onto database
const registerController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await patientModel.findOne({ email });
        if (user) {
            return res.status(200).send({
                success: false,
                message: "User Exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword

        const newUser = new patientModel(req.body);
        await newUser.save();
        return res.status(200).send({
            success: true,
            message: "Patient created successfully,Please login to continue.."
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

        const user = await patientModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "User not exists"
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
            message: `Hello ${user.guardianName} now you can monitor from remote locations`,
            data: user,
        });


    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: error
        })
    }
}
const sendEmail=async(req,res)=>{
    const {email}=req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'geriatriccare92@gmail.com',
          pass: 'zomosvhpwgtrhtuc'
        }
      });
      
      const mailOptions = {
        from: 'geriatriccare92@gmail.com',
        to: email,
        subject: 'Sending Email From Geriatic Care',
        text: JSON.stringify(req.body)
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
          res.status(400).send({success:false})
          
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send({success:true})
        }
      });
}
module.exports={
    loginController,
    registerController,
    sendEmail
}