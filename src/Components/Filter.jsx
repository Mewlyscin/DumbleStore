import data from "/src/data/data.json";
import { useState } from "react";

function Filter() {
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="filters">
      <select
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="Boule de poil">Boule de poil</option>
        <option value="Félins">Félins</option>
        <option value="Rapace">Rapace</option>
        <option value="Chevaux Magique">Chevaux Magique</option>
        <option value="Chimère">Chimère</option>
        <option value="Dragon">Dragon</option>
      </select>
    </div>
  );
}

export default Filter;
