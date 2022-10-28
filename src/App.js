import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: 'false',
    isSaveButtonDisabled: 'true',
    cardList: [],
    hasTrunfo: false,
  };

  somaAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    return +cardAttr1 + +cardAttr2 + +cardAttr3;
  };

  isValidacaoForm = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minAttr = 0;
    const maxAttr = 90;
    const maxSoma = 210;
    const maxAlcancado = this.somaAttr() > maxSoma;

    const isVazio = ({ length }) => !length;
    const isVaria = (value, from, to) => value >= from && value <= to;

    const temCamposVazio = [cardName, cardImage, cardDescription, cardRare]
      .some((valor) => isVazio(valor));
    const temCamposQueUltrapassam = [cardAttr1, cardAttr2, cardAttr3]
      .some((valor) => !isVaria(valor, minAttr, maxAttr));
    return !(maxAlcancado || temCamposVazio || temCamposQueUltrapassam);
  };

  validarInput = () => {
    this.setState({
      isSaveButtonDisabled: !this.isValidacaoForm(),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.validarInput();
    });
  };

  onSaveButtonClick = () => {
    const {
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardList,
      hasTrunfo,
    } = this.state;

    cardList.push({
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: hasTrunfo || cardTrunfo,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
