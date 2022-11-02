import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cardList: [],
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
      cardName,
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
      cardName,
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

  deletaCarta = ({ target }) => {
    const { name } = target;
    const { cardList } = this.state;
    const filteredList = cardList.filter((card) => card.cardName !== name);
    this.setState({
      hasTrunfo: filteredList.some(({ cardTrunfo }) => cardTrunfo),
      cardList: filteredList,
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
      cardList,
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
        </section>
        <section>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
          />
        </section>
        <section>
          {cardList.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <Button
                deletaCarta={ this.deletaCarta }
                cardName={ card.cardName }
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
