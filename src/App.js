import './App.css';
import React from 'react';
import CalculatorUi from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalculatorUi />
    );
  }
}
export default App;
