import React, { Component } from 'react'
import SearchComponent from './SearchComponent'
import InStockComponent from './InStockComponent'
import AddProcuctComponent from './AddProcuctComponent'
import ProductList from './ProductList'

const PRODUCTS = [
    { id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
    { id: 2, category: 'Musical Instruments', price: '$5, 000', stocked: true, name: 'Harpsicord' },
    { id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano' },
    { id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge' },
    { id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
    { id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' }
]
class Products extends Component {
    constructor(props) {
        super(props)


        this.state = {
            products: PRODUCTS,
            search: '',
            inStock: false
        }

        this.deleteProduct = this.deleteProduct.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.inStockHandler = this.inStockHandler.bind(this)
    }


    handleDeleteClick(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        console.log(evt.target)
        let productId = parseInt(evt.target.id)
        this.deleteProduct(productId)
    }

    inStockHandler(evt) {
        this.setState({
            inStock: evt.target.checked
        })
    }

    deleteProduct(productID) {
        let newProducts = this.state.products.filter((product) => {

            return product.id !== productID;
        })

        this.setState({
            products: newProducts
        })

    }

    addProduct(productID) {
       
    }

    addProductHandler(evt) {
        const target = evt.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">products app</h2>
                <SearchComponent searchText={this.state.search} />
                <InStockComponent inStock={this.state.inStock} isInStockHandler={this.inStockHandler} />
                <ProductList inStock={this.state.inStock} searchText={this.state.search} deleteButtonClicked={this.handleDeleteClick} products={this.state.products} />
                <AddProcuctComponent />

            </div>
        )
    }
}

export default Products