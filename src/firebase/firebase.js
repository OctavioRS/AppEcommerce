
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDQScVByfpZhFlP-20IeZGqrkSjTgfPp4o",
  authDomain: "proyectoferreteria-6d00c.firebaseapp.com",
  projectId: "proyectoferreteria-6d00c",
  storageBucket: "proyectoferreteria-6d00c.appspot.com",
  messagingSenderId: "163922657683",
  appId: "1:163922657683:web:fecc92e8c543a497a42866"
};


const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)