import React, { Component } from 'react'
import SearchComponent from './SearchComponent'
import InStockComponent from './InStockComponent'
import AddProcuctComponent from './AddProcuctComponent'
import ProductList from './ProductList'
class Products extends Component {
    render() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">products app</h2>
                    <SearchComponent />
                    <InStockComponent />
                    <ProductList />
                    <AddProcuctComponent />

            </div>
        )
    }
}

export default Products