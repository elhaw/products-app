import React, { Component, Fragment } from 'react'
import SortComponent from './SortComponent'
import ProductItems from './ProductItems'

class ProductList extends Component {


    render() {
        return (
            <Fragment>
                <SortComponent />
                <ProductItems  products = {this.props.products}  />
            </Fragment>
        )
    }
}


export default ProductList
