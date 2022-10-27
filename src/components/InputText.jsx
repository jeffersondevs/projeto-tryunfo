import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { cardName, cardImage, onInputChange } = this.props;

    return (
      <div>
        <input
          data-testid="name-input"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <input
          data-testid="image-input"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

InputText.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default InputText;
