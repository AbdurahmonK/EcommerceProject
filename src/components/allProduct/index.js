import React from 'react'
import { data } from '../../data'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'
import { addProduct } from '../../GlobalStore'
import Skeleton from '@material-ui/lab/Skeleton'
import { 
    Card, 
    Grid,
    Button, 
    Container, 
    Typography, 
    CardActions, 
    CssBaseline, 
    CardContent, 
    CardActionArea,
    CircularProgress, 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  elon: {
    margin: '20px 0 50px 0'
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
      textDecoration: 'none',
      color: 'none',
  },
})

function _AllProduct() {
  const classes = useStyles()

  return (
    <>
        <CssBaseline />
        <Container>
            <Typography variant="h2" className={classes.elon}>Our Products</Typography>
            <Grid container spacing={3} justify='center'>
                {data ?
                    data.products.map( product => 
                        <Grid item xs={8} sm={6} md={3} key={product.id}>
                            <Card>
                                <CardActionArea>
                                    <Grid container justify='center'>
                                        {product.img 
                                            ? (<img 
                                            align='center' 
                                            src={product.img} 
                                            alt={product.name} 
                                            className={classes.img} 
                                            />)
                                            : (<Skeleton variant="circle" width={40} height={40} /> 
                                            //   <Skeleton variant="rect" width={210} height={118} />
                                        )}
                                    </Grid>
                                    <CardContent>
                                        <Typography variant='h4'>{product.name}</Typography>
                                        <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
                                        <Typography variant='h5'>{product.price}$</Typography>
                                        <Rating name='read-only' value={product.rating} readOnly />
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button 
                                        variant='contained' 
                                        color='secondary' 
                                        onClick={() => addProduct(product.id)}
                                    >
                                        Add to Card
                                    </Button>
                                    <Link to={{
                                            pathname:'/details',
                                            state: product
                                        }} 
                                        className={classes.link}
                                    >
                                        <Button variant='contained' color='primary'>More details</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ) : <CircularProgress />
                }
            </Grid>
        </Container>
    </>
  )
}

export const AllProduct = observer(_AllProduct)