import React, { Component } from 'react'
import { operations } from '../redux/actions/index'
import { connect } from 'react-redux'
import '../App.css';


class Operator extends Component {

    render() {
        return (
            <div className="calculator">
                <select onChange={(e) => this.props.chooseOperator(e.target.value)}>
                    <option value="sumar" >Sumar</option>
                    <option value="restar" >Restar</option>
                    <option value="multipicar" >Multiplicar</option>
                    <option value="dividir" >Dividir</option>
                </select>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        chooseOperator: operations(dispatch)
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Operator)