import React, { Component, Fragment } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)

        this.handleDeleteButton = this.handleDeleteButton.bind(this)
    }

    handleDeleteButton(evt) {
        this.props.deleteButtonClicked(evt)
    }



    render() {

        let AllProductsList = this.props.products.map((product) => {
            return (
                <tr key={product.id}>
                    <td data-label="Name">{product.name}</td>
                    <td data-label="price">{product.price}</td>
                    <td data-label="delete">
                        <button id={product.id} onClick={this.handleDeleteButton} type="button" className="deleteButton" >
                            X
                        </button>
                    </td>
                </tr>
            )
        })
        return (
            <Fragment>
                <table className="ui celled table">
                    <thead>
                        <tr><th>Name</th>
                            <th>price</th>
                            <th>delete</th>
                        </tr></thead>
                    <tbody>
                        {AllProductsList}
                    </tbody>
                </table>
            </Fragment>

        )
    }
}


export default Product