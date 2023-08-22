import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const LoginPatient = () => {
    const navigate=useNavigate()
    const [inputs, setInputs] = React.useState({});
    const handleChange = (event) => {
        //assumption doc name considered unique 
        //at each change json object formed -- original inputs
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({
            ...values,
            [name]: value
        }))
    }

    //    console.log(inputs)

    const handleSubmit =async (event) => {
        
        // console.log(inputs)
        try{
            //to prevent auto refresh
            event.preventDefault()
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
      <h2>Login Patient</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    Enter Your Email:
                    <input className="form-control"
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    Enter Your Password:
                    <input className="form-control"
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default LoginPatient