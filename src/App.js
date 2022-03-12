import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import axios from "axios";



// https://mocki.io/v1/88872b96-14d1-4a67-99ab-2e013f9144f0
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
    const api = await axios.get("https://mocki.io/v1/88872b96-14d1-4a67-99ab-2e013f9144f0")
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
        <button>Test 1</button>
      </section>
    </main>
  );
}

export default App;

