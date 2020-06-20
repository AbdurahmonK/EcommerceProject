import { data } from './data'
import { observable, action } from 'mobx'

export const GlobalState = observable({
    quantity : 0,
    added: [],
    prices: 0,
})


export const addProduct = action(id => {
    GlobalState.added.push(data.products.filter(product => product.id === id))
    GlobalState.prices = GlobalState.added.map(e => e[0].price)
    GlobalState.quantity += 1
})

export const deleteProduct = action(index => {
    GlobalState.added.splice(index, 1)
    GlobalState.prices = GlobalState.added.map(e => e[0].price)
    GlobalState.quantity -=1
 })