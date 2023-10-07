import React,{useState} from 'react';
import{useNavigate} from "react-router-dom";
import {UserAuth} from '../../AuthContext'



const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password);
            navigate('/account')

        }catch(e) {
            setError(e.message);
            console.log(e.message);
        }



    };

    return (
        <>
            <div className={'auth-form-container'}>
                <form className={"register-form"} onSubmit={handleSubmit}>
                    <h1> Create an account </h1>

                    <label htmlFor={"email"}> Email</label>
                    <input type={"email"} placeholder={"Enter your email"}
                           value={email}
                           onChange={(e) =>setEmail (e.target.value)}
                    />
                    <p>{error}</p>


                    <label htmlFor={"password"}> Password</label>
                    <input type={"password"} placeholder={'Enter your password'}
                           value={password}

                           onChange={(e) =>setPassword (e.target.value)}
                    ></input>

                    <button className={"Log-button"} type={"submit"}>Register </button>

                </form>
                <button className={"link-btn"} onClick={() => props.onFormSwitch('login')}> Already have an account? Login here. </button>
                <p>Image by Freepik</p>


            </div>

        </>

    )
}

export default Register