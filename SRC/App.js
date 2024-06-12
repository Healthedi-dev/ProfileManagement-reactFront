import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Routes, Route } from "react-router-dom";
import ReactGrid  from './ReactGrid.js';
import LoginForm from './loginForm.js';
import Dashboard from './Dashboard.js';
import Layout from "./Layout/Layout";

 export default function App() {
return (

   <Routes>
     <Route path="/" element={<LoginForm />}></Route>
    <Route path="/Dashboard" element={<Dashboard />}/> 
    <Route path="/ReactGrid" element={<ReactGrid />}/> 
   </Routes>


)
}
