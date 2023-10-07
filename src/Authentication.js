import React, { useEffect, useState } from "react";
import { auth } from "../src/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "./Components/button/Button";
import { NavLink } from "react-router-dom";


const Authentication = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    const userSignout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
            })
            .catch((error) => {
                console.log("Error signing out:", error);
            });
    };

    return (
        <>
            {authenticatedUser === null ? (
                <>
                    <NavLink to="/login">
                        <Button>Login</Button>
                    </NavLink>
                </>
            ) : (
                <>


    <NavLink to={"/search"}>
                       <li>Search</li>
                    </NavLink>
                    <NavLink to="/account">
                        <li>Account</li>
                    </NavLink>

                    <Button onClick={userSignout}>Logout</Button>


                </>
            )}
        </>
    );
};

export default Authentication;
