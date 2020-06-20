import React from 'react'
import { 
    Button, 
    Container, 
    Typography, 
    CssBaseline,
    Grid, 
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

export function Default() {
    return (
        <div>
            <CssBaseline />
            <Container>
                <Grid container direction='column' alignItems='center'>
                <Typography variant='h2'>Oops! Something went wrong.</Typography>
                <Typography variant='subtitle1' color='error'>404 not found.</Typography>
                <Button variant='contained' color='secondary' startIcon={<HomeIcon />} href='/'>Go Home</Button>
                </Grid>
            </Container>  
        </div>
    )
}
