import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Result from './components/Result';
import { connect } from 'react-redux'

function App() {
  return (
    <div className="calculator">
      <Inputs />
      <Result />
    </div>
  );
}

export default connect()(App);
