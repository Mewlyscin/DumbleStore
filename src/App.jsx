import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CardList from "./Components/CardList";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <CardList />
      <Footer />
    </>
  );
}

export default App;
