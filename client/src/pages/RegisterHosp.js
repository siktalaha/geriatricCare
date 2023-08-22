import React from 'react'
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const RegisterHosp = () => {
  const navigate = useNavigate();
  const submitHandler = async (val) => {
    try {
      const resp = await axios.post("http://localhost:8000/api/v1/hosp/register", val)
      if (resp.data.success) {
        alert("Hospital you are in!")
        navigate("/")
      }
      else {
        alert(resp.data.message)
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <>
      <div>
        <Form layout='vertical' onFinish={submitHandler}>
          <h1>Hospital please register!!</h1>
          <Form.Item label="Hospital Name" name="HospName">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <Form.Item label="Hospital Address" name="HospAddress">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Hospital Phone" name="HospPhone">
            <Input type="text" />
          </Form.Item>

          <button className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </>
  )
}

export default RegisterHosp