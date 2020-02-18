import React, { Component } from 'react'
import { Fragment } from 'react'

export default class Filters extends Component {
    render() {
        return (
            <Fragment>
                <form >
                    <div>
                        <label htmlFor="search">search</label>
                        <input type="text" id="search" name="search" />
                    </div>

                    <div>
                        <label htmlFor="isInStock">in stock ? </label>
                        <input type="checkbox" id="isInStock" name="isInStock" />
                    </div>
                </form>
            </Fragment>
        )
    }
}
