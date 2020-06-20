import React from 'react'
import { useStyles } from './style'
import { observer } from 'mobx-react'
import Rating from '@material-ui/lab/Rating'
import { addProduct } from '../../GlobalStore'
import { useLocation, useHistory } from 'react-router-dom'
import { Container, ButtonBase, Paper, Typography, Grid, Button, CssBaseline } from '@material-ui/core'

function _Details() {
  const classes = useStyles()  
  const { state } = useLocation()
  const { goBack } =useHistory()
  
  return (
        <>
        <CssBaseline />
        <Container maxWidth='md'>
          <Typography variant='h2' className={classes.elon}>About Product</Typography>
          <Paper>
            <Grid container justify='space-around' alignItems='center'>
              <ButtonBase className={classes.image}>
                  <img className={classes.img} alt={state.name} src={state.img} />
              </ButtonBase> 
              <Grid>
                <Typography variant='h3'>{state.name}</Typography>
                <Typography variant="body2">{state.description}</Typography>
              </Grid>
              <Grid>
                <Typography variant='h3'>${state.price}.00</Typography>
                <Rating name='read-only' value={state.rating} readOnly />
              </Grid>
            </Grid>
            <Grid container justify='space-around'>
              <Typography variant='h4'>Product Description:</Typography>
              <Typography variant='body1' className={classes.paragrap}>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae 
              rerum inventore consectetur, neque doloribus, cupiditate numquam 
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              Quos blanditiis tenetur unde suscipit, quam beatae 
              rerum inventore consectetur, neque doloribus, cupiditate numquam 
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              Quos blanditiis tenetur unde suscipit, quam beatae 
              rerum inventore consectetur, neque doloribus, cupiditate numquam 
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
            </Grid>
            <Grid container justify='space-evenly' className={classes.button}>
              <Button variant='contained' size='large' onClick={goBack}>Back</Button>
              <Button variant='contained' color='secondary' onClick={() => addProduct(state.id)}>Add to Card</Button>
            </Grid>
          </Paper> 
        </Container>
        </>
    )
}

export const Details = observer(_Details)