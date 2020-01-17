import React, { Component } from 'react'

class SearchComponent extends Component {
    render() {
        return (
            <form >
                <div className="ui column fluid action input">
                    <label htmlFor="prodcutSearch"></label>
                    <input id="prodcutSearch" name="prodcutSearch" type="text" placeholder='search ....' defaultValue={this.props.searchText} />
                    <div className="ui button">search</div>
                </div>

            </form>
        )
    }
}


export default SearchComponent