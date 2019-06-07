import React, { Component } from 'react'
import Operator from './Operator'
import { connect } from 'react-redux'
import { numOne, numTwo, theResult } from '../redux/actions/index'
import '../App.css';

class Inputs extends Component {

    onClick = () => {
        const calculate = () => {
            let content = '';
            content = content + 'num1=' + this.props.reducer.valueOne + '&num2=' + this.props.reducer.valueTwo;
            // console.log(content)
            let url = 'https://cors-anywhere.herokuapp.com/http://test.bunkey.tv:3000/';
            // console.log(this.props.reducer.currentOperation);
            fetch(url + this.props.reducer.currentOperation,
                {
                    method: 'POST',
                    body: content,
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Origin': 'application/x-www-form-urlencoded',
                    }
                })
                .then(data => data.json())
                .then(data => {
                    // console.log(data)
                    this.props.getResult(data.result)
                })
                .catch(error => console.error('Error:', error));
        };
        calculate();
    }

    render() {
        return (
            <div className="calculator">
                <input
                    className="inputs"
                    type='text'
                    onChange={(e) => this.props.getFirstValue(e.target.value)}
                />
                <input
                    className="inputs"
                    type='text'
                    onChange={(e) => this.props.getSecondValue(e.target.value)}
                />
                <Operator />
                <button
                    onClick={this.onClick} >
                    Calcular
                </button>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        ...state
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        getFirstValue: numOne(dispatch),
        getSecondValue: numTwo(dispatch),
        getResult: theResult(dispatch)
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Inputs)