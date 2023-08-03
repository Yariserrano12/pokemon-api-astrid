import React, { useState } from "react";
import { BrowserRouter, Route, Routes, navBar} from "react-router-dom";
import Details from "../pages/details";
import NavBar from "../componentes/navBar"; 
import Main from "../pages/main"; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/pokemon/:id" element={<Details/>} />
        </Route>
        <Route path="*" element={<NavBar to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter