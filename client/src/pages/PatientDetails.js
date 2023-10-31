import {React,useEffect, useState} from 'react'
import {Button,Table} from 'antd'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const PatientDetails = () => {
    // const data=JSON.parse(window.localStorage.getItem('patientDetails'))
    // console.log(data);
    //get the params passed on to fetch data via id using uselocation
    //Update:  from where request is generated dr, hospital ,guardian , by location
    //data usestate, async function useEffect call --page api call to get data using id
    const location=useLocation();
    const id=location.state.id;
    const redirectFrom=location.state.redirectFrom
    
    
  console.log(id,redirectFrom)
  const [data,setData]=useState(null)
  const [log,setLog]=useState(null)
  const getPatDetails = async()=>{
    const resp= await axios.post('http://localhost:8000/api/v1/patient/patdetails',{id})
    setData(resp.data.data)
    // console.log(resp.data.logs)
    setLog(resp.data.logs)
  }
  const sendEmail=async()=>{
       const resp=await axios.post('http://localhost:8000/api/v1/patient/sendEmail',data)
       alert("Message sent")
    }
  useEffect(() => {
      getPatDetails();
  }, [])

  const columns=[
    {
      title:"Message",
      dataIndex:"message"
    }
    
   ]
  // console.log(data)
  return ( 
    <>
    {/* <h1>Hi guardian ={data.guardianName} patient={data.pName} is under doctor name={data.doctorEmail}</h1>
    <button onClick={sendEmail} className="btn btn-primary">Send Email</button> */}
    <div>
       {/* <h2>Welcome {data && data.guardianName}</h2> */}
       hello {redirectFrom}
      <div>
        <p>Log messages of {data && data.pName}</p>
        <Table columns={columns} dataSource={log}/>
      </div> 

      <div>
      <Button type="primary">Download Report</Button>
      <Button type="danger">Emergency Alert </Button>
      <Button type="success">Schedule tests</Button>
      </div>
    </div>

    </>
  )
}
export default PatientDetails