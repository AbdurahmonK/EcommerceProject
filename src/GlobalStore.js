import { data } from './data'
import { observable, action } from 'mobx'

export const GlobalState = observable({
    quantity : 0,
    added: [],
    prices: 0,
    deleted: [],
})


export const addProduct = action(id => {
    GlobalState.added.push(data.products.filter(product => product.id === id))
    GlobalState.quantity += 1
    GlobalState.prices = GlobalState.added.map(e => e[0].price)
})

export const deleteProduct = action((product, index) => {
    // GlobalState.deleted = data.products.filter(product => product.id === id)[0]
    // GlobalState.deleted = data.products.filter(product => product.id === id)[0].id
    // GlobalState.added.slice(data.products.filter(product => product.id === id))
    // GlobalState.added = GlobalState.added.filter(product => GlobalState.deleted)
    // GlobalState.deleted = GlobalState.added.filter(product => product.map(id => id) !== id)
    // GlobalState.added = GlobalState.added.filter(product => GlobalState.deleted)
    // GlobalState.quantity -=1
    // GlobalState.added = GlobalState.added.filter(id => id[index] !== index)
})