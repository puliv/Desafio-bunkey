import React from 'react';
import './App.css';
import InputNumOne from './components/InputNumOne';
import Operator from './components/Operator';
// import Calculate from './components/ButtonCalculate';
import Result from './components/Result';
import { connect } from 'react-redux'

function App() {
  return (
    <div>
      <InputNumOne />
      <Operator />
      {/* <Calculate /> */}
      <Result />
    </div>
  );
}

export default connect()(App);
