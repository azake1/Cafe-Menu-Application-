import React, {useEffect, useState} from "react";
import Categories from "./components/Categories";
import axios from "axios";
import Menu from './components/Menu'
import ModalPage from "./components/ModalPage";
import logo from './image/loading-food.gif';
import {FaSearch} from "react-icons/fa";



function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredFoodList, setFilteredFoodList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [total, setTotal] = useState([])
  const [search, setSearch] = useState('')
  const [inputSearch, setInputSearch] = useState([])


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
    getData()
    setIsLoading(false)
  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [selectedCategory])

  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];

  useEffect(() => {
    const searchFilter = filteredFoodList.filter(el => {
      if (search == "") {
        return el
      } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
        return el
      }
    })
    setInputSearch(searchFilter)
  }, [search])

  //console.log(inputSearch)

  return isLoading ?
    <div className="loading-page">
      <h3>Page is loading</h3>
      <img src={logo} alt='logo-food' style={{width: '400px', height: '400px'}} />
    </div>
    :
    (
      <main>

        <div className="searchDiv">
          <form onSubmit={(e) => e.preventDefault()} className="formInput">
            <FaSearch className="icon" />
            <input search={search} onChange={(e) => setSearch(e.target.value)} className="input-search" placeholder="search..." />
          </form>
        </div>

        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>



            <ModalPage order={order} total={total} />
            <div className="underline"></div>
          </div>

          <Categories categoryList={categoryList} setSelectedCategory={setSelectedCategory} />



          <div className="box-grid">
            {
              search.length > 1 ? (
                inputSearch.map(el =>

                  <Menu data={el} setOrder={setOrder} setTotal={setTotal} />
                )

              ) : (
                filteredFoodList.map(el =>

                  <Menu data={el} setOrder={setOrder} setTotal={setTotal} />
                )
              )
            }
          </div>


        </section>
      </main>
    );
}

export default App;

