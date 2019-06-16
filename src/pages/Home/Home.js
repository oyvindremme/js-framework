import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        };
    }

    searchingCards = (term) => {
        console.log(term);
        fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1&name=${term}`)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: data
            }))
            .catch(err => console.log(err));
    }

    render() { 
        return (
            <SearchBar
                onSearchTerm={this.searchingCards}
            />
        );
    }
}
 
export default Home;