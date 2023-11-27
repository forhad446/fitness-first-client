import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    // create new user
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In user 
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // current user 
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoader(false)
                setUser(currentUser)
            } else {
                console.log('something is wrong');
                setLoader(false)
            }
        });
    }, [user, loader])
    // google Sign in
    const googleSignIn = () => {
        const Provider = new GoogleAuthProvider();
        return signInWithPopup(auth, Provider)
    }

    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        signInUser,
        googleSignIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;