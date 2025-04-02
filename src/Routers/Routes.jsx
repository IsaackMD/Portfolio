import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HeaderComponent}  from "../components/Menu";

import Home from "../pages/Home";


export const AppRoutes = () => {
  return (
    <Router>
        <HeaderComponent></HeaderComponent>
            <Routes>
                <Route path = "/" element ={<Home></Home>}/>
            </Routes>
    </Router>
  )
}
