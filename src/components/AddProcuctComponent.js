import React, { Component, Fragment } from 'react'

class AddProcuctComponent extends Component {
    render() {
        return (
            <Fragment>
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="productName">Product name</label>
                        <input type="text" name="productName" id="productName" placeholder="First Name" />
                    </div>
                    <div className="field">
                        <label htmlFor="productPrice" > product price </label>
                        <input type="text" name="productPrice" id="productPrice" placeholder="Last Name" />
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabIndex="0" className="hidden" />
                            <label> in Stock ? </label>
                        </div>
                    </div>
                    <button className="ui button green" type="button">add product</button>
                </form>
            </Fragment>

        )
    }
}


export default AddProcuctComponent