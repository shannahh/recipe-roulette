import React from 'react';
import {  useNavigate } from "react-router-dom";
import { Button } from "../../../Components/button/Button";
import { UserAuth } from "../../../Context/AuthContext";
import './AccountUser.css';

const AccountUser = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
            console.log('You are logged out');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <main className="account-container"> {/* Gebruik <main> als semantisch element */}
            <header>
                <h1>Account</h1>
            </header>
            <section>
                {user ? (
                    <p>User Email: {user.email}</p>
                ) : (
                    <p>You are not logged in.</p>
                )}
            </section>
            <footer>
                <Button onClick={handleLogout}>Logout</Button>
            </footer>
        </main>
    );
};

export default AccountUser;