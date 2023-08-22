import {React,useEffect} from 'react'
import axios from 'axios'
const PatientDetails = () => {
    const data=JSON.parse(window.localStorage.getItem('patientDetails'))
    const sendEmail=async()=>{
       const resp=axios.post('http://localhost:8000/api/v1/patient/sendEmail',data)
       alert("Message sent")
    }
  return (
    <>
    <h1>Hi guardian ={data.guardianName} patient={data.pName} is under doctor name={data.doctorName}</h1>
    <button onClick={sendEmail} className="btn btn-primary">Send Email</button>
    </>
  )
}
export default PatientDetails