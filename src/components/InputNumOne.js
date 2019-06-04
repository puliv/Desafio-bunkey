import React, { Component } from 'react'

class InputNumOne extends Component {
    constructor() {
        super()
        this.state = {
            temporalNum: ''
        }
    }

    temporalNumber = (e) => {
        this.setState({
            temporalNum: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.temporalNumber}
                    value={this.state.temporalNum}
                />
            </div>
        )
    }
}

export default InputNumOne