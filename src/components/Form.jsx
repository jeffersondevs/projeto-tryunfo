import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <form action="">
          <input data-testid="name-input" type="text" name="" id="" />
          <input data-testid="description-input" type="textarea" />
          <input data-testid="attr1-input" type="number" name="" id="" />
          <input data-testid="attr2-input" type="number" name="" id="" />
          <input data-testid="attr3-input" type="number" name="" id="" />
          <input data-testid="image-input" type="text" />
          <select data-testid="rare-input" name="" id="">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input data-testid="trunfo-input" type="checkbox" name="" id="" />
          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
