import React, { Component, Fragment } from 'react'
import ProductItems from './ProductItems'

class ProductList extends Component {


    render() {
        return (
            <Fragment>
                
                <ProductItems inStock = {this.props.inStock} deleteButtonClicked = {this.props.deleteButtonClicked}  products = {this.props.products}  />
            </Fragment>
        )
    }
}


export default ProductList
