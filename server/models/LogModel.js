const mongoose=require("mongoose")
const PatientLogSchema=new mongoose.Schema({
    patientEmail:{
        type:String,
        required:[true, 'Email is required']
    },
    
    message:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("logPatient",PatientLogSchema)
