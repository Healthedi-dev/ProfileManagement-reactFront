import logo from './logo.svg';


import { useState } from "react";
import { Navigate } from 'react-router-dom';

import Layout from "./Layout/Layout";


function Dashboard()
 {
   

return (
     <Layout>
    <>
   

            <div className="col-md-6">
 <div className="col-md-12 col-lg-12">
     <h5 className="page_heading">Dashboard</h5>
     </div>

<div className="row">
    <div className="col-md-4">
        <section className="panel">
            <div className="">
                <div className="widget-summary">

                    {/* <div className="widget-summary-col">
                        <div className="summary">
                            <h4 className="title"><strong
                                    className="amount"></strong>
                                UnBilled Visits</h4>
                        </div>

                    </div> */}
                </div>
            </div>
        </section>
    </div>
    <div className="col-md-4">
     <section className="panel">
         <div className="">
             {/* <div className="widget-summary">

                 <div className="widget-summary-col">
                     <div className="summary">
                         <h4 className="title"><strong
                                 className="amount"></strong>
                             Missing Encounter</h4>

                     </div>

                 </div>
             </div> */}
         </div>
     </section>
 
 
 </div>
 <div className="col-md-4">
    <section className="panel">
        <div className="">
            {/* <div className="widget-summary">

                <div className="widget-summary-col">
                    <div className="summary">
                        <h4 className="title"><strong
                                className="amount"></strong>
                            Claim Editing</h4>

                    </div>

                </div>
            </div> */}
        </div>
    </section>
</div>

    </div>

    </div> 
                


</>
</Layout>
   )
}
export default Dashboard;