import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD63O1P_CXkSnzCJTPvx313rM-1PbEP3hE",
  authDomain: "projeto-chat-e2e32.firebaseapp.com",
  projectId: "projeto-chat-e2e32",
  storageBucket: "projeto-chat-e2e32.appspot.com",
  messagingSenderId: "287928996837",
  appId: "1:287928996837:web:eaf6f621c7abb3d41d150c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)