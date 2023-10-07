import {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";

function CredentialsValidate () {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const checkEmail = (e) =>{
        setEmail(e.target.value);

        if(regex.test(email)===false) {
            setError('Please enter valid email')
        }else{
            setError('');
            return true;
        }

        const handleSubmit = (e) => {
            e.preventDefault();


            createUserWithEmailAndPassword(auth, email, password)

                .then ((userCredential) => {
                    console.log(userCredential)


                }) .catch((error) => {
                console.log(error)
            })
        }
    }

}
export default CredentialsValidate