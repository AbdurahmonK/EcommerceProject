import React from 'react'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import Rating from '@material-ui/lab/Rating'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalState, addProduct } from '../../GlobalStore'
import { Container, ButtonBase, Paper, Typography, Grid, Fab, CssBaseline, Button } from '@material-ui/core'

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
  const [ deleted, setDeleted ] = React.useState(added)

  let price = 0 
  let pp = toJS(prices)
//   console.log(pp)
  for(let i = 0; i < pp.length; i++){
    price +=pp[i]
  }
//   console.log(price)

 const deleteProduct = index => {
     let newArr = [...toJS(added)]
     newArr.splice(index, 1)
     setDeleted(newArr)
    // console.log(newArr)
 }
  return (
        <>
            <CssBaseline />
            <Container maxWidth='md'>
                <Typography variant='h2' className={classes.elon}>Shopping Card</Typography>
                <Paper className={classes.paper}>
                    {deleted.map((elem, index) => 
                        elem.map((product) => 
                        <Grid container justify='space-around' key={index} alignItems='center'>
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
                        <Grid>
                            {/* <Paper className={classes.paper}><Typography variant='h4'>1</Typography></Paper> */}
                        </Grid>
                        <Grid>
                            <Fab color='secondary' onClick={() => addProduct(product.id)}><AddIcon /></Fab>
                        </Grid>
                        <Grid>
                            <Fab onClick={() => deleteProduct( index)}><DeleteIcon /></Fab>
                        </Grid>
                    </Grid>
                    ))}
                </Paper>
                <Grid container justify='flex-end' style={{marginTop: 15}} alignItems='center'>
                    <Typography variant='h4'>Total Price:</Typography>
                    <Paper className={classes.price}>
                        <Typography variant='h4' color='primary'>${price}.00</Typography>
                    </Paper>
                </Grid>
                <Grid container justify='center' style={{marginTop: 15}}>
                    <Button variant='contained' color='primary' onClick={goBack}>Continue Shopping</Button>
                </Grid>
            </Container>
        </>
    )
}


export const Card = observer(_Card)