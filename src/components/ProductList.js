import React, { Component, Fragment } from 'react'
import SortComponent from './SortComponent'
import ProductItems from './ProductItems'

class ProductList extends Component {


    render() {
        return (
            <Fragment>
                <SortComponent />
                <ProductItems inStock = {this.props.inStock} deleteButtonClicked = {this.props.deleteButtonClicked}  products = {this.props.products}  />
            </Fragment>
        )
    }
}


export default ProductList
