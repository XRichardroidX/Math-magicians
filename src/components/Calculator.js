import '../App.css';
import React from 'react';

class CalculatorUi extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="calculator">
        <div className="body">
          <div className="screen">0</div>
          <div className="calc-buttons">
            <div className="buttons">
              .
              <div />
              <div className=".">.</div>
              <div className="Append" />
              <button type="button" className="ac">AC</button>
              <button type="button" className="both">+/-</button>
              <button type="button" className="percentage">%</button>
              <button type="button" className="division">÷</button>
              <button type="button" className="seven">7</button>
              <button type="button" className="eight">8</button>
              <button type="button" className="nine">9</button>
              <button type="button" className="x">x</button>
              <button type="button" className="four">4</button>
              <button type="button" className="five">5</button>
              <button type="button" className="six">6</button>
              <button type="button" className="minus">-</button>
              <button type="button" className="one">1</button>
              <button type="button" className="two">2</button>
              <button type="button" className="three">3</button>
              <button type="button" className="plus">+</button>
              <button type="button" className="zero">0</button>
              <button type="button" className="full-stop">.</button>
              <button type="button" className="equals-to">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorUi;
