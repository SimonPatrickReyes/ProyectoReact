//ENRUTAMIENTO
import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import "https://fonts.google.com/specimen/Archivo";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

import './App.css'

function App() {
  


}

export default App
