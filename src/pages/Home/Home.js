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
                pokemon: data.cards,
                isLoading: false
            }))
            .catch(err => console.log(err));
    }

    searchingCards = (term) => {
        console.log(term);
        fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1&name=${term}`)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: data.cards,
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
                <main className="container-fluid">
                    <section className="container-fluid">
                        {
                            this.state.isLoading
                            ? "Loading cards..."
                            :   <div className="row">
                                    {
                                        this.state.pokemon === ""
                                        ? <p>Seems we couldn't find what you're looking for</p>
                                        : <Card cards={this.state.pokemon} />
                                    }
                                </div>
                        }
                    </section>
                </main>
            </React.Fragment>
        );
    }
}
 
export default Home;