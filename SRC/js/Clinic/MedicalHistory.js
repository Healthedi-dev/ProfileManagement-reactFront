import React from 'react';
import { useState,useEffect } from "react";
import ReactDOM from 'react-dom/client';

const  MedicalHistory =(props) =>{


const [formDataDiag, setFormDataDiag] = useState("");
  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormDataDiag((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

return(
  <>
<form  >
<div class="Table">
     
<div class="Row">
  <a href=''>Diagnosis</a>
   
</div>
<div class="Row">
  <a href=''>Allergy</a>
   
</div>
<div class="Row">
  <a href=''>Current Status</a>
   
</div>
</div>
    </form>
    <div class="Table TableSaleRight">
  
   <div class="Row">
    ddddddddddd
     </div>
     </div>

    </>
)
}
export default  MedicalHistory;