import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends Component {
  render() {
    const { cardTrunfo } = this.props;

    return (
      <input
        data-testid="trunfo-input"
        type="checkbox"
        value={ cardTrunfo }
        onChange={ onInputChange }
      />
    );
  }
}

InputCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
};

export default InputCheckbox;
