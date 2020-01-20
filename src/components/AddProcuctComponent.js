import React, { Component, Fragment } from 'react'

class AddProcuctComponent extends Component {
    constructor(props) {
        super(props)

        this.onClickHandler = this.onClickHandler.bind(this)
        
    }


    onClickHandler(evt) {
        this.props.addProductHandler(evt)
    }

    render() {
        return (
            <Fragment>
                <form className="ui form segment">
                    <div className="field">
                        <label htmlFor="category">Product category</label>
                        <input onChange={this.onClickHandler} type="text" name="category" id="category" placeholder="product Category" value={this.props.product.category} />
                    </div>

                    <div className="field">
                        <label htmlFor="name">Product name</label>
                        <input onChange={this.onClickHandler} type="text" name="name" id="name" placeholder="First Name" value={this.props.product.name} />
                    </div>
                    <div className="field">
                        <label htmlFor="price" > product price </label>
                        <input onChange={this.onClickHandler} type="text" name="price" id="price" placeholder="product price" value={this.props.product.price} />
                    </div>

                    <div className="field">
                        <input onChange={this.onClickHandler} type="checkbox" name="stocked" id="stocked" value={this.props.product.stocked} />
                        <label htmlFor="stocked"  >in stock ? </label>
                    </div>
                    <button onClick = {this.onFormSumbit} className="ui button green" type="sumbit">add product</button>
                </form>
            </Fragment>

        )
    }
}


export default AddProcuctComponent