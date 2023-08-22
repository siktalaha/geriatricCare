const mongoose=require("mongoose")
const PatientLogSchema=new mongoose.Schema({
    patientId:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    message:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("logPatient",PatientLogSchema)
