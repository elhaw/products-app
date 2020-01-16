import React, { Component, Fragment } from 'react'

class SortComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className="ui  text segment">
                    <p>
                        sort by name
                    </p>
                    <button className="ui left attached button">
                        <i className="angle double up icon"></i>
                    </button>
                    <button className="right attached ui button">
                        <i className="angle double down icon"></i>
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default SortComponent