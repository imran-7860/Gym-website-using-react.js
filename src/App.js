import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Plans />
        <About />
        <Trainers />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
