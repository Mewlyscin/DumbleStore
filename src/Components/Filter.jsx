import data from "/src/data/data.json";

function Filter() {
  return (
    <div className="filters">
      <input type="text" placeholder="🔎 Type to search" />
      <select name="category-list" id="category-list">
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
