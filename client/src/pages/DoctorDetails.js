import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'antd'
const DoctorDetails =  () => {
  const doctor = JSON.parse(window.localStorage.getItem('doctorDetails'))
  const [pat, setPat] = useState()
  // console.log(doctor)
  const getPatientDetails = async () => {
    try {
      const resp = await axios.post("http://localhost:8000/api/v1/dr/get_pat_details", { email: doctor.email })
      console.log(resp.data);
      //backend we are sending 2 of the message from controller success, data hence to retrieve data resp.data.data
      setPat(resp.data.data)

    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    console.log("Hi")
    getPatientDetails()

  }, [])

 const columns=[
  {
    title:"Patient name",
    dataIndex:"pName"
  },
  {
    title:"Guardian Name",
    dataIndex:"guardianName"
  },
  {
    title:"Guardian Phone",
    dataIndex:"guardianPhone"
  },
  {
   title:"Guardian Email",
   dataIndex:"email"
  }
 ]
  //console.log(pat)
  return (
    <>
    <div>
      Hi {doctor.drName}
    </div>
    <div>
      <Table columns={columns} dataSource={pat}/>
    </div>
    </>
  )
}

export default DoctorDetails