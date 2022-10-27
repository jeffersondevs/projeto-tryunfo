import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends Component {
  render() {
    const { cardDescription } = this.props;

    return (
      <div>
        <input
          data-testid="description-input"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </div>
    );
  }
}

InputTextarea.propTypes = {
  cardDescription: PropTypes.string.isRequired,
};

export default InputTextarea;
