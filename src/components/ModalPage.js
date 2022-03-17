import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Basket from "./basket";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

function ModalPage({ order, total }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	let sum = total
		.map((el) => el.price * el.count)
		.reduce((amount, item) => item + amount, 0)
		.toFixed(2);
	console.log(typeof sum);
	let tips = parseInt(sum * 0.3);
	let nums = Number(sum);
	let payment = (nums + tips).toFixed(2);

	return (
		<div>
			<Button onClick={handleOpen}>
				<AddShoppingCartIcon />
				<span className="span-basket">${payment}</span>
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						<Basket
							order={order}
							tips={tips}
							sum={sum}
							payment={payment}
							onClose={handleClose}
						/>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
export default ModalPage;
