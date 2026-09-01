import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbsWVdiDYjkYaHntT3VDgnQKJh6EmYVlY",
  authDomain: "smart-workshirt-iot.firebaseapp.com",
  databaseURL: "https://smart-workshirt-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-workshirt-iot",
  storageBucket: "smart-workshirt-iot.firebasestorage.app",
  messagingSenderId: "731439137513",
  appId: "1:731439137513:web:58adaf66cd1b9f2e5c2678"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);