import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">
            Nome
            <input data-testid="name-input" type="text" id="name" />
          </label>
          <label htmlFor="description">
            Descrição
            <input data-testid="description-input" type="textarea" id="description" />
          </label>
          <label htmlFor="attr1">
            Atributo 1
            <input data-testid="attr1-input" type="number" id="attr1" />
          </label>
          <label htmlFor="attr2">
            Atributo 2
            <input data-testid="attr2-input" type="number" id="attr2" />
          </label>
          <label htmlFor="attr3">
            Atributo 3
            <input data-testid="attr3-input" type="number" id="attr3" />
          </label>
          <label htmlFor="image">
            Imagem
            <input data-testid="image-input" type="text" id="image" />
          </label>
          <label htmlFor="rare">
            Raridade
            <select data-testid="rare-input" id="rare">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trunfo
            <input data-testid="trunfo-input" type="checkbox" id="trunfo" />
          </label>
          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
