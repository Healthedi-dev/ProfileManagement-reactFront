import logo from './logo.svg';
import React from 'react';
import { useState } from "react";

// import './js/bootstrap.min.js'
// import './js/main.js'
// import './js/popper.js'


const App = () => {
   
  const [userName, setFirstName] = useState('');

  const handleSubmit = (e) => {
      
   // alert('A name was submitted: ' + this.state.value);
    e.preventDefault();

    try {
        let res =  fetch("https://httpbin.org/post", {
          method: "POST",
          body: JSON.stringify({
          //  name: this.state.userName,
           // email: this.state.Password,
           // mobileNumber: "4444",
          }),
        });
        let resJson =   res.json();
        if (res.status === 200) {
            alert('A name was submitted: ')
         // setMessage("User created successfully");
        } else {
            alert('A name was not submitted: ')
          //setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }


  }


  return (
<>

<div class="limiter">
<div class="container-login100">
<div>
<div class="wrap-login-logo">
{/* <img src="../images/practice-claim-logo-login-pg.png" alt="practice claim logo"/> */}
</div>

<div class="wrap-login100 p-l-45 p-r-45 p-t-45 p-b-45">
<form onSubmit={handleSubmit} >
   {
         <>
<span class="login100-form-title p-b-49 pb-4">Login</span>
<div class="wrap-input100 validate-input m-b-23" data-validate="Username is required"> 
<input type="text" name="userName"  class="input100"   placeholder="User Name" required="required"   onChange={(e) => setFirstName(e.target.value)}  />
<span class="focus-input100" data-symbol="&#xf206;"></span>
</div>
<div class="wrap-input100 validate-input" data-validate="Password is required">
<input type="text" name="Password"  class="input100"  placeholder="Password" required="required" />
<span class="focus-input100" data-symbol="&#xf190;"></span>
</div>
<div class="text-right p-t-8 p-b-31">
<a href="#">
<u>Forgot password?</u>
</a>
</div>
<div class="container-login100-form-btn">
<div class="wrap-login100-form-btn">
<div class="login100-form-bgbtn"></div>
<input  class="login100-form-btn p-2" type="submit" styles="height:40px !important"   ></input>


</div>
</div>


    </>
     
}
</form>
</div>

</div>
</div>
</div>
</>
    )}

  
export default App;