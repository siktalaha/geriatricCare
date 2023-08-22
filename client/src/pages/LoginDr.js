import React from 'react'
import {Button, Form ,Input,message} from 'antd'


const LoginDr = () => {
  const submitHandler =(val)=>{
     console.log(val)
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