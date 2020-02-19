import React, { Component } from 'react'
import SortableColumnHeader from './SortableColumnHeader'
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: {
                column: 'name',
                direction: 'desc'
            }
        }

        this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this)
    }

    sortByKeyAndOrder(evt) {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);

        console.log(evt.target)

    }

    render() {
        let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
        let rows = productsAsArray.map((product) => {
            //exclude items
            if ((product.name.toLowerCase().indexOf(this.props.textFilter.toLowerCase())) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product)
                return (
                    <ProductRow product={product} key={product.id} />
                )
        })

        let sorted


        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <SortableColumnHeader
                                column="name"
                                currentSort={this.state.sort}
                                sortByKeyAndOrder={this.sortByKeyAndOrder}

                            />
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
