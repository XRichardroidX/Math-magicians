import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcInput, setCalcInput] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const buttonName = event.target.name;
    return setCalcInput((obj) => calculate(obj, buttonName));
  };

  const { total, next, operation } = calcInput;
  const result = `${total}${operation}${next}`.replace(/null/g, '');
  const trimedResult = result.replace(/undefined/g, '');

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        id="calcDisplay"
        value={trimedResult === '' ? '0' : trimedResult}
        disabled
      />

      <div className="inputs">
        <button type="button" name="AC" onClick={handleClick}>AC</button>
        <button type="button" name="+/-" onClick={handleClick}>+/-</button>
        <button type="button" name="%" onClick={handleClick}>%</button>
        <button type="button" name="÷" onClick={handleClick}>÷</button>
        <button type="button" name="7" onClick={handleClick}>7</button>
        <button type="button" name="8" onClick={handleClick}>8</button>
        <button type="button" name="9" onClick={handleClick}>9</button>
        <button type="button" name="x" onClick={handleClick}>x</button>
        <button type="button" name="4" onClick={handleClick}>4</button>
        <button type="button" name="5" onClick={handleClick}>5</button>
        <button type="button" name="6" onClick={handleClick}>6</button>
        <button type="button" name="-" onClick={handleClick}>-</button>
        <button type="button" name="1" onClick={handleClick}>1</button>
        <button type="button" name="2" onClick={handleClick}>2</button>
        <button type="button" name="3" onClick={handleClick}>3</button>
        <button type="button" name="+" onClick={handleClick}>+</button>
        <button type="button" name="0" onClick={handleClick}>0</button>
        <button type="button" name="." onClick={handleClick}>.</button>
        <button type="button" name="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
