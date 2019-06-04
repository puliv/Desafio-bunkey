import React, { Component } from 'react'

class InputNumTwo extends Component {
    constructor() {
        super()
        this.state = {
            provisionalNum: ''
        }
    }

    provisionalNumber = (e) => {
        this.setState({
            provisionalNum: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.provisionalNumber}
                    value={this.state.provitionalNum}
                />
            </div>
        )
    }
}

export default InputNumTwo