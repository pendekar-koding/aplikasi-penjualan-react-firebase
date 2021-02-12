import React from 'react';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from "./config/firebase";
import {useAuthState} from 'firebase/'

firebase.initializeApp(firebaseConfig);

const FirebaseContext = React.createContext();


function FirebaseProvider(props) {
    return <FirebaseContext.Provider value={{

    }}>
        {props.children}
    </FirebaseContext.Provider>

}

export default FirebaseProvider;