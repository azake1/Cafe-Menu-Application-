
import {Button} from '@mui/material'

const Basket = ({order, tips, payment, onClose, sum}) => {

  return (
    <aside >
      <h3 style={{textAlign: "center"}}>Your Order</h3>

      {order.length === 0 &&
        <div> Basket is empty</div>}
      {order.map(el =>
      (<div key={el.id}><h4><u>{el.title}</u></h4>
        <h4>{el.count * el.price}</h4>
        <h4> qty: {el.count}</h4>
      </div>

      ))}
      <h5>Total: ${sum}</h5>
      <h5>Tips: ${tips}</h5>
      <h4>Check: ${payment}</h4>

      <Button variant='contained' onClick={onClose}>Payment</Button>
    </aside >
  )
}
export default Basket

