import React from 'react'
import { Card } from './components/card'
import { Header } from './components/header'
import { Details } from './components/details'
import { Default } from './components/default'
import { AllProduct } from './components/allProduct'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={AllProduct} exact/>
          <Route path='/details' component={Details}/>
          <Route path='/card' component={Card}/>
          <Route component={Default}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
