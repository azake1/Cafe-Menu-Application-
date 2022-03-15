


const Basket = ({order}) => {
  const {title, price, count, id} = order

  return (
    <aside>
      <h1>Your Order</h1>
      <div>

        {order.length === 0 &&
          <div> Basket is empt</div>}

        {order.map(el =>
        (<div style={{background: "lightblue"}} key={id}><h3>{title}</h3>
          <h4> ${price}</h4>
          <h4> qty: {count}</h4>
        </div>
        ))}

      </div>


    </aside >
  )
}
export default Basket