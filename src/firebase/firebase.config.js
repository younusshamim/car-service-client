// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDCy1gXyHNHwMiKA-eU0f5QCJjtDqd4Igc",
//   authDomain: "genius-car-1bcf0.firebaseapp.com",
//   projectId: "genius-car-1bcf0",
//   storageBucket: "genius-car-1bcf0.appspot.com",
//   messagingSenderId: "942841602281",
//   appId: "1:942841602281:web:32015b8a9aeaecc149d078",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
