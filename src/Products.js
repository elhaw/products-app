import React, { Component, Fragment } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

var PRODUCTS = {
    '1': { id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
    '2': { id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello' },
    '3': { id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano' },
    '4': { id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge' },
    '5': { id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
    '6': { id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' }
};

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textFilter: '',
            inStockOnly: false,
            products: PRODUCTS
        }
        this.onCahngeHandler = this.onCahngeHandler.bind(this)
    }
    onCahngeHandler(evt) {
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
        this.setState({

            [evt.target.name] : value
        })
    }
    render() {
        return (
            <Fragment>
                <Filters
                    textFilter={this.state.textFilter}
                    inStockOnly={this.state.inStockOnly}
                    formHandler = {this.onCahngeHandler}
                />
                <ProductTable
                    textFilter={this.state.textFilter}
                    inStockOnly={this.state.inStockOnly}
                    products={PRODUCTS} />
                <ProductForm />
            </Fragment>
        )
    }
}
