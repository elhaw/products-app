import React, { Component, Fragment } from 'react'
import ProductTableHeader from './ProductTableHeader'
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    render() {
        return (
            <Fragment>
                <ProductTableHeader />
                <ProductRow />
            </Fragment>
        )
    }
}
