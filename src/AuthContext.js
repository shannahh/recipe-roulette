import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
//Sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
//Logout
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                console.log(currentUser);
                setUser(currentUser);

            })
            return () => {
                unsubscribe();
            }
        },[]
    )

    return (

        <UserContext.Provider value={{createUser, user, logout, signIn}}>
            {children}

        </UserContext.Provider>

    );
};


export const UserAuth = () => {
    return useContext(UserContext);
};