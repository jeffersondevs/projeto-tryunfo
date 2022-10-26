import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return (
      <div>
        <input data-testid="name-input" type="text" />
        <input data-testid="image-input" type="text" />
      </div>
    );
  }
}

export default InputText;
