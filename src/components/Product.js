import React, { Component, Fragment } from 'react'

class Product extends Component {
    render() {
        return (
            <Fragment>
                <table className="ui celled table">
                    <thead>
                        <tr><th>Name</th>
                            <th>price</th>
                            <th>delete</th>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td data-label="Name">James</td>
                            <td data-label="price">24</td>
                            <td data-label="delete"><i className="minus circle icon" ></i></td>
                        </tr>
                        <tr>
                            <td data-label="Name">Jill</td>
                            <td data-label="price">26</td>
                            <td data-label="delete"><i className="minus circle icon" ></i></td>
                        </tr>
                        <tr>
                            <td data-label="Name">Elyse</td>
                            <td data-label="price">24</td>
                            <td data-label="delete"><i className="minus circle icon" ></i></td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>

        )
    }
}


export default Product