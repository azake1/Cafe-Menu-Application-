import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import axios from "axios";
<<<<<<< HEAD
import Menu from "./components/Menu";
=======
import Menu from "./components/Menu"
>>>>>>> 710bffa1a75120268822ed5b0bea0b4d3e586c92


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
<<<<<<< HEAD
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <button>test</button>
=======
        <Categories categories={categories} filteredFoodList={filteredFoodList} />
        <Menu data={data} />
>>>>>>> 710bffa1a75120268822ed5b0bea0b4d3e586c92
      </section>
    </main>
  );
}

export default App;

