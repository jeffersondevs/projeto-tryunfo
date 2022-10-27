import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  batata = () => {
    console.log('batata');
  }
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form cardName={'batata'} cardImage={'batata'} onInputChange={ this.batata }/>
      </div>
    );
  }
}

export default App;
