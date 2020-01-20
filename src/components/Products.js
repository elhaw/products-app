import React, { Component } from 'react'
import uuid from 'uuid'
import SearchComponent from './SearchComponent'
import InStockComponent from './InStockComponent'
import AddProcuctComponent from './AddProcuctComponent'
import ProductList from './ProductList'
import SortComponent from './SortComponent'

const PRODUCTS = [
    { id: "1", category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
    { id: "2", category: 'Musical Instruments', price: '$5, 000', stocked: true, name: 'Harpsicord' },
    { id: "3", category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano' },
    { id: "4", category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge' },
    { id: "5", category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
    { id: "6", category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' },
]
class Products extends Component {
    constructor(props) {
        super(props)


        this.state = {
            products: PRODUCTS,
            search: '',
            inStock: false,
            product: {
                id: uuid.v4(),
                category: '',
                price: '',
                stocked: false,
                name: ''
            },
            emptyData: true
        }

        this.deleteProduct = this.deleteProduct.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.inStockHandler = this.inStockHandler.bind(this)
        this.addProductHandler = this.addProductHandler.bind(this)
        this.addNewProduct = this.addNewProduct.bind(this)
        this.clearFormData = this.clearFormData.bind(this)
        this.sortingAZ = this.sortingAZ.bind(this)
    }


    handleDeleteClick(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        console.log(typeof evt.target.id)
        this.deleteProduct(evt.target.id)
    }

    inStockHandler(evt) {
        this.setState({
            inStock: evt.target.checked
        })
    }

    deleteProduct(productID) {

        let remainingProducts = this.state.products.filter((product) => {

            return product.id !== productID;
        })

        this.setState({
            products: remainingProducts
        })

    }
    addProductHandler(evt) {
        const target = evt.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            product: {
                ...this.state.product,
                [name]: value
            }
        });
    }
    addNewProduct() {
        let newProduct = this.state.product
        if (newProduct.name === '' | newProduct.price === '' | newProduct.category === '') {
            return;
        }


        this.setState({
            products: [...this.state.products, newProduct]
        })

        this.clearFormData()
    }

    clearFormData() {
        this.setState({
            product: {
                id: uuid.v4(),
                category: '',
                price: '',
                stocked: false,
                name: ''
            }
        })
    }

    sortingAZ(evt) {

        let sortDirection = ()=>{
            let sortCondition = evt.target.name

            if (sortCondition  === "sortAZ") {
                return -1;
            }
            else if (sortCondition === "sortZA") {
                return 1;
            }
        }
        let result = sortDirection();
        
        let sortedAZ = this.state.products.sort(function (a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA > nameB) {
                return -result
            }
            if (nameA < nameB) {
                return result
            }
            return 0;
        });
        this.setState({
            products: sortedAZ
        })
    }

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">products app</h2>
                <SearchComponent searchText={this.state.search} />
                <SortComponent onSort={this.sortingAZ} />
                <InStockComponent inStock={this.state.inStock} isInStockHandler={this.inStockHandler} />
                <ProductList inStock={this.state.inStock} searchText={this.state.search} deleteButtonClicked={this.handleDeleteClick} products={this.state.products} />
                <AddProcuctComponent onSave={this.addNewProduct} product={this.state.product} addProductHandler={this.addProductHandler} />

            </div>
        )
    }
}

export default Products