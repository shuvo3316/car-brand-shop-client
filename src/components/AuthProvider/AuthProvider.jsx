import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../fireebase/firebase.config";


const auth = getAuth(app);

export const AuthContext= createContext()
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
 
     // create user 
 
     const createUser=(email,password)=>{
         setLoading(true);
 
         return createUserWithEmailAndPassword(auth, email, password)
         
     }
 
     // observe user 
     useEffect(()=>{
         const unSubscribe=onAuthStateChanged(auth,currentUser=>{
             console.log('user in the auth state changed',currentUser);
             setUser(currentUser);
             setLoading(false)
         });
         return()=>{
             unSubscribe();
         }
     },[])
 
 
     //sign in 
     const logIn=(email,password)=>{
         setLoading(true);
 
         return signInWithEmailAndPassword(auth,email,password)
     }
 
     // logout 
     const logOut=()=>{
         setLoading(true);
 
         return signOut(auth)
     }
 
     // google 
 
     const googleSignIn= ()=>{
         return signInWithPopup(auth,provider);
     }

     const info={user,createUser,logIn,logOut,loading,googleSignIn};

    return (
        <AuthContext.Provider value={info}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;