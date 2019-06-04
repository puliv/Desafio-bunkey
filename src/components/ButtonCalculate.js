import React, { Component } from 'react'
import { connect } from 'react-redux'
import { numOne, numTwo } from '../redux/actions/index'

class Calculate extends Component {

    tempValue = () => {
        this.props.getFirstValue(this.props.temporalNum)
        this.props.getSecondValue(this.props.provitionalNum)
    }

    render() {
        return (
            <div>
                <button onClick={this.tempValue} >
                    Calcular
                </button>
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
        getFirstValue: numOne(dispatch),
        getSecondValue: numTwo(dispatch)
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Calculate)