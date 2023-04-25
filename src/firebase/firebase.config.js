// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzWk5YJuz4leJr9ESWhGARm0-Xf8fju8I",
  authDomain: "the-dragon-news-b067c.firebaseapp.com",
  projectId: "the-dragon-news-b067c",
  storageBucket: "the-dragon-news-b067c.appspot.com",
  messagingSenderId: "6000696509",
  appId: "1:6000696509:web:170899b542a90c7da16bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;