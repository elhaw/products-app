import React, { Component } from 'react'

class SearchComponent extends Component {
    render() {
        return (
                <div className="ui column fluid action input">
                    <label htmlFor="prodcutSearch"></label>
                    <input id = "prodcutSearch" name = "prodcutSearch"  type="text" placeholder = 'search ....' />
                    <div className="ui button">search</div>
                </div>
        )
    }
}


export default SearchComponent