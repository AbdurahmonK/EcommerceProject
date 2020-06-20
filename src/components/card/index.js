import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import Rating from '@material-ui/lab/Rating'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalState, addProduct, deleteProduct } from '../../GlobalStore'
import { 
    Fab, 
    Grid, 
    Paper, 
    Button, 
    Divider, 
    Container, 
    ButtonBase, 
    Typography, 
    CssBaseline, 
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    elon: {
      margin: '20px 0 50px 0'
    }, 
    paper: {
        padding: 10,
    } ,
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    paragrap: {
      margin: '10px 40px',
    },
    button : {
      padding: '20px',
    },
    price: {
        margin: '0 0 0 15px',
        padding: '10px',
    },
}))

function _Card() {
  const classes = useStyles() 
  const { goBack } = useHistory()
  const { added, prices } = GlobalState

  let price = 0 
  let newPrices = toJS(prices)
//   console.log(newPrices)
  for(let i = 0; i < newPrices.length; i++){
    price +=newPrices[i]
  }
//   console.log(price)

  return (
        <>
            <CssBaseline />
            <Container maxWidth='md'>
                <Typography variant='h2' className={classes.elon}>Shopping Card</Typography>
                <Paper className={classes.paper}>
                    {added.length ? added.map((elem, index) => 
                        elem.map((product) => 
                        <div key={index}>
                        <Grid container justify='space-around'  alignItems='center'>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt={product.name} src={product.img} />
                            </ButtonBase> 
                        <Grid>
                            <Typography variant='h3'>{product.name}</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                            <Typography variant="body2" color="textSecondary">ID: {product.id}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='h3'>${product.price}</Typography>
                            <Rating name='read-only' value={product.rating} readOnly />
                        </Grid>
                        {/* <Grid>
                            <Paper className={classes.paper}><Typography variant='h4'>1</Typography></Paper>
                        </Grid> */}
                        <Grid>
                            <Fab color='secondary' onClick={() => addProduct(product.id)}><AddIcon /></Fab>
                        </Grid>
                        <Grid>
                            <Fab onClick={() => deleteProduct(index)}><DeleteIcon /></Fab>
                        </Grid>
                        </Grid>
                        <Divider variant='middle' />
                        </div>
                    )) : <Typography variant='h4'>Your card is Empty!</Typography>}
                </Paper>
                <Grid container justify='flex-end' style={{marginTop: 15}} alignItems='center'>
                    <Typography variant='h4'>Total Price:</Typography>
                    <Paper className={classes.price}>
                        <Typography variant='h4' color='primary'>${price}.00</Typography>
                    </Paper>
                </Grid>
                <Grid container justify='center' style={{marginTop: 15}}>
                    {added.length 
                        ? <Button variant='contained' color='primary' onClick={goBack}>Continue Shopping</Button> 
                        : <Button variant='contained' color='secondary' href='/'>Shop Now!</Button>
                    }
                </Grid>
            </Container>
        </>
    )
}


export const Card = observer(_Card)