import React, { Component } from 'react';

class SearchBar extends Component {

    runSearchTerm = (e) => {
        e.preventDefault();
        let term = this.refs.searchTerm.value;
        this.props.onSearchTerm(term);
    }

    render() { 
        return (
            <form onSubmit={this.runSearchTerm}>
                <div className="form-group">
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search cards..."
                            ref="searchTerm"
                            onChange={this.runSearchTerm}
                        />
                        <button className="btn btn-primary" onClick={this.runSearchTerm}>Search</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default SearchBar;