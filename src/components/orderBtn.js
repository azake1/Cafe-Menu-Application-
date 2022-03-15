import {Button} from "@mui/material"
import {useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const OrderButton = ({data, setOrder, setTotal}) => {
  const [count, setCount] = useState(0)
  const {title, price, img} = data
  return (
    <div>
      <Button onClick={() => setCount(count > 1 ? count - 1 : 0)}><RemoveIcon /></Button>
      <span>{count}</span>
      <Button onClick={() => setCount(count + 1)}><AddIcon /></Button>
      <Button
        variant="contained"
        sx={{
          width: 140,
          height: 25,
          borderRadius: 4
        }}
        onClick={() => {
          setOrder(prev => [...prev, {title: title, price: price, img: img, count: count}]);
          setTotal(prev => [...prev, {price: price, count: count}]);
        }}
      >Order</Button>
    </div>
  )
}
export default OrderButton

/*
onClick={() => {setOrder(prev => [...prev, {title: title, price: price, img: img, count: count}]); setTotal(prev => [...prev, {price: price, count: count}]);}} 

onClick={(prev) => { setOrder(prev => [...prev, {title: title, price: price, img: img, count: count}]); setTotal(prev => [...prev, {price: price, count: count}]);}}
 */