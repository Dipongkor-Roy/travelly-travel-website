import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext=createContext();

const auth=getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    
    const createUser=(email,passoword)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passoword);
    }
    const logIn=(email,passoword)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passoword);
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const profileUpdate=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unSubscribe();
    },[])
  
    const AuthInfo={user,createUser,logIn,profileUpdate,logOut,loading};
    return (
       <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;