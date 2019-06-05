import React, { Component } from 'react'
import { connect } from 'react-redux'
import { numOne, numTwo } from '../redux/actions/index'


class InputNumOne extends Component {
    constructor() {
        super()
        this.state = {
            temporalNum: '',
            provisionalNum: ''
        }
    }

    provisionalNumber = (e) => {
        this.setState({
            temporalNum: e.target.value,
            provisionalNum: e.target.value
        })
    }

    tempValue = (e) => {
        this.props.getFirstValue(this.state.temporalNum)
        this.props.getSecondValue(this.state.provitionalNum)
        // console.log(this.props.reducer.temporalNum)
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.provisionalNumber}
                    value={this.state.temporalNum}
                />
                <input
                    type='text'
                    onChange={this.provisionalNumber}
                    value={this.state.provitionalNum}
                />
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
    }
};

export default connect(mapStateToProps, mapActionsToProps)(InputNumOne)