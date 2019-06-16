import React, { Component } from 'react';

class SearchBar extends Component {

    doSearch = (e) => {
        e.preventDefault();
    }

    render() { 
        return (
            <form onSubmit={this.doSearch}>
                <div className="form-group">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search card..." />
                        <button className="btn btn-primary" onClick={this.doSearch}>Search</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default SearchBar;