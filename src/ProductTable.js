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
    sortingByName(evt) {

        let sortDirection = () => {
            let sortCondition = evt.target.name

            if (sortCondition === "sortAZ") {
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
