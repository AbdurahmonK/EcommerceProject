import React from 'react'
import { useStyles } from './style'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalStore'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Toolbar, Badge, Typography, AppBar, IconButton } from '@material-ui/core'

function _Header() {
  const classes = useStyles()
  const { quantity } = GlobalState
  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant='h4' noWrap>
            Ecommerce Project
          </Typography>
          <Link to='/card' className={classes.gocard}>
            <IconButton color='inherit'>
              <Badge badgeContent={quantity} color='secondary'>
                <ShoppingCartIcon fontSize='large'/>
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export const Header = observer(_Header)