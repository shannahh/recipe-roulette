import React from 'react'
import {Link, useNavigate} from "react-router-dom";

import {Button} from "../../../Components/button/Button";
import {UserAuth} from "../../../AuthContext";
import './AccountUser.css'
const AccountUser = () => {
    const {user, logout} =UserAuth();
    const navigate = useNavigate();
    const handleLogout  = async () => {
        try {
            await logout ();
            navigate('/login');
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>


        <div className={"account-container"}>
            <h1>Account</h1>
            <p>User Email: {user && user.email} </p>
            <Button onClick={handleLogout}>Logout</Button>
            <Link to={"/account"}> </Link>
        </div>
            </>

    )
}
export default AccountUser