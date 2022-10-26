import React, { Component } from 'react';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputTextarea from './InputTextarea';
import Select from './Select';
import InputCheckbox from './InputCheckbox';

class Form extends Component {
  render() {
    return (
      <section>
        <form action="">
          <InputText />
          <InputTextarea />
          <InputNumber />
          <Select />
          <InputCheckbox />
          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
