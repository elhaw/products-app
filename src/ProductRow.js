import React, { Component, Fragment } from 'react'

export default class ProductRow extends Component {

    render() {
        return (
            <Fragment>
                <tr>
                    <td>
                        <span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}>
                            {this.props.product.name}
                        </span>
                    </td>
                    <td>{this.props.product.price}</td>

                </tr>
            </Fragment>
        )
    }
}
