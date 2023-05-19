import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC507KkdTRA7dyTuVRgurNLWFcMZag1m7A",
  authDomain: "prepararte-baf7b.firebaseapp.com",
  projectId: "prepararte-baf7b",
  storageBucket: "prepararte-baf7b.appspot.com",
  messagingSenderId: "943238831171",
  appId: "1:943238831171:web:049edb01760752991ec8f6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)
