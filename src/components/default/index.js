import React from 'react'
import { Container, Typography, CssBaseline } from '@material-ui/core'

export function Default() {
    return (
        <div>
            <CssBaseline />
            <Container>
                <Typography variant='h2' align='center'>Oops! Something went wrong.</Typography>
                <Typography variant='subtitle1' align='center' color='error'>404 not found.</Typography>
            </Container>  
        </div>
    )
}
