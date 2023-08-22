import axios from 'axios';
import React from 'react'
import {Form,Input} from 'antd'
import { useNavigate } from 'react-router-dom';
const LoginPatient = () => {
    const navigate=useNavigate()
 

    //    console.log(inputs)

    const submitHandler =async (inputs) => {
        
        // console.log(inputs)
        try{
            //to prevent auto refresh
            // event.preventDefault()
            const resp=await axios.post('http://localhost:8000/api/v1/patient/login',inputs)
            if(resp.data.success)
            {
                // console.log(resp.data.data)
                alert(resp.data.message)
                // localStorage.setItem("patientDetails",resp.data.data)
                console.log(resp.data.data)
                // localStorage.setItem('patientdetails', JSON.stringify(resp.data.data));
                // navigate("/pat_details")
                const myObject = {
                    _id:resp.data.data._id,
                    email:resp.data.data.email,
                    pName:resp.data.data.pName,
                    guardianName : resp.data.data.guardianName,
                
                    guardianPhone: resp.data.data.guardianPhone,
                    hospitalName:resp.data.data.hospitalName,
                    doctorName:resp.data.data.doctorName
                  }
                  
                  window.localStorage.setItem("patientDetails", JSON.stringify(myObject));
                  navigate("/pat_details")
                
            }
            else
            {
                alert(resp.data.message)
            }
        }
        catch(error)
        {
              alert(error)
        }

    }
  return (
    <>
       <Form layout='vertical' onFinish={submitHandler}>
        <h1>Patient 's Guardian  please login!!</h1>
        <Form.Item label="Email" name="email">
          <Input type="email"/>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password"/>
        </Form.Item>
        <button className="btn btn-primary">
          Login 
        </button>
      </Form>
    </>
  )
}

export default LoginPatient