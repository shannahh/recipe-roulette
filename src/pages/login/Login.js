import React, { useState} from 'react';

import {useNavigate} from "react-router-dom"

import {UserAuth} from "../../AuthContext";



const Login = (props) => {
    const {signIn} = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState('');
    const navigate = useNavigate();

    const handleSubmit = async  (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/account')

        } catch (e) {
            setError(e.message)
            console.log(e.message)
        };


    }






    return(
        <>

        <div className={'auth-form-container'}>


            <form className={"login-form"} onSubmit={handleSubmit}>

                <h1> Log In </h1>
                <label htmlFor={"email"}> Email</label>
                <input id={"email-input"} type={"email"} placeholder={"youremail@gmail.com"}
                       value={email}
                       onChange={(e) =>setEmail (e.target.value)}


                ></input>
                <label htmlFor={"password"}> Password</label>
                <input id={"password-input"} type={"password"} placeholder={'********'}
                       value={password}
                       onChange={(e) =>setPassword (e.target.value)}
                ></input>


                <button id={"submit-button"} className={"Log-button"} type={"submit"}> Log In </button>

            </form>
            <div className={'register-here-button'}>
            <button className={"link-btn"} onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here.</button>
                <p>Image by Freepik</p>
        </div>



        </div>
            </>
    )
}


export default Login;