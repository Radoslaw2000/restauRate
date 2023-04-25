// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVMTz04YPzXuzYY-tSiGF20tBC6CIer6M",
  authDomain: "restaurate-a012f.firebaseapp.com",
  databaseURL: "https://restaurate-a012f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurate-a012f",
  storageBucket: "restaurate-a012f.appspot.com",
  messagingSenderId: "198734673753",
  appId: "1:198734673753:web:4badf3ab62638638bcfe48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;