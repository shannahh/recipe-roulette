
import Login from "../login/Login";
import React, {useState} from "react";
import Register from "../register/Register"
import './Loginswitch.css'



function Loginswitch (){
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <>

            <div className={"Loginswitch"}>
                {
                    currentForm === "login" ? <Login onFormSwitch ={toggleForm}/> : <Register onFormSwitch ={toggleForm}/>
                }

            </div>




        </>

    );
}

export default Loginswitch;