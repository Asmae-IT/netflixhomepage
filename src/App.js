import "./App.css";
import React, { Fragment } from "react";
import Nav from "./components/Nav/Nav.js";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Nav />
        <Header />
        <Home />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
