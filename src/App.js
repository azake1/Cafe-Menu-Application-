import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import axios from "axios";
import Menu from './components/Menu'
import { CircularProgress } from '@mui/material'
import Basket from './components/basket'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ModalPage from "./components/ModalPage";
function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])
  //Millana
  const [total, setTotal] = useState([])
  //Millana
  const [millana, setMillana] = useState([])



  //Want to make API
  const getData = async () => {
    try {
      const api = await axios.get("https://mocki.io/v1/a017e031-466a-4a49-891e-85495999669c")
      setMenuItems(api.data)
      setFilteredFoodList(api.data)
    } catch (err) {
      console.log(err, "Something went wrong!")
    }

  }
  useEffect(() => {
    setTimeout(() => {
      getData()
      setIsLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [selectedCategory])

  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];

  return isLoading ?
    <div className="loading-page">
      <h3>Page is loading</h3>
      <CircularProgress />
    </div>
    :
    (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <ModalPage order={order} total={total} />
            <div className="underline"></div>
          </div>
          <Categories filteredFoodList={filteredFoodList} categoryList={categoryList} setSelectedCategory={setSelectedCategory} />
          {
            filteredFoodList.map(food => {
              return <Menu data={food} setOrder={setOrder} setTotal={setTotal} />
            })
          }
          {/* <Menu data={menuItems} filteredData={filteredFoodList} setOrder={setOrder} setTotal={setTotal} /> */}
        </section>
      </main>
    );
}

export default App;

