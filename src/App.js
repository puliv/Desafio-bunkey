import React from 'react';
import './App.css';
import InputNum from './components/InputNum';
import Operator from './components/Operator';
import Calculate from './components/ButtonCalculate';
import Result from './components/Result';

function App() {
  return (
    <div>
      <InputNum/>
      <InputNum/>
      <Operator/>
      <Calculate/>
      <Result/>
    </div>
  );
}

export default App;
