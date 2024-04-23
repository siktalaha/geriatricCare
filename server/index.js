const express=require("express")
const dotenv=require("dotenv")
const cors= require("cors")
const connectDB = require("./config/dbconfig")
const PatientRoute = require("./routes/PatientRoute")
const DoctorRouter=require("./routes/DoctorRoute")
const HospitalRoute=require("./routes/HospitalRoute")
const LogRoute=require("./routes/LogRoute")
const PrescripRouter=require("./routes/PrescriptionRoute")
const ScheduleTestRouter=require("./routes/ScheduleTestRoute")

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/v1/patient",PatientRoute)
app.use("/api/v1/dr",DoctorRouter)
app.use("/api/v1/hosp",HospitalRoute)
app.use("/api/v1/log",LogRoute)
app.use("/api/v1/prescribe",PrescripRouter)
app.use("/api/v1/schedule",ScheduleTestRouter)

app.get("/",(req,res)=>{
    res.send("Telemedicine Backend Is Live")
})

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        const PORT = 8000 | process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();