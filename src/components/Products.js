import React, { Component } from 'react'
import SearchComponent from './SearchComponent'
import InStockComponent from './InStockComponent'
import AddProcuctComponent from './AddProcuctComponent'
import ProductList from './ProductList'
class Products extends Component {
    constructor(props) {
        super(props)

        this.deleteProduct = this.deleteProduct.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    state = {
        products: [
            { id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
            { id: 2, category: 'Musical Instruments', price: '$5, 000', stocked: true, name: 'Harpsicord' },
            { id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano' },
            { id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge' },
            { id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
            { id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' }
        ]
    }

    handleDeleteClick(evt) {
        let productId = parseInt(evt.target.id)
        this.deleteProduct(productId)
    }

    deleteProduct(productID) {
        let newProducts = this.state.products.filter((product) => {

            return product.id !== productID;
        })

        this.setState({
            products: newProducts
        })

    }


    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">products app</h2>
                <SearchComponent />
                <InStockComponent />
                <ProductList deleteButtonClicked={this.handleDeleteClick} products={this.state.products} />
                <AddProcuctComponent />

            </div>
        )
    }
}

export default Products