import React, { Component, Fragment } from 'react'

export default class SortableColumnHeader extends Component {
    constructor() {
        super()

        this.onSortClick = this.onSortClick.bind(this)
    }

    onSortClick(evt) {
        this.props.sortByKeyAndOrder(evt)
    }
    render() {
        return (
            <Fragment>
                <th>{this.props.column}
                    <button onClick={this.onSortClick} className="sortableColumnHeader-Current" >&#x25B2;</button>
                    <button onClick={this.onSortClick}>&#x25BC;</button>
                </th>
            </Fragment>
        )
    }
}
