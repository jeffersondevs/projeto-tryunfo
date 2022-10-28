import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';

class Form extends Component {
  hasCardTrunfo = () => {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    if (!hasTrunfo) {
      return (
        <div>
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </div>
      );
    }
    return (
      <span>Você já tem um Super Trunfo em seu baralho</span>
    );
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <section>
        <form>
          <div>
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              minLength="5"
              required
            />
          </div>
          <di>
            Descrição
            <input
              className="cardDescription"
              data-testid="description-input"
              type="textarea"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              minLength="5"
              maxLength="120"
              required
            />
          </di>
          <div>
            Atributo 1
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
              required
            />
          </div>
          <div>
            Atributo 2
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
              required
            />
          </div>
          <div>
            Atributo 3
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
              required
            />
          </div>
          <div>
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              minLength="5"
              required
            />
          </div>
          <div>
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              required
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>

          { this.hasCardTrunfo() }
          <button
            data-testid="save-button"
            type="submit"
            name="isSaveButtonDisabled"
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
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
