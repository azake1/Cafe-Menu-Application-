import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./Categories";
import items from "./assets/data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  //Millana
  const [data, setData] = useState([])
  //const [isLoading, setIsLoading] = useState(true)

  //Want to make API
  // const getData = async() => {
  //   const api = await axios.get("https://mocki.io/v1/491c6463-28ea-404f-bfe4-86fecd77fa67")
  //   setData(api)
  // }
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <button>test</button>
      </section>
    </main>
  );
}

export default App;

