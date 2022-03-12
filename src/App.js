import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import axios from "axios";
import Menu from "./components/Menu";


function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [categories, setCategories] = useState([])

  //Millana
  const [data, setData] = useState([])
  //const [isLoading, setIsLoading] = useState(true)

  //Want to make API
  const getData = async() => {
    const api = await axios.get("https://mocki.io/v1/491c6463-28ea-404f-bfe4-86fecd77fa67")
    setData(api.data.menu)
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
      let menuItems = data.filter((item) => item.category === selectedCategory || selectedCategory === "all");
      setFilteredFoodList(menuItems);
  }, [])

  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];

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

