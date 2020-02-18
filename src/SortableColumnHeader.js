import React, { Component, Fragment } from 'react'

export default class SortableColumnHeader extends Component {
    render() {
        return (
                <Fragment>
                <th>{this.props.column}
                    <button className = "sortableColumnHeader-Current" >&#x25B2;</button>
                    <button>&#x25BC;</button>
                </th>
                </Fragment>
        )
    }
}
