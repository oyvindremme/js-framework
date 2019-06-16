import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    render() { 
        return (
            <React.Fragment>
                {this.props.cards.map((card, i) => {
                    return (
                        <div key={i} className="col-md-3 col-6 mb-4">
                            <Link to={`/card/${card.number}`}>
                                <img className="img-fluid mx-auto" src={card.imageUrl} alt={`The ${card.name} card`} />
                            </Link>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}
 
export default Card;