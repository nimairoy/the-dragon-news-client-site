import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // handle on auth state change
        useEffect( () => {
            const unsubscribe = onAuthStateChanged(auth, loggedUser => {
                console.log('On Auth State Changed ', loggedUser);
                setUser(loggedUser);
                setLoading(false);
            })

            return () => {
                unsubscribe();
            }

        }, []);



    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;