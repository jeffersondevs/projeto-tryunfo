import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { cardRare } = this.props;

    return (
      <select data-testid="rare-input" value={ cardRare } onChange={ onInputChange }>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

Select.propTypes = {
  cardRare: PropTypes.string.isRequired,
};

export default Select;
