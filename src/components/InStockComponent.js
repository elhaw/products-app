import React, { Component, Fragment } from 'react'

class InStockComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className="ui checkbox segment ">
                    <input type="checkbox" name="inStock" id="inStock" />
                    <label htmlFor="inStock"  >show products in stock only</label>
                </div>
            </Fragment>
        )
    }
}


export default InStockComponent