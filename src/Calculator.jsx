import React, { useState } from 'react';
import './App.css'; // Estilo CSS aqui

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [lastClicked, setLastClicked] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(output);
        setOutput(result.toString());
        setInput(result.toString());
      } catch (error) {
        setOutput('Error');
        setInput('Error');
      }
    } else if (value === 'C') {
      setOutput('');
      setInput('0');
      setLastClicked('');
    } else {
      if (value === '.' && lastClicked === '.') {
        return; // Evita múltiplos pontos no mesmo número
      }

      const newInput = (input === '0' ? '' : input) + value;
      const newOutput = output + value;

      setInput(newInput);
      setOutput(newOutput);
      setLastClicked(value);
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {input}
      </div>
      <button id="clear" onClick={() => handleButtonClick('C')}>
        C
      </button>
      <button id="equals" onClick={() => handleButtonClick('=')}>
        =
      </button>
      <button id="zero" onClick={() => handleButtonClick('0')}>
        0
      </button>
      <button id="one" onClick={() => handleButtonClick('1')}>
        1
      </button>
      <button id="two" onClick={() => handleButtonClick('2')}>
        2
      </button>
      <button id="three" onClick={() => handleButtonClick('3')}>
        3
      </button>
      <button id="four" onClick={() => handleButtonClick('4')}>
        4
      </button>
      <button id="five" onClick={() => handleButtonClick('5')}>
        5
      </button>
      <button id="six" onClick={() => handleButtonClick('6')}>
        6
      </button>
      <button id="seven" onClick={() => handleButtonClick('7')}>
        7
      </button>
      <button id="eight" onClick={() => handleButtonClick('8')}>
        8
      </button>
      <button id="nine" onClick={() => handleButtonClick('9')}>
        9
      </button>
      <button id="add" onClick={() => handleButtonClick('+')}>
        +
      </button>
      <button id="subtract" onClick={() => handleButtonClick('-')}>
        -
      </button>
      <button id="multiply" onClick={() => handleButtonClick('*')}>
        *
      </button>
      <button id="divide" onClick={() => handleButtonClick('/')}>
        /
      </button>
      <button id="decimal" onClick={() => handleButtonClick('.')}>
        .
      </button>
      {/* Adicione os botões restantes conforme necessário */}
    </div>
  );
};

export default Calculator;
