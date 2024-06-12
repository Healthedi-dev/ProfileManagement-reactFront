
import React, { useEffect, useMemo, useState,useRef } from 'react';
import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import { useNavigate } from "react-router-dom";
import 'ag-grid-community/styles/ag-theme-alpine.css';

import Layout from "./Layout/Layout";
import axios from 'axios';
import Popup from 'reactjs-popup';
import './Stylesheet/index.css';
import moment from "moment";
import popup2 from  './Stylesheet/Popup.js';
import PatientTab from   './Layout/PatientTab.js';

const App = () =>
 {
  
  const focusPoint = useRef(null); 
  const focusPoint2 = useRef(null); 
 // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([]);

 const [formDataupdate, setformDataupdate] = useState({name:"",email:""});
  const [formDataSearch, setformDataSearch] = useState("");
  const accountRef = useRef(null);
  const lastRef = useRef(null);

 const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
 //const [popup, setPopup] = useState(false);
 const defaultColDef = useMemo(() => ({
  filter: true,
}));



function handleChangeupdat(event)
{    const { name, value } = event.target;
    setformDataupdate((prevformDataupdate) => ({ ...prevformDataupdate, [name]: value }));
 
}
function handleChangeSearch(event)
{  
      const { name, value } = event.target;
       setformDataSearch((formDataSearch) => ({ ...formDataSearch, [name]: value }));

}

function handleSubmitUpdate()
{

}
const handleOpenupdate = () => {
  //setIsUpdateModalOpen(true);
};
function handleCloseUpdate()
{
  setIsUpdateModalOpen(false);
}

function editPatient(params)
{
  formDataupdate.Account_num=params.data.name;
  formDataupdate.Last_name=params.data.email;

  formDataupdate.First_name=params.data.phone;
 
  formDataupdate.Address=params.data.address;
  formDataupdate.City=params.data.Portfolio_url;

  // formDataupdate.State=params.data.state;
  // formDataupdate.ZipCode=params.data.zipcode;

  // formDataupdate.MI=params.data.mi;
  // formDataupdate.EXT=params.data.ziP_EXT;
  // formDataupdate.marital_status=params.data.maritaL_STATUS;
  // formDataupdate.gender=params.data.gender;

  // formDataupdate.Home_tel=params.data.homE_TEL;
  // formDataupdate.Work_tel=params.data.worL_TEL;
  // formDataupdate.CHART_NUM=params.data.charT_NUM;
  // formDataupdate.RACE_SEQ_NUM=params.data.racE_SEQ_NUM;

  // formDataupdate.AUTHETICITY_SEQ_NUM=params.data.autheticitY_SEQ_NUM;
  // formDataupdate.Class=params.data.class;
  // formDataupdate.Party=params.data.responsiblE_PARTY_SEQ_NUM;
  // formDataupdate.PCP=params.data.pcP_SEQ_NUM;

  // formDataupdate.PROVIDER_SEQ_NUM=params.data.provideR_SEQ_NUM;
  // formDataupdate.LOCATION_SEQ_NUM=params.data.locatioN_SEQ_NUM;
  // formDataupdate.PRACTICE_SEQ_NUM=params.data.practicE_SEQ_NUM;
  // formDataupdate.comment=params.data.comment;
  
  setIsUpdateModalOpen(true);
}

async  function  submitUpdate(e)
 {
      e.preventDefault();

      if (!formDataupdate.Last_name) {
        alert('Last Name can not be empty')
        return
      }
      if (!formDataupdate.First_name) {
        alert('First Name can not be empty')
        return
      }

      if (!formDataupdate.DOB) {
        alert('DOB not be empty')
        return
      }


      //alert(`Name: ${formData.Account_num}, Email: ${formData.email}, Message: ${formData.message}`
    //  );
    
    //alert(formDataupdate.Home_tel)
      try {
        const response =  await fetch("api/Patient/updatePatient", {
            method:"POST",
            headers:{'content-type': 'application/json'},
           body : JSON.stringify({
            PATIENTID: formDataupdate.patientID,
            account_num: formDataupdate.Account_num,
            LAST_NAME: formDataupdate.Last_name,
            FIRST_NAME: formDataupdate.First_name,
            MI: formDataupdate.MI,
          //  DOB:moment(formDataupdate.DOB).format('MM/DD/YYYY') ,
            DOB:formDataupdate.DOB,
            gender: formDataupdate.gender,
            marital_status: formDataupdate.marital_status,
            PATIENT_ADDRESS: formDataupdate.Address,
            City: formDataupdate.City,
            STATE: formDataupdate.State,
            ZIPCODE: formDataupdate.ZipCode,
            Ext: formDataupdate.Ext,
            Home_tel: formDataupdate.Home_tel,
            Work_tel: formDataupdate.Work_tel,
            Race: formDataupdate.Race,
            Authenticity: formDataupdate.Authenticity,
            Class: formDataupdate.Class,
            Party: formDataupdate.Party,
            chart_num: formDataupdate.chart_num,
            Practice: formDataupdate.Practice,
            Location: formDataupdate.Location,
            Provider: formDataupdate.Provider,
            PCP: formDataupdate.PCP,
            comment:formDataupdate.comment,
          }),
        });
       
       
        const responseText = await response.text();
        const data = JSON.parse(responseText);
       
    
      if (data.code === "1") {
          alert(data.mesaage)
       // setName("");
      //  setEmail("");
       // setMessage("User created successfully");
      } 
      else {
          alert(data.mesaage)
      }
      } 
      catch (err) {
        console.log(err);
      }


    };
function fillgrid(event)
{
  // "api/clinic/getProfile


  event.preventDefault();

  let res =   fetch("api/clinic/getProfile", {
    method:"GET",
    headers:{'content-type': 'application/json'},
  //  body : JSON.stringify({
  //   account_num:formDataSearch.accountNum2,
  //   LAST_NAME:formDataSearch.lastName,
  //   FIRST_NAME:formDataSearch.firstName,
  //   DOB:  formDataSearch.dobSearch,
  //   // PRACTICE_SEQ_NUM:formDataSearch.facility,
  //   // LOCATION_SEQ_NUM:formDataSearch.loc,
  //   // PROVIDER_SEQ_NUM:formDataSearch.prov,
  //   ZIPCODE:formDataSearch.zip,
   
  //  })
  }).then((result) => result.json()) // Convert to JSON
  .then((rowData) => setRowData(rowData)); // Update state of `rowData`


  //     //setPosts(response.data);
//  // Fetch data & update rowData state
//   fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
//     .then((result) => result.json()) // Convert to JSON
//     .then((rowData) => setRowData(rowData)); // Update state of `rowData`


  
  
}

 // Column Definitions: Defines & controls grid columns.
 const [colDefs] = useState([
  {headerName:  'id' ,field: 'patientid', hide: true },
  {  headerName: "Profile Name",   field: 'name',sortable: false,cellRenderer:  function(params) {
    return <a href='#'  onClick={() =>editPatient(params)}   > {params.value.toUpperCase() } </a>}} ,
   { headerName:  'Email',   field: 'email' ,sortable: false },
  //  { headerName:  'First Name',  field:'firsT_NAME',sortable: true,unSortIcon: true  },
   { headerName:  'Phone',  field: 'phone' ,sortable: false},
   { headerName: 'Address',field: 'address',sortable: false} ,
   { headerName: 'portfolio_url' ,field: 'portfolio_url' }
  


 ]);
  


 // Container: Defines the grid's theme & dimensions.
 return (
<>



 
  
  {/* // edit patient form */}

  { isUpdateModalOpen? 
  <> 
  <PatientTab></PatientTab>
    </> :     <Layout>  <div class="col-md-6" style={{height: '500px',width: '1000px'}} >
  <form  onSubmit={fillgrid}  >
    <div class="Table">
       
       <div class="Row">
           <div class="col-4"> 
              <lable>Accont #</lable>
               <input type="text" name="accountNum2" id="accountNum2"    className="date-type"   placeholder=""  value={formDataSearch.accountNum2}  onChange={handleChangeSearch}  />
             
           </div>
           <div class="col-4"> 
              <lable>Last Name</lable>
               <input type="text" name="lastName"  className="date-type"    placeholder=""  value={formDataSearch.lastName}  onChange={handleChangeSearch}  />
             
           </div>
           <div class="col-4"> 
              <lable>First Name</lable>
               <input type="text" name="firstName"  className="date-type"   placeholder=""  value={formDataSearch.firstName}  onChange={handleChangeSearch}  />
             
           </div>
          
           <div class="col-4"> 
              <lable>DOB</lable>
               <input type="Date" name="dobSearch"  className="date-type"   placeholder="" value={formDataSearch.dobSearch}  onChange={handleChangeSearch}  />
             
           </div>
      </div>
      <div class="Row">
           <div class="col-4"> 
              <lable>Practice</lable>
               <input type="text" name="facility"  className="date-type"   placeholder=""  value={formDataSearch.facility}  onChange={handleChangeSearch}  />
             
           </div>
           <div class="col-4"> 
              <lable>Location</lable>
               <input type="text" name="loc"  className="date-type"   placeholder=""  rvalue={formDataSearch.loc}  onChange={handleChangeSearch}  />
             
           </div>
           <div class="col-4"> 
              <lable>Provider</lable>
               <input type="text" name="prov"  className="date-type"   placeholder=""  value={formDataSearch.prov}  onChange={handleChangeSearch}  />
             
           </div>
           <div class="col-4"> 
              <lable>ZipCode</lable>
               <input type="text" name="zip"  className="date-type"   placeholder=""  value={formDataSearch.zip}  onChange={handleChangeSearch}  />
             
           </div>
      
    
      </div>
      <div class="Row" style={{overflow: "visible"}}>
      <div class="col-2" styles="text-align:right;"/>
            <div class="col-2" styles="text-align:right;">
            <input type="button"  onClick={fillgrid} className="btnSave" value="Search"   />    
         </div>
    </div>

      </div>
      </form>
     
       
  <div  className={"ag-theme-alpine" }  style={{height: '500px',width: '1000px'}}>
     <AgGridReact rowData={rowData} columnDefs={colDefs} pagination={true} defaultColDef={defaultColDef} paginationPageSizeSelector={[100, 500, 1000]} />
   </div>
   </div>    </Layout>}

      </>


 );
};
 
 


export default App;