import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkaxNpYFWVUq5pzwKxL_DiYrQOjambpyE",
    authDomain: "vinyl-vibes.firebaseapp.com",
    projectId: "vinyl-vibes",
    storageBucket: "vinyl-vibes.appspot.com",
    messagingSenderId: "656380869355",
    appId: "1:656380869355:web:f59408657f87fec4efdcae"
};

    const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);