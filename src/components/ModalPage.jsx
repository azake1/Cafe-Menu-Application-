import { Button } from "@mui/material"
import { Modal } from "@mui/material"
import {Typography} from "@mui/material"
import {Box} from "@mui/material"
import {useState} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Basket from "./basket"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function ModalPage({order, total}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {price, count} = total

    return (
        <div>
          <Button onClick={handleOpen}><ShoppingCartIcon/><span className="span-basket">
              {/* {total.reduce((amount, item) => item.price + amount, 0)} */}
              {total.map(el => el.price * el.count).reduce((amount, item) => item + amount ,0).toFixed(2)}
              {/* {total.map(el => <h4>{el.price * el.count}</h4>)} */}
              </span>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              <Basket order={order}/>
              </Typography>
            </Box>
          </Modal>
        </div>
      );
}
export default ModalPage

