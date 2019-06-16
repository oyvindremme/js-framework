import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentWillMount() {
        const number = this.props.match.params.number;
        fetch(`https://api.pokemontcg.io/v1/cards?setCode=base1&number=${number}`)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: data.cards[0]
            }))
            .catch(err => console.log(err));
    }

    render() {
        const pokemon = this.state.pokemon;
        console.log(pokemon);
        return (
            <main className="container">
                <p className="mt-2 lead">
                    <Link to="/">Home</Link> / {pokemon.name}
                </p>
                <h1 className="mb-3"><span className="badge badge-primary">#{pokemon.number}</span> {pokemon.name}</h1>
                <div className="row">
                    <div className="col-md-4">
                        <img src={pokemon.imageUrlHiRes} className="img-fluid mb-3" alt={`A ${pokemon.name} card!`} />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-3">Details</h2>
                        <div className="lead">
                            <p className="mb-2">
                                <strong>Supertype:</strong> {pokemon.supertype}
                            </p>
                            <p className="mb-2">
                                <strong>Rarity:</strong> {pokemon.rarity}
                            </p>
                            <p className="mb-2">
                                <strong>Artist:</strong> {pokemon.artist}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
 
export default CardPage;