import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;

    return (
      <div>
        <input
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

InputNumber.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};

export default InputNumber;
