import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CardList from "./Components/CardList";
import "./App.css";
import Filter from "./Components/Filter";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [totalGallion, setTotalGallion] = useState(0);
  const [totalMornille, setTotalMornille] = useState(0);

  console.log(totalGallion);
  return (
    <>
      <Navbar
        count={count}
        totalGallion={totalGallion}
        totalMornille={totalMornille}
      />
      <Filter />
      <CardList
        count={count}
        setTotalGallion={setTotalGallion}
        totalGallion={totalGallion}
        setTotalMornille={setTotalMornille}
        totalMornille={totalMornille}
        setCount={setCount}
      />
      <Footer />
    </>
  );
}

export default App;
