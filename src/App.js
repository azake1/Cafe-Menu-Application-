import React, {useEffect, useState} from "react";
import Categories from "./Categories";
import axios from "axios";
import Menu from './components/Menu'

// fake API 
// https://mocki.io/v1/88872b96-14d1-4a67-99ab-2e013f9144f0
function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [categories, setCategories] = useState([])


  //Millana

  //const [isLoading, setIsLoading] = useState(true)

  //Want to make API
  const getData = async () => {
    try {
      const api = await axios.get("https://mocki.io/v1/a017e031-466a-4a49-891e-85495999669c")
      console.log(api.data)
      setMenuItems(api.data)
      setFilteredFoodList(api.data)
    } catch (err) {
      console.log(err, "Something went wrong!")
    }

  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [])

  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filteredFoodList={filteredFoodList} categoryList={categoryList} />
        <Menu data={menuItems} filteredData={filteredFoodList} />
      </section>
    </main>
  );
}

export default App;

