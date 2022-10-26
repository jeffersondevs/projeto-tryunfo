import React, { Component } from 'react';

class InputTextarea extends Component {
  render() {
    return (
      <div>
        <input data-testid="description-input" type="textarea" />
      </div>
    );
  }
}

export default InputTextarea;
