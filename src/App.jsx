import Header from './components/Header'
import Screen from './components/Screen'
import KeyBoard from './components/KeyBoard'
import './App.css'
import { useReducer, useState } from 'react'
import { ACTIONS } from './actions'

const evaluate = ({currentOperand, prevOperand, operation}) => {
  const previous = parseFloat(prevOperand);
  const current = parseFloat(currentOperand);
  if(isNaN(previous) || isNaN(current)) return ''
  let computation = 0

  switch(operation) {
    case '+':
      computation = previous + current;
      break;
    case '-':
      computation = previous - current;
      break;
    case '×':
      computation = previous * current;
      break;
    case '÷':
      if (current == 0) {
        return 'Cannot be divided by zero';
        
      }
      computation = previous / current;
      break;
  }
  
  return computation.toString();
}

const reducer = (state, {type, payload}) => {
  switch(type) {
      case ACTIONS.ADD_DIGIT:
        if (state.currentOperand === '0' && payload.input === '0') {
            return state;
        }
        if (isNaN(parseFloat(state.currentOperand)) || state.currentOperand === 'Cannot be divided by zero') {
            return {
                currentOperand: payload.input,
                prevOperand: null,
                operation: null
            };
        }
        if ((state.currentOperand || '0').includes('.') && payload.input === '.') {
            return state;
        }
        return {
            ...state,
            currentOperand: `${state.currentOperand === '0' ? '' : state.currentOperand}${payload.input}`
        };

  
      
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand === '0' && state.prevOperand == null) return state;

        if (state.currentOperand === '0') {
            return {
                ...state,
                operation: payload.input,
            };
        }

        if (state.prevOperand == null) {
            return {
                ...state,
                operation: payload.input,
                prevOperand: state.currentOperand,
                currentOperand: '0',
            };
        }

        return {
          ...state,
          prevOperand: evaluate(state),
          operation: payload.input,
          currentOperand: '0',
        }

      case ACTIONS.DELETE_DIGIT: 
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0,-1) || '0',
        }

      case ACTIONS.CLEAR:
        return { currentOperand: '0', prevOperand: null, currentOperation: null }

      case ACTIONS.EVALUATE:
        return {
          ...state,
          currentOperand: evaluate(state),
          prevOperand: null,
          operation: null,
        }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { currentOperand: '0', prevOperand: null, operation: null});
  const [theme, setTheme] = useState('');

  return (
    <div className={`wrapper ${theme}`}>
      <div className="wrapper-gap">
        <Header setTheme={setTheme} ></Header>
        <Screen state={state}></Screen>
        <KeyBoard dispatch={dispatch} ></KeyBoard>
      </div>
    </div>
  )
}

export default App
