import React from 'react'
import axios from 'axios'
import {Form,Input} from 'antd'
import { useNavigate } from 'react-router-dom'


const LoginHosp = () => {
  const navigate=useNavigate()
  const submitHandler=async(val)=>{
    try{
        const resp=await axios.post("http://localhost:8000/api/v1/hosp/login",val)
        if(resp.data.success)
        {
          alert("Hospital apka login hogaya")
          navigate("/hosp_details")

        }
        else
        alert("Error hogaya apka")
    } 
    catch(error)
    {
      alert(error)
    }
  }
  return (
    <>
    <div>
    <Form layout='vertical' onFinish={submitHandler}>
        <h1>Doctor please login!!</h1>
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
    </div>
    </>
  )
}

export default LoginHosp