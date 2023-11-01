import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password); 
  }

  const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    const userEmail = currentUser?.email || user?.email;
    const loggedUser = {email: userEmail};

      setUser(currentUser);
      setLoading(false);
      console.log('Current User', currentUser);
      if(currentUser){
       
        console.log(loggedUser);
        axios.post('https://car-doc-server-pink.vercel.app/jwt',loggedUser, {withCredentials: true})
        .then(res => {
          console.log( 'token response', res);
        })
        // return;
      }else{
        axios.post('https://car-doc-server-pink.vercel.app/logout',loggedUser, {withCredentials: true})
        .then(res => console.log(res));
      }

     

    })

    return () => {
      return unsubscribe();
    }
  },[])
  
  const info= {
     user,
     loading,
     createUser,
     signIn,
     logOut
  }

  return (
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;