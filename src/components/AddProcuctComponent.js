import React, { Component, Fragment } from 'react'
import uuid from 'uuid'

class AddProcuctComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
                id: uuid.v4(),
                category: '',
                price: '',
                stocked: false,
                name: ''
        }

        this.addProductHandler = this.addProductHandler.bind(this)
        this.onFormSumbit = this.onFormSumbit.bind(this)
    }

    addProductHandler(evt) {
        const target = evt.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onFormSumbit(evt) {
        evt.preventDefault()
        let newpProduct = {}
        newpProduct = this.state
        console.log( newpProduct)
    }




    render() {
        return (
            <Fragment>
                <form className="ui form segment">
                    <div className="field">
                        <label htmlFor="category">Product category</label>
                        <input onChange={this.addProductHandler} type="text" name="category" id="category" placeholder="product Category" value={this.state.category} />
                    </div>

                    <div className="field">
                        <label htmlFor="name">Product name</label>
                        <input onChange={this.addProductHandler} type="text" name="name" id="name" placeholder="First Name" value={this.state.name} />
                    </div>
                    <div className="field">
                        <label htmlFor="price" > product price </label>
                        <input onChange={this.addProductHandler} type="text" name="price" id="price" placeholder="product price" value={this.state.price} />
                    </div>

                    <div className="field">
                        <input onChange={this.addProductHandler} type="checkbox" name="stocked" id="stocked" value={this.state.stocked} />
                        <label htmlFor="stocked"  >in stock ? </label>
                    </div>
                    <button onClick = {this.onFormSumbit} className="ui button green" type="sumbit">add product</button>
                </form>
            </Fragment>

        )
    }
}


export default AddProcuctComponent