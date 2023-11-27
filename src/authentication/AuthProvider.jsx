import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState('')
    // create new user
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    // current user
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoader(false);
                setUser(currentUser)
            } else {
                setLoader(false);
            }
        });

        return subscribe;

    }, [user, loader])

    const authInfo = {
        createUser,
        signInUser,
        user,
        loader,
        setLoader,
        googleSignIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;