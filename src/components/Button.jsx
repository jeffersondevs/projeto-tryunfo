import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { deletaCarta, cardName } = this.props;
    return (
      <button
        data-testid="delete-button"
        type="button"
        name={ cardName }
        onClick={ deletaCarta }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  deletaCarta: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
};

export default Button;
