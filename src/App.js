import React from 'react';
import './App.css';
import InputNumOne from './components/InputNumOne';
import Operator from './components/Operator';
import Calculate from './components/ButtonCalculate';
import Result from './components/Result';
import InputNumTwo from './components/InputNumTwo';

function App() {
  return (
    <div>
      <InputNumOne/>
      <InputNumTwo/>
      <Operator/>
      <Calculate/>
      <Result/>
    </div>
  );
}

export default App;
