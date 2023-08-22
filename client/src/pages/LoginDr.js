import React from 'react'
import {Button, Form ,Input,message} from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LoginDr = () => {
  const navigate=useNavigate()
  const submitHandler = async (val)=>{
     try {
      const resp=await axios.post("http://localhost:8000/api/v1/dr/login",val) 
      console.log(resp)
      if(resp.data.success)
      {
        alert(resp.data.message)
        const myObject = {
          _id:resp.data.data._id,
          email:resp.data.data.email,
          drName:resp.data.data.drName,
        drPhone: resp.data.data.drPhone,
        }
        
        window.localStorage.setItem("doctorDetails", JSON.stringify(myObject));



        navigate('/dr_details')

      }
      else
      alert(resp.data.message)

      
      
     } catch (error) {
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

export default LoginDr