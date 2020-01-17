import React, { Component, Fragment } from 'react'

class Product extends Component {

    render() {

        let AllProductsList = this.props.products.map((product) => {
            return (
                <tr key = {product.id}>
                    <td data-label="Name">{product.name}</td>
                    <td data-label="price">{product.price}</td>
                    <td data-label="delete"><i className="minus circle icon" ></i></td>
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