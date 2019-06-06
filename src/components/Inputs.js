import React, { Component } from 'react'
import Operator from './Operator'
import { connect } from 'react-redux'
import { numOne, numTwo } from '../redux/actions/index'

class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            temporalNum: '',
            provisionalNum: ''
        }
    }

    provisionalNumber = (e) => {
        this.setState({
            provisionalNum: e.target.value
        })
    }

    temporalNumber = (e) => {
        this.setState({
            temporalNum: e.target.value
        })
    }

    tempValue = () => {
        this.props.getFirstValue(this.state.temporalNum)
        this.props.getSecondValue(this.state.provisionalNum)
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.temporalNumber}
                    value={this.state.temporalNum}
                />
                <input
                    type='text'
                    onChange={this.provisionalNumber}
                    value={this.state.provisionalNum}
                />
                <Operator />
                <button onClick={this.tempValue}>
                    Calcular
                </button>
            </div >
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
        getFirstValue: numOne(dispatch),
        getSecondValue: numTwo(dispatch)
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Inputs)