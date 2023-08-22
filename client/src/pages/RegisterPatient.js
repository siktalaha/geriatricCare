import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const RegisterPatient = () => {
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

    const handleSubmit = async(event) => {
        
       
        // console.log(inputs)
        try{
            //to prevent auto refresh
            event.preventDefault()
            const resp=await axios.post('http://localhost:8000/api/v1/patient/register',inputs)
            if(resp.data.success)
            {
                alert("registered successfully");
                navigate("/")
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
            <h2>Register Patient</h2>
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
                <div className="form-group">
                    Enter Your Patient Name:
                    <input className="form-control"
                        type="text"
                        name="pName"
                        value={inputs.pName || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    Enter Your Patient Address:
                    <input className="form-control"
                        type="text"
                        name="address"
                        value={inputs.address || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    Enter Your Patient guardian Name:
                    <input className="form-control"
                        type="text"
                        name="guardianName"
                        value={inputs.guardianName || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    Enter Your Patient Guardian Phone:
                    <input className="form-control"
                        type="number"
                        name="guardianPhone"
                        value={inputs.guardianPhone || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    Enter Your Hospital Name:
                    <input className="form-control"
                        type="text"
                        name="hospitalName"
                        value={inputs.hospitalName || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    Enter Your Patient's Doctor name:
                    <input className="form-control"
                        type="text"
                        name="doctorName"
                        value={inputs.doctorName || ""}
                        onChange={handleChange}
                    />
                </div>




                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default RegisterPatient