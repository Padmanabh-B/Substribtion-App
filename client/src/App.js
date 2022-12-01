import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {Toaster} from 'react-hot-toast'

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";




function App() {
  return (
    <Router>
      <Nav/>
      <Toaster position={"right-top"} toastOptions={{duration:2000}}/>
      <Routes>
        <Route path="/" element={ <Home /> } exact />
        <Route path="/register" element={ <Register /> } exact  />
        <Route path="/login" element={ <Login /> } exact  />
      </Routes>
    </Router>
  );
}

export default App;
