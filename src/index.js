import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../src/css/Main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const firebaseConfig = {
  apiKey: "AIzaSyAi741S1Y2qZhCbkwQ2oh3WEcF5E0mGUfY",
  authDomain: "kaungminkhantportfolio.firebaseapp.com",
  projectId: "kaungminkhantportfolio",
  storageBucket: "kaungminkhantportfolio.appspot.com",
  messagingSenderId: "67220795972",
  appId: "1:67220795972:web:10de2881037cddc9c04211",
  measurementId: "G-ST92YKLSRG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
