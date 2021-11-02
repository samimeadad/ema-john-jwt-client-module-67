import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseAuthentication = () => {
    initializeApp( firebaseConfig );
}

export default initializeFirebaseAuthentication;


/* 
Steps for Firebase Authentication

Step-1: Initial Setup
1. firebase: create project
2. firebase: create web app
3. firebase: enable auth methods (Google, Password, Github etc)
4. firebase: get the configuration
5. initialize firebase

----------------------------------------------------------------
Step-2: Setup all required components
1. Create Login Component
2. Create Register Component
3. Create route for Login and Register

----------------------------------------------------------------
Step-3: Setup an Authentication System in useFirebase.js
1. Setup Login/Sign-in Method
2. Setup Register/Sign-up Method
3. Declare User State
4. Create a special observer to track a user is signed-in or logged-out
5. Return necessary functions/methods and state variable from useFirebase

----------------------------------------------------------------
Step-4: Create Auth Context Hook in useAuth.js
1. Create a auth Context
2. Create a context provider
3. Set context provider value in useAuth.js
4. Use auth provider
5. Create useAuth hook
6. Export useAuth hook for further use in different files

----------------------------------------------------------------
Step-5: Create Private Route for Place Order Button
1. Create Private Route
2. Set Private Route in App.js

----------------------------------------------------------------
Step-6: Redirect to the initial page (from which page it comes to login page) after successful login
1. after login redirect user to their desired page destination
*/