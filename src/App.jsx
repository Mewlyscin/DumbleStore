import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CardList from "./Components/CardList";
import "./App.css";
import Filter from "./Components/Filter";

function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <CardList />
      <Footer />
    </>
  );
}

export default App;
