import React from 'react';
import { useState,useEffect } from "react";
import ReactDOM from 'react-dom/client';
import MedicalHistory from './MedicalHistory';

const  Clinic =(props) =>{
    const [start, setStart] = useState(false);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState("00:00");
    const [timeSetting, setTimeSetting] = useState({ m: 0, s: 0 });
    const [formDataDiag, setFormDataDiag] = useState("");
    var initTime = new Date();

    const showTimer = (ms) => {
      const milliseconds = Math.floor((ms % 1000) / 10)
        .toString()
        .padStart(2, "0");
      const second = Math.floor((ms / 1000) % 60)
        .toString()
        .padStart(2, "0");
      const minute = Math.floor((ms / 1000 / 60) % 60)
        .toString()
        .padStart(2, "0");
      // const hour = Math.floor(ms / 1000 / 60 / 60).toString();
      setTime(
        // hour.padStart(2, "0") +
        // ":" +
        minute + ":" + second 
      );
    };
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormDataDiag((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
   function stoptime(props)
   {
     setStart(props);
   }
  async function saveDiagnosis(e)
   {
    e.preventDefault(e);

    
    if (!formDataDiag.diag_code) {
      alert("Diagnosis code can't be empty")
      return
    }
    if (!formDataDiag.diag_desc) {
      alert("Diagnosis Description can't be empty")
      return
    }

    try {
      const response =  await fetch("api/Clinic/saveDiagnosis", {
       method:"POST",
       headers:{'content-type': 'application/json'},
      body : JSON.stringify({
        diagnosiS_CODE: formDataDiag.diag_code,
        diagnosiS_DESC: formDataDiag.diag_desc
      })});

      const responseText = await response.text();
      alert(responseText)
      const data = JSON.parse(responseText);
     
  
    if (data.code === "200") {
        alert(data.mesaage)
        setFormDataDiag("")

     // setName("");
    //  setEmail("");
     // setMessage("User created successfully");
    } 
    else {
        alert(data.mesaage)
    }
  } catch (err) {
    console.log(err);
  }



   }
  
    const clearTime = () => {
      setTime("00:00");
      setCount(0);
    };
  
    useEffect(() => {
     
      if (!start) {
        return;
      }

      var id = setInterval(() => {
        var left = count + (new Date() - initTime);
        setCount(left);
        showTimer(left);
        if (left <= 0) {
          setTime("00:00");
          clearInterval(id);
        }
      }, 1);
      return () => clearInterval(id);
    }, [start]);

 return(  
  <>
  <div class="Table">
   
   <div class="Row" styles="colspan:3" >
  <select name="Provider" id="Provider"  value={formDataDiag.Provider} onChange={handleChange}  >
                  <option value="123">Medical History</option>
                  <option value="123">Medication</option>
                  <option value="123">Care Plan</option>
                  <option value="123">Assessment</option>
 </select>   
 </div>
 </div>
 <MedicalHistory></MedicalHistory>
 {/* <div class="tabs">
<ul class="nav nav-tabs">
<li class="active">
<a href="#popular1" data-toggle="tab" >Medical History</a>

</li>
<li>
<a href="#popular1" data-toggle="tab" onclick={stoptime}>Medication</a>
</li>
<li>
<a href="#popular1" data-toggle="tab" onclick={stoptime}>Care Plan</a>
</li>
<li >
<a href="#popular1" data-toggle="tab" onclick="loadTabControl('Document','SearchDocs');">Assessment</a>
</li>


</ul>
<div class="tab-content">
<MedicalHistory></MedicalHistory>

</div>
<div id="Financial" class="tab-pane" >

</div>
<div id="Insurance" class="tab-pane">
</div>

</div> */}
 
 
      </>
 )


    

}
export default Clinic;