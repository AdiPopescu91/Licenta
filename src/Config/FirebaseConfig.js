import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
require('dotenv').config()
export const firebaseConfig = {
    apiKey: "AIzaSyCbWc8BHu6Lu9CaTv1Qbztq3aupvB-8S7s",
    authDomain: "licenta-8c70c.firebaseapp.com",
    projectId: "licenta-8c70c",
    storageBucket: "licenta-8c70c.appspot.com",
    messagingSenderId: "788865140993",
    appId: "1:788865140993:web:aacd0c94b977cdded63300"
};
 const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const database=getFirestore();