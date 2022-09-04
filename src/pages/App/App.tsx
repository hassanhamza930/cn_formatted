import React from 'react';
import Users from '../users/UI/users';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAf_Xcn2TFArNeKBiVzmBfDdowWuWuuIxQ",
  authDomain: "careernetwork-49577.firebaseapp.com",
  projectId: "careernetwork-49577",
  storageBucket: "careernetwork-49577.appspot.com",
  messagingSenderId: "644352516404",
  appId: "1:644352516404:web:aa7f1af27946c8d6dcc561"
};


function App() {
  
  const app = initializeApp(firebaseConfig);


  return (
    <div >
      <Users/>
    </div>
  );
}

export default App;
