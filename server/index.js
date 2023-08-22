const express=require("express")
const dotenv=require("dotenv")
const cors= require("cors")
const connectDB = require("./config/dbconfig")
const PatientRoute = require("./routes/PatientRoute")
const DoctorRoute=require("./routes/DoctorRoute")
const HospitalRoute=require("./routes/HospitalRoute")

dotenv.config()

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/v1/patient",PatientRoute)
app.use("api/v1/dr",DoctorRoute)
app.use("api/v1/hosp",HospitalRoute)


app.get("/",(req,res)=>{
    res.send("HEllo")
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