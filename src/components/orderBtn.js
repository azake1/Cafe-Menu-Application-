import {Button} from "@mui/material"
import {useState} from "react"


const OrderButton = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Button onClick={() => setCount(count > 1 ? count - 1 : 0)}>-</Button>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button
        variant="outlined"
        sx={{
          width: 140,
          height: 25,
          borderRadius: 4
        }}
      >Order</Button>
    </div>
  )
}
export default OrderButton