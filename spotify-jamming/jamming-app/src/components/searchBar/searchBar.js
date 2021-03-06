import React from 'react';
import "./searchBar.css";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.clicks = this.clicks.bind(this);
    }
    search() {
        this.props.onSearch(this.state.term);
    }
    handleTermChange(e) {
        this.setState({ term: e.target.value })
    }
    clicks(e) {
        console.log(e.target);
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}  >SEARCH</button>
            </div>
        )
    }
}