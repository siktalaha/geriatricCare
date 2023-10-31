import { React, useEffect, useState } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { useLocation } from "react-router-dom";
const PatientDetails = () => {
  // const data=JSON.parse(window.localStorage.getItem('patientDetails'))
  // console.log(data);
  //get the params passed on to fetch data via id using uselocation
  //Update:  from where request is generated dr, hospital ,guardian , by location
  //data usestate, async function useEffect call --page api call to get data using id
  const location = useLocation();
  const id = location.state.id;
  const redirectFrom = location.state.redirectFrom;

  // console.log(id, redirectFrom);
  const [data, setData] = useState(null);
  const [logs, setLogs] = useState(null);
  const getPatDetails = async () => {
    const resp = await axios.post(
      "http://localhost:8000/api/v1/patient/patdetails",
      { id }
    );
    setData(resp.data.data);
    // console.log(resp.data.logs)
    setLogs(resp.data.logs);
  };
  const sendEmail = async (subject,text) => {
    const resp = await axios.post(
      "http://localhost:8000/api/v1/patient/sendEmail",
      {
        "email":data.email,
        "subject":subject,
        "text":text
      }
    );

    alert("Message sent");
  };
  useEffect(() => {
    // const func= async()=>{
    //   await getPatDetails();
    //   console.log(logs)
    // }
    // // console.log(logs)
    // func()
    getPatDetails()
     
  }, []);

  const columns = [
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title : "Value",
      // dataIndex: "value"
      render:(text,record)=>
      (record.value >= 102 ? 
        <p className="fw-bold text-danger">
          {record.value}
        </p>:
        <p>
          {record.value}
        </p>
      )
    }
  ];
  // console.log(data)
  // console.log(logs)
  if(logs)
  {
    // console.log(logs)
    for(let i=0;i<logs.length;i++)
     {
      if(logs[i].value>=102 && logs[i].type==0)
        {
          let text="Temperature is recorded higher than usual reading. Immediate medication is required.Kindly arrange for tests if required "
          let subject="Body Temperature high Alert- geriatic care"
          sendEmail(subject,text)
        }
     }
  }

  const downloadReport = () => {
    var json = JSON.stringify(logs);
    json = [json];
    var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });
    var isIE = false || !!document.documentMode;
    if (isIE) {
        window.navigator.msSaveBlob(blob1, "report.txt");
    } else {
        var url = window.URL || window.webkitURL;
        const link = url.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "report.txt";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
  }

  return (
    <>
      {/* <h1>Hi guardian ={data.guardianName} patient={data.pName} is under doctor name={data.doctorEmail}</h1>
    <button onClick={sendEmail} className="btn btn-primary">Send Email</button> */}
      <div className="p-5">
        {/* <h2>Welcome {data && data.guardianName}</h2> */}
        Hello {redirectFrom}
        <div className="w-50 mx-auto">
          <p>Log messages of {data && data.pName}</p>
          <Table columns={columns} dataSource={logs} />
        </div>
        <div>
          <Button type="primary" onClick={downloadReport}>Download Report</Button>
         { redirectFrom==="doctor" && <Button type="danger">Emergency Alert </Button>}
          <Button type="success">Schedule tests</Button>
        </div>
      </div>
    </>
  );
};
export default PatientDetails;
