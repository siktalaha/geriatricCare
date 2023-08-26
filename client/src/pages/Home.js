import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link,} from 'react-router-dom'
const Home = () => {
  return (
    <div className='outer-box home-box'>
      <h1>Welcome To Geriatric Care</h1>
     <div className='d-flex justify-content-center align-items-center flex-row'>
     <ButtonGroup aria-label="Basic example">
    <div className='d-flex align-items-center'>
      <Link to="/register_pat"> <Button variant="secondary" >Register Patient</Button></Link>
      <Link to="/register_dr"> <Button variant="primary" >Register Dr</Button></Link>
      <Link to="/register_hosp"> <Button variant="secondary" >Register Hosp</Button></Link>
     </div>
     <div className='d-flex align-items-center'>
     <Link to="/login_pat"> <Button variant="primary" >Login PAT</Button></Link>
     <Link to="/login_dr"> <Button variant="secondary" >Login Dr</Button></Link>
     <Link to="/login_hosp"> <Button variant="primary" >Login Hosp</Button></Link>
     </div>
    </ButtonGroup>
     </div>
    </div>
  )
}

export default Home