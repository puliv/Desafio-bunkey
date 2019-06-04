import React, { Component } from 'react'
import { connect } from 'react-redux'
import { numOne } from '../redux/actions/index'

class Calculate extends Component {

    tempValue = () => {
        this.props.getFirstValue(this.props.temporalNum)
        console.log(this.props.temporalNum + 'hola')
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
        getFirstValue: numOne(dispatch)
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Calculate)