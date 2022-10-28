import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Card.css';

class Card extends Component {
  superTrunfo = () => {
    const textoExibido = <h4 data-testid="trunfo-card">Super Trunfo</h4>;
    const { cardTrunfo } = this.props;
    if (cardTrunfo) {
      return textoExibido;
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.props;

    return (
      <section className="container-card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {this.superTrunfo()}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
