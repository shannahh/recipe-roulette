import React,{useState} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";



export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then ((userCredential) => {
                console.log(userCredential)


            }) .catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
<div className={'auth-form-container'}>
        <form onSubmit={handleSubmit}>
            <h1> Create an account </h1>


            <input value={name} name={"name"} placeholder={"Enter your full name"}/>

            <input type={"email"} placeholder={"Enter your email"}
                   value={email}
                   onChange={(e) =>setEmail (e.target.value)}

            ></input>


            <input type={"password"} placeholder={'Enter your password'}
                   value={password}
                   onChange={(e) =>setPassword (e.target.value)}
            ></input>

            <button type={"submit"}>Register</button>

        </form>
        <button onClick={() => props.onFormSwitch('login')}> Already have an account? Login here. </button>


</div>

            </>

    )
}

export default Register