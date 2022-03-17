import React, {useEffect, useState} from "react";
import Categories from "./components/Categories";
import axios from "axios";
import Menu from './components/Menu'
import ModalPage from "./components/ModalPage";
import SearchInput from './components/search'
import logo from './image/loading-food.gif'



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

    getData()
    setIsLoading(false)

  }, [])

  useEffect(() => {
    let filtered = menuItems.filter((item) => item.category === selectedCategory || selectedCategory === "all");
    setFilteredFoodList(filtered);
  }, [selectedCategory])




  const categoryList = ["all", ...new Set(menuItems.map((item) => item.category))];


  return isLoading ?
    <div className="loading-page">
      <h3>Page is loading</h3>
      {/*<CircularProgress />*/}
      <img src={logo} alt='logo-food' style={{width: '400px', height: '400px'}} />

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
            <SearchInput search={search} onChange={(e) => setSearch(e.target.value)} data={menuItems} />

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

