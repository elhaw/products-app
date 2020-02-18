import React, { Component } from 'react'
import { Fragment } from 'react'

export default class Filters extends Component {
    constructor() {
        super()
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(evt) {
        this.props.formHandler(evt)
    }
    render() {
        return (
            <Fragment>
                <form >
                    <div className="searchField">
                        <label htmlFor="textFilter">search</label>
                        <input onChange={this.onChangeHandler} type="text" id="textFilter" name="textFilter" value={this.props.textFilter} />
                    </div>

                    <div className="inStockField">
                        <label htmlFor="inStockOnly">in stock ? </label>
                        <input onClick={this.onChangeHandler} type="checkbox" id="inStockOnly" name="inStockOnly"  checked={this.props.inStockOnly} />
                    </div>
                </form>
            </Fragment>
        )
    }
}
