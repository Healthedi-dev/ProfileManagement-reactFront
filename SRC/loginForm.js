import logo from './logo.svg';
import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";


function MyForm() {
  const [name, setName] = useState("");
  const [Password, setPass] = useState("");
  const navigate = useNavigate();

 

  const HandleSubmit = (event) => {
    event.preventDefault();
    navigate('/Dashboard');
    //alert(`The name you entered was: ${name}`)

    // axios.get(`http://localhost/WeatherForecast`    , {"Access-Control-Allow-Origin":"*"}   )
    // .then(res => {
    //   const persons = res.data;
    //   alert(res.data)
    //  // this.setState({ persons });
    // })


   // navigate("/home");
    try {
  
    //    //return fetch('http://localhost/api/Login', {mode:'no-cors'})
    //    let res =  fetch("http://localhost/api/Login", {
    //     method: "POST",
    //     mode:'no-cors',
    //     body: JSON.stringify({
    //       name: name,
    //       Password: Password,
         
    //     }),
    //   });
      // let resJson =  res.json();
      // alert(resJson)
      // if (res.status === 200) {
      //   setName("");
      //   setPass("");
      //   //setMessage("User created successfully");
      // } else {
      //  // setMessage("Some error occured");
      // }
      
    
     // .then((data) => {
      //  console.log(data);

     // })
        // .then((response) => response.json()).then((data) => {
        //   console.log(data);
        // });
         //alert(res.response)
       // let resJson =   res.json();
        
      }catch (err) {
        console.log(err);
      }
  
    }
  return (
   
    <div className="limiter">
<div className="container-login100">
<div>
<div className="wrap-login-logo">
{/* <img src="../images/practice-claim-logo-login-pg.png" alt="practice claim logo"/> */}
</div>

<div class="wrap-login100 p-l-45 p-r-45 p-t-45 p-b-45">
    <form onSubmit={HandleSubmit}>
        {
             <>
             <span className="login100-form-title p-b-49 pb-4">Login</span>
             <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required"> 
             <input type="text" name="userName"  className="input100"   placeholder="User Name" required="required"   onChange={(e) => setName(e.target.value)}  />
             <span className="focus-input100" data-symbol="&#xf206;"></span>
             </div>
             <div class="wrap-input100 validate-input" data-validate="Password is required">
             <input type="text" name="Password"  className="input100"  placeholder="Password" required="required"  onChange={(e) => setPass(e.target.value)}/>
             <span className="focus-input100" data-symbol="&#xf190;"></span>
             </div>
             <div className="text-right p-t-8 p-b-31">
             <a href="#">
             <u>Forgot password?</u>
             </a>
             </div>
             <div className="container-login100-form-btn">
             <div className="wrap-login100-form-btn">
             <div className="login100-form-bgbtn"></div>
             <input  className="login100-form-btn p-2" type="submit" styles="height:40px !important"   ></input>
             
             
             </div>
             </div>
             
             
                 </>
        };

    </form>
    </div>
</div>

</div>
</div>
  )
    }


export default MyForm;