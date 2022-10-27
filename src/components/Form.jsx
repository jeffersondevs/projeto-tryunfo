import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="cardName">
            Nome
            <input
              data-testid="name-input"
              type="text"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1">
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            Atributo 2
            <input
              data-testid="attr2-input"
              type="number"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            Atributo 3
            <input
              data-testid="attr3-input"
              type="number"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
