import React, {useEffect, useState} from "react";
import Categories from "./components/Categories";
import axios from "axios";
import Menu from './components/Menu'
import {CircularProgress} from '@mui/material'
import ModalPage from "./components/ModalPage";
import SearchInput from './components/search'

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [total, setTotal] = useState([])
  const [search, setSearch] = useState('')


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
    }, 2000)
  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [selectedCategory])


  const handleInput = (e) => {
    setSearch(e.target.value)
  }


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

          <Categories categoryList={categoryList} setSelectedCategory={setSelectedCategory} />

          <div className="searchInput">
            <SearchInput search={search} onChange={handleInput} data={menuItems} />
          </div>

          <div className="box-grid">
            {filteredFoodList.map(el =>
              <Menu data={el} setOrder={setOrder} setTotal={setTotal} />
            )}
          </div>


        </section>
      </main>
    );
}

export default App;

