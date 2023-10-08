import './App.css';
import NavBar from "./Components/Navigation Bar/NavBar";
import Food from "./pages/search/Food";
import  {Routes, Route} from 'react-router-dom';
import Homepage from "./pages/home/Homepage"


import React, {useState} from "react";
import Loginswitch from "./pages/login/Loginswitch";
import AccountUser from "./pages/Signed In Pages/account/AccountUser";
import ProtectedRoute from "./Components/ProtectedRoute";

import About from "./pages/about/About";
import Footer from "./Components/footer/Footer";
import Contact from "./pages/contact/Contact";






function App() {


  return (
      <>
<NavBar/>

         <div className={"App"}>



<Routes>

         <Route path="/" element={<Homepage/>} />
         <Route path ={"/login"} element={<Loginswitch/>} />
         <Route path ={"/contact"} element={<Contact/>} />

         <Route path ={"/about"} element={<About/>} />

    <Route path={"/account"} element={
        <ProtectedRoute>
        <AccountUser/>

        </ProtectedRoute>}/>

    <Route path={"/search"} element={
        <ProtectedRoute>
        <Food/>
        </ProtectedRoute>} />


</Routes>



         </div>
<Footer/>



      </>

  );
}

export default App;
