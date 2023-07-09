import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Registr from "./components/Registr";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-in" exact element={<SignIn />} />
          <Route path="/registration" exact element={<Registr />} />
          <Route path="/" exact element={<><NavBar /> <Home /> <About /> <Contacts /></>} />
          <Route path="*" exact element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 