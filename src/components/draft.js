<Grid container spacing={2}>
  <Grid item xs={4}>
    <Button variant="contained" onClick={() => setQuantity((el) => el + 1)}>Add </Button>
  </Grid>
  <Grid item xs={4}><TextField disabled value={quantity} style={{textAlign: "center"}} /></Grid>
  <Grid item xs={4}><Button variant="contained"
    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 0))}
  >Remove </Button>
  </Grid>
  <Grid item xs={12}><Button variant="contained" onClick={() => setCart(prev => [...prev, {title: title, price: price, quantity: quantity}])}> Add to cart</Button>
  </Grid>
</Grid>