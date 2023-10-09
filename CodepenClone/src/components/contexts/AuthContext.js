import React, {useContext, useEffect, useState} from 'react'
import {getAuth, getRedirectResult, onAuthStateChanged, GoogleAuthProvider, signInWithRedirect} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState()
    const [isMember, setMemberStatus] = useState(false)

    function googleAuthenticate(){
        return signInWithRedirect(auth, provider);

        // POPUP ALTERNATIVE
        // const provider = new GoogleAuthProvider();
        // const popup = signInWithPopup(auth, provider).then((result) => { // This gives you a Google Access Token. You can use it to access the Google API.
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     const user = result.user;
        // }).catch((error) => { // Handle Errors here.
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     const email = error.email;
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        // });
        // return popup;
    }

    // FOR AFTER SIGNIN REDIRECT
    // function redirectResult() {
    //     const results = getRedirectResult(auth).then((result) => { 
    //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //         const token = credential.accessToken;
    //         const user = result.user;
    //         console.log("redirectResult:user", user)
    //     }).catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         const email = error.email;
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //     });
    //     return results
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.email.split('@').pop() === 'q4inc.com'){
                setMemberStatus(true);
            }
            setCurrentUser(user)
        })

        return unsubscribe;
    }, [])
    

    const value = {
        currentUser,
        isMember,
        googleAuthenticate,
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
