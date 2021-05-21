import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export default function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);

    function login(email, password) { 
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() { 
        return auth.signOut();
    }

    useEffect(() => {
        const unsub =
            auth.onAuthStateChanged(user => { // sets up listener to firebase auth state, takes in new user as param. needs to load.
                setCurrentUser(user);
                setUserLoading(false);
            })
        return unsub;
    }, []) // only run once-- App when comp renders

    const value = { 
        currentUser, 
        login, 
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {/* only render children once user is loaded (either null or an obj) */}
            {!userLoading && props.children} 
        </AuthContext.Provider>
    )
}