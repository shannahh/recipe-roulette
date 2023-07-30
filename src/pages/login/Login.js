import React,{useState} from 'react';
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase"



const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
                console.log(userCredential)


            }) .catch((error) => {
            console.log(error)
        })
    }


    return(
        <>
        <div className={'auth-form-container'}>


            <form onSubmit={handleSubmit}>
                <h1> Log in to your account </h1>
                <input type={"email"} placeholder={"Enter your email"}
                       value={email}
                       onChange={(e) =>setEmail (e.target.value)}

                ></input>
                <input type={"password"} placeholder={'Enter your password'}
                       value={password}
                       onChange={(e) =>setPassword (e.target.value)}
                ></input>
                <button type={"submit"}>Log In</button>

            </form>
            <button onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here.</button>


        </div>
            </>
    )
}


export default Login;