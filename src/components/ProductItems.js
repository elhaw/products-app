import React, { Component, Fragment } from 'react'
import Product from './Product'
class ProductItems extends Component {



    render() {
        return (
           <Fragment>
                 < Product deleteButtonClicked = {this.props.deleteButtonClicked} products = {this.props.products}  />  
           </Fragment>           
        )
    }
}


export default ProductItems