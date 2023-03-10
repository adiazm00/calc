import './App.css';
import logoCalc from './img/calc.svg'
import Button from './componentes/Button';
import Pantalla from './componentes/Pantalla';
import Clear from './componentes/Clear';
import {useState} from 'react';
import {evaluate} from 'mathjs';




function App() {

  var [input, setInput] = useState('');

  const addInput = val =>{
    setInput(input + val);
  }

  function round(num) {
    return +(Math.round(num + "e+3")  + "e-3");
  }

  const calcular = () =>{
    try{
      if(input){
        setInput(round(evaluate(input.toString())));
      }
      else
        input=''
    }catch(onUndefinedSymbol){
      setInput('Error');
    }
  }

  const subInput = aux =>{
    aux = setInput(input.toString().slice(0, -1));
  }



  return (
    <div className="App">
      <div className='header'>
        <h1>Calculadora</h1>
        <img src={logoCalc} className='logo-img' alt="Logo de calculadora"/>
      </div>
      <div className='container-calculadora'>
      <div className='fila'>
          <Pantalla input={input}/>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          &nbsp;&nbsp;&nbsp;
          <Button manageClick={addInput}>+</Button>

        </div>
        <div className='fila'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          &nbsp;&nbsp;&nbsp;
          <Button manageClick={addInput}>-</Button>

        </div>
        <div className='fila'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          &nbsp;&nbsp;&nbsp;
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={calcular}>=</Button>
          &nbsp;&nbsp;&nbsp;
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <Button manageClick={subInput}>Atrás</Button>
          <Clear manageClick={() =>setInput('')}>Borrar</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
