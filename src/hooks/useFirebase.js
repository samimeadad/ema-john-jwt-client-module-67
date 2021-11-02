import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect } from "react";
import initializeFirebaseAuthentication from "../Firebase/firebase.init";

initializeFirebaseAuthentication();

const useFirebase = () => {
    const [ user, setUser ] = useState( {} );
    const [ loading, setLoading ] = useState( true );
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    console.log( loading );

    const signInUsingGoogle = () => {
        return ( signInWithPopup( auth, googleProvider ) )
            .finally( () => {
                setLoading( false );
            } );
    }

    const logOut = () => {
        setLoading( true );
        signOut( auth )
            .then( () => {
                setUser( {} );
            } )
            .finally( () => setLoading( false ) );
    }

    //Observer user auth state changed or not
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
            if ( user ) {
                getIdToken( user )
                    .then( idToken => localStorage.setItem( 'idToken', idToken ) )
                setUser( user );
            }
            else {
                setUser( {} );
            }
            setLoading( false );
        } );
        return () => unsubscribe;
    }, [ auth ] );

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;