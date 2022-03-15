export default function SearchMenu({data, search}) {
  const x = data.filter(el => {
    if (search == "") {
      return el
    } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
      return el
    }
  })

  return (
    x.map(el =>
      <div className="section-center">
        <div key={el.id} className="menu-item">
          <img src={el.img} alt={el.title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{el.title}</h4>
              <h4 className="price">${el.price}</h4>
            </header>
            <p className="item-text">{el.desc}</p>
          </div>
        </div>
      </div>
    )

  )


}