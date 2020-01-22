import React, { Component, Fragment } from 'react'

class AddProcuctComponent extends Component {
    constructor(props) {
        super(props)

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }


    onChangeHandler(evt) {
        this.props.addProductHandler(evt)
    }
    onFormSubmit(evt) {
        evt.preventDefault()
        this.props.onSave(evt)
    }

    render() {
        return (
            <Fragment>
                <form className="ui form segment">
                    <div className="field">
                        <label htmlFor="category">Product category</label>
                        <input onChange={this.onChangeHandler} type="text" name="category" id="category" placeholder="product Category" value={this.props.product.category} />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Product name</label>
                        <input onChange={this.onChangeHandler} type="text" name="name" id="name" placeholder="First Name" value={this.props.product.name} />
                    </div>
                    <div className="field">
                        <label htmlFor="price" > product price </label>
                        <input onChange={this.onChangeHandler} type="text" name="price" id="price" placeholder="product price" value={this.props.product.price} />
                    </div>

                    <div className="field">
                        <input onChange={this.onChangeHandler} type="checkbox" name="stocked" id="stocked" checked={this.props.product.stocked} />
                        <label htmlFor="stocked"  >in stock ? </label>
                    </div>
                    <button onClick={this.onFormSubmit} className="ui button green" type="sumbit">add product</button>
                </form>
            </Fragment>

        )
    }
}
export default AddProcuctComponent