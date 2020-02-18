import React, { Component } from 'react'
import SortableColumnHeader from './SortableColumnHeader'
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    render() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        let rows = productsAsArray.map((product)=>{
            return (
                <ProductRow product = {product} key = {product.id} />
            )
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <SortableColumnHeader  column = "name" />
                            <SortableColumnHeader column = "price" />
                        </tr>
                    </thead>
                    <tbody>
                    
                        {rows}

                    </tbody>
                </table>
            </div>
        )
    }
}
