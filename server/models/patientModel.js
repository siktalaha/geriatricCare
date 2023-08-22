const mongoose=require('mongoose')
const PatientSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'It is required']
    },
    pName:{
        type:String,
        required: [true, 'Patient Name is required']
    },
    address:{
        type:String,
        required: [true, 'Patient Address  is required for emergency']
    },
    guardianName:{
        type:String,
        required:[true, 'Guardian Name is required']
    },
    guardianPhone:{
        type:String,
        required:[true,"If not given then don't pucho kya hua?"]
    },
    hospitalName:{
        type:String,
        required:true
    },
    doctorName:{
        type:String,
        // required:true
    },

},{timestamps:true})

module.exports=mongoose.model("patients",PatientSchema)