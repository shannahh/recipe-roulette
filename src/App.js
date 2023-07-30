import './App.css';
import NavBar from "./Components/Navigation Bar/NavBar";
import Food from "./pages/search/Food";
import  {Routes, Route} from 'react-router-dom';
import Homepage from "./pages/home/Homepage"
import {BrowserRouter} from "react-router-dom";

import React, {useState} from "react";

import Loginswitch from "./pages/login/Loginswitch";




function App() {

  return (
      <>

         <div className={"App"}>
             <NavBar/>


<Routes>
         <Route path="/" element={<Homepage/>} />
         <Route path={"/search"} element={<Food/>} />
    <Route path ={"/login"} element={<Loginswitch/>} />





</Routes>



         </div>




      </>

  );
}

export default App;
