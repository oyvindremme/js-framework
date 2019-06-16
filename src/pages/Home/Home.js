import React from 'react';
import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            isLoading: true
        };
    }

    componentWillMount() {
        fetch('https://api.pokemontcg.io/v1/cards?setCode=base1')
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: data,
                isLoading: false
            }))
            .catch(err => console.log(err));
    }

    searchingCards = (term) => {
        console.log(term);
        fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1&name=${term}`)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: data,
                isLoading: false
            }))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.pokemon);
        return (
            <React.Fragment>
                <SearchBar
                    onSearchTerm={this.searchingCards}
                />
                <section className="container-fluid">
                    {
                        this.state.isLoading
                        ? "Loading..."
                        :   <div className="row">
                                <Card cards={this.state.pokemon.cards} />
                            </div>
                    }
                </section>
            </React.Fragment>
        );
    }
}
 
export default Home;