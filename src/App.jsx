import './App.css'
import {
  useState
} from 'react';

function App() {
  const [output, setOutput] = useState('');
  const [equation, setEquation] = useState([]);

  const isOperand = (str) => {
    return str === '+' || str === '-' || str === '*' || str === '/';
  }

  const buttonPressed = (event) => {
    if (event.target.tagName !== 'BUTTON') return;
    
    const value = event.target.textContent;
    let temp = [...equation]; // A temp array for manipulation

    // If the value us a number
    if (!isNaN(value) && value !== ' ') {
      // If the array is empty or the last index is an operand,
      // simply push the value to the array.
      if (temp.length === 0 || isOperand(temp.at(-1))) {
        temp.push(value);
      } else {
        // Otherwise, concat the value to the last index
        temp[temp.length - 1] += value;
      }
    // If the value is an operand
    } else if (isOperand(value)) {
      // If the array is not empty
      if (temp.length > 0) {
        // If the final index of the array is an operand
        if (isOperand(temp.at(-1))) {
          // Replace the final value with the new one
          temp[temp.length - 1] = value;
        } else {
          // Otherwise push the new value
          temp.push(value);
        }
      }
    // Clear the array if AC is pushed
    } else if (value == 'AC') {
      temp = [];
    }

    setEquation(temp);
    setOutput(temp.join(' '));
  }

  return (
    <>
      <h1>React Calculator</h1>
      <div id='calculator'>
        <div className='row'>
          <input type='text' id='output' name='output' value={output} readOnly />
        </div>
        <div id='buttons-container' onClick={buttonPressed}>
          <div className='row'>
            <button>&lt;</button>
            <button>AC</button>
            <button>%</button>
            <button>/</button>
          </div>
          <div className='row'>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
          </div>
          <div className='row'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>
          <div className='row'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          <div className='row'>
            <button>+/-</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
