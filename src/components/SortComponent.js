import React, { Component, Fragment } from 'react'

class SortComponent extends Component {

    constructor(props){
        super(props)

        this.sortHandler = this.sortHandler.bind(this)
    }


    sortHandler(evt) {
        this.props.onSort(evt)
    }
    render() {
        return (
            <Fragment>
                <div className="ui  text segment">
                    <p>
                        sort by name
                    </p>
                    <button onClick = {this.sortHandler} name = "sortAZ" className="ui left attached button">
                        <i className="angle double up icon"></i>
                    </button>
                    <button onClick = {this.sortHandler} name = "sortZA" className="right attached ui button">
                        <i className="angle double down icon"></i>
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default SortComponent