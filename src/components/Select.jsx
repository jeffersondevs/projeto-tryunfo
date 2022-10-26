import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <select data-testid="rare-input" name="" id="">
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

export default Select;
