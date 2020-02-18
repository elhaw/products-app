import React, { Component, Fragment } from 'react'

export default class ProductRow extends Component {

    onDeleteClick(evt) {
        console.log(evt.target)
    }

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
                    <td  >
                        <button  onClick = {this.onDeleteClick} >
                            X
                        </button>
                    </td>
                </tr>
            </Fragment>
        )
    }
}
