import React, { Component, Fragment } from 'react'

class InStockComponent extends Component {
    constructor(props){
        super(props)
        
        this.inStockToggler = this.inStockToggler.bind(this)
    }

    inStockToggler(evt) {
        this.props.isInStockHandler(evt)
    }


    render() {
        return (
            <Fragment>
                <form action="">
                    <div className="ui checkbox segment ">
                        <input onChange = {this.inStockToggler}type="checkbox" name="inStock" id="inStock" value = {this.props.inStock} />
                        <label htmlFor="inStock"  >show products in stock only</label>
                    </div>
                </form>

            </Fragment>
        )
    }
}


export default InStockComponent